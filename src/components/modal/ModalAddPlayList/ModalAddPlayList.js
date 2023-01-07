/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
import useDebounce from '~/components/hooks/useDebounce';
import { setModalAddPlayList } from '~/redux/action';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import style from './ModalAddPlayList.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Slide, toast } from 'react-toastify';
import { setCreatePlayList, setEditPlayList } from '~/redux/FavoriteList';
import { useNavigate } from 'react-router-dom';
const cx = className.bind(style);
function ModalAddPlayList() {
    const dispatch = useDispatch();
    const [btn, setBtn] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [summit, setSummit] = useState(false);
    const [value, setValue] = useState('');
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { booleanModalAddPlayList, booleanEdit } = useSelector((state) => state.action);
    const inputRef = useRef();
    const handleValue = (e) => {
        setValue(e.target.value);
    };
    const valueNew = useDebounce(value, 1000);
    useEffect(() => {
        setData([]);
        setSummit(false);
        if (!booleanEdit) {
            if (valueNew) {
                const api = async () => {
                    const data = await search(valueNew);
                    setSummit(true);
                    const id = uuidv4();
                    setData(
                        {
                            title: valueNew,
                            encodeId: id,
                            link: `/album/${valueNew}/${id}.html`,
                            videos: [...data.videos],
                            playlists: [...data.playlists],
                            thumbnailM: data.songs[0].thumbnailM,
                            song: { items: [...data.songs] },
                        } || {},
                    );
                };
                api();
            }
        }
    }, [valueNew]);
    const handleSummit = () => {
        if (booleanEdit) {
            dispatch(setEditPlayList(value));
        } else {
            if (summit) {
                if (data?.song?.items?.length > 0) {
                    dispatch(setCreatePlayList(data));
                    navigate('/mymusic');
                } else {
                    toast('Tạo danh sách không thành công', {
                        position: 'bottom-left',
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        transition: Slide,
                    });
                }
            }
        }
        dispatch(setModalAddPlayList(false));
        setSummit(false);
        setData([]);
        setValue('');
        inputRef.current.value = '';
    };
    return (
        booleanModalAddPlayList && (
            <ModalWrapper>
                <div className={cx('vip-ctn')}>
                    <h1 className={cx('title')}>{booleanEdit ? 'Chỉnh sửa playlist' : 'Tạo playlist mới'}</h1>
                    <div className={cx('input')}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Nhập tên playlist"
                            onChange={handleValue}
                            onBlur={() => {
                                summit && setSummit(true);
                            }}
                        />
                    </div>
                    <div className={cx('option')}>
                        <div className={cx('left')}>
                            <h3>Công khai</h3>
                            <span>Mọi người có thể nhìn thấy playlist này</span>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('button', btn && 'action')} onClick={() => setBtn((e) => !e)}></div>
                        </div>
                    </div>
                    <div className={cx('option')}>
                        <div className={cx('left')}>
                            <h3>Phát ngẫu nhiên</h3>
                            <span>Luôn phát ngẫu nhiên tất cả bài hát</span>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('button', btn2 && 'action')} onClick={() => setBtn2((e) => !e)}></div>
                        </div>
                    </div>
                    <ButtonAction className={cx('btn', (summit || booleanEdit) && 'active')} onClick={handleSummit}>
                        {booleanEdit ? 'Lưu' : 'Tạo Mới'}
                    </ButtonAction>
                    <div className={cx('close')} onClick={() => dispatch(setModalAddPlayList(false))}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
            </ModalWrapper>
        )
    );
}

export default ModalAddPlayList;
