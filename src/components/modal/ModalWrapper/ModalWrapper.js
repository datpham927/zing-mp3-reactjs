import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { setModalAddPlayList, setModalFollow, setModalPortal, setModalPortalDelete, setModalVip } from '~/redux/action';
import style from './ModalWrapper.module.scss';
const cx = classNames.bind(style);

function ModalWrapper({ children }) {
    const dispatch = useDispatch();
    const handleModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(setModalVip(false));
            dispatch(setModalFollow(false));
            dispatch(setModalPortal(false));
            dispatch(setModalVip(false));
            dispatch(setModalAddPlayList(false));
            dispatch(setModalPortalDelete(false));
        }
    };
    return (
        <div className={cx('modal-wrapper')} onClick={(e) => handleModal(e)}>
            {children}
        </div>
    );
}

export default ModalWrapper;
