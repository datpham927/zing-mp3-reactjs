import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Theme from './Theme/Theme';
import style from './Modal.module.scss';
import ModalArtist from './ModalArtist/ModalArtist';
const cx = classNames.bind(style);

function Modal() {
    const modalTheme = useSelector((state) => state.counter.booleanTheme);
    const { modalArtist } = useSelector((state) => state.data);
    return (
        <>
            {(modalTheme || modalArtist) && <div className={cx('modal')}></div>}
            <Theme />
            {modalArtist && <ModalArtist />}
        </>
    );
}

export default Modal;
