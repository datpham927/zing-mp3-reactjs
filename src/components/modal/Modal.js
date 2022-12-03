import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Theme from './Theme/Theme';
import style from './Modal.module.scss';
import ModalArtist from './ModalArtist/ModalArtist';
import ModalVip from './ModalVip/ModalVip';
// import ModalVip from './ModalVip/modalVip';
const cx = classNames.bind(style);

function Modal() {
    const modalTheme = useSelector((state) => state.counter.booleanTheme);
    const { modalArtist } = useSelector((state) => state.dataArtist);
    return (
        <>
            {(modalTheme || modalArtist) && <div className={cx('modal')}></div>}
            {modalTheme && <Theme />}
            {modalArtist && <ModalArtist />}
            <ModalVip />
        </>
    );
}

export default Modal;
