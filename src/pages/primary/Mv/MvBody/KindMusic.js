import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryMv } from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
import { setKindTitle } from '~/redux/dataMV';
import style from './MvBody.module.scss';

const cx = className.bind(style);

function KindMusic() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const { kindTitle } = useSelector((state) => state.dataMv);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useParams().id.split('.')[0];
    useEffect(() => {
        const api = async () => {
            const data = await getCategoryMv(id);
            setData(data || []);
        };
        api();
    }, [id]);
    const handleCLick = (e) => {
        navigate(e.link);
        dispatch(setKindTitle(e.name));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('kind-music')} onClick={() => setOpen(!open)}>
                <ButtonAction
                    icon={<i className="icon ic-song mar-r-5"></i>}
                    iconRight={open ? <i className="icon ic-go-up"></i> : <i className="icon ic-go-down"></i>}
                >
                    {kindTitle}
                </ButtonAction>
            </div>
            {open && data.childs && (
                <div className={cx('box')}>
                    {data.childs.map((e) => (
                        <span className={cx('item')} onClick={() => handleCLick(e)}>
                            {e.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default KindMusic;
