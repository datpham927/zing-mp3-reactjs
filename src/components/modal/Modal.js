import { useSelector } from 'react-redux';
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
const cx = classNames.bind(style);

function Modal() {
    const { booleanTheme } = useSelector((state) => state.action);
    const { modalArtist } = useSelector((state) => state.dataArtist);
    return (
        <>
            {(booleanTheme || modalArtist) && <div className={cx('modal')}></div>}
            {booleanTheme && <Theme />}
            {modalArtist && <ModalArtist />}
            <ModalFollow />
            <ModalVip />
            <ModalTimer />
            <ModalPortal />
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
