/* eslint-disable react/jsx-no-comment-textnodes */
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Theme from './Theme/Theme';
import style from './Modal.module.scss';
import ModalArtist from './ModalArtist/ModalArtist';
import ModalVip from './ModalVip/ModalVip';
import ModalFollow from './ModalFollow/ModalFollow';
import ModalTimer from './ModalTimer/ModalTimer';
import ModalPortal from './ModalPortal/ModalPortal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalAddPlayList from './ModalAddPlayList/ModalAddPlayList';
import { setModalPortal, setModalPortalDelete, setTimer } from '~/redux/action';
import { setDeletePlayList } from '~/redux/FavoriteList';
const cx = classNames.bind(style);

function Modal() {
    const { booleanTheme } = useSelector((state) => state.action);
    const { booleanModalPortal, booleanModalPortalDelete } = useSelector((state) => state.action);
    const { modalArtist } = useSelector((state) => state.dataArtist);
    const dispatch = useDispatch();

    return (
        <>
            {(booleanTheme || modalArtist) && <div className={cx('modal')}></div>}
            {booleanTheme && <Theme />}
            {modalArtist && <ModalArtist />}
            <ModalFollow />
            <ModalVip />
            <ModalTimer />
            {booleanModalPortal && (
                <ModalPortal
                    title="Xóa hẹn giờ"
                    content="Bạn có chắc chắn muốn xóa hẹn giờ?"
                    onClick={() => {
                        dispatch(setModalPortal(false));
                        dispatch(setTimer(0));
                    }}
                />
            )}
            {booleanModalPortalDelete && (
                <ModalPortal
                    title="Xóa Playlist"
                    content="Playlist của bạn sẽ bị xóa khỏi thư viện cá nhân. Bạn có muốn xóa?"
                    onClick={() => {
                        dispatch(setDeletePlayList());
                        dispatch(setModalPortalDelete(false));
                        dispatch(setTimer(0));
                    }}
                />
            )}
            <ModalAddPlayList />
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default Modal;
