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
import { setCreatePlayList } from '~/redux/FavoriteList';
const cx = className.bind(style);
function ModalAddPlayList() {
    const dispatch = useDispatch();
    const [btn, setBtn] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [summit, setSummit] = useState(false);
    const [value, setValue] = useState('');
    const [data, setData] = useState({});
    const { booleanModalAddPlayList } = useSelector((state) => state.action);
    const inputRef = useRef();
    const handleValue = (e) => {
        setSummit(false);
        setValue(e.target.value);
    };
    const valueNew = useDebounce(value, 1000);

    useEffect(() => {
        setData([]);
        if (valueNew) {
            const api = async () => {
                const data = await search(valueNew);
                setSummit(true);
                setData(
                    {
                        title: valueNew,
                        encodeId: uuidv4(),
                        link: '',
                        thumbnailM: data.songs[0].thumbnailM,
                        songs: [...data.songs],
                    } || {},
                );
            };
            api();
        }
    }, [valueNew]);
    const handleSummit = () => {
        if (summit) {
            if (data?.songs?.length > 0) {
                dispatch(setCreatePlayList(data));
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
            dispatch(setModalAddPlayList(false));
            setSummit(false);
            setData([]);
            setValue('');
            inputRef.current.value = '';
        }
    };
    return (
        booleanModalAddPlayList && (
            <ModalWrapper>
                <div className={cx('vip-ctn')}>
                    <h1 className={cx('title')}>Tạo playlist mới</h1>
                    <div className={cx('input')}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Nhập tên playlist"
                            onChange={handleValue}
                            onBlur={() => {
                                summit ? setSummit(true) : setSummit(false);
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
                    <ButtonAction className={cx('btn', summit && 'active')} onClick={handleSummit}>
                        Tạo Mới
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
