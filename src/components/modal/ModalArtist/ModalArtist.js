import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '~/components/Icons';
import { setModalArtist, zingArtist } from '~/redux/dataArtist';
import style from './ModalArtist.module.scss';

const cx = classNames.bind(style);

function ModalArtist() {
    const { dataArtist } = useSelector((state) => state.dataArtist);
    const dispatch = useDispatch();
    const handleModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(zingArtist.actions.setModalArtist(false));
        }
    };
    return (
        <div className={cx('wrapper')} onClick={(e) => handleModal(e)}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <img src={dataArtist.thumbnail} alt="" />
                    <h3>{dataArtist.name}</h3>
                </div>
                <div className={cx('body')}>
                    <div className={cx('describe')} dangerouslySetInnerHTML={{ __html: dataArtist?.biography }}></div>
                </div>
                <span onClick={() => dispatch(setModalArtist(false))}>
                    <Icon.IconClose />
                </span>
            </div>
        </div>
    );
}

export default ModalArtist;
