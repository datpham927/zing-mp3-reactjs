import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Theme from './Theme/Theme';
import style from './Modal.module.scss';
import ModalArtist from './ModalArtist/ModalArtist';
import ModalVip from './ModalVip/ModalVip';
import ModalFollow from './ModalFollow/ModalFollow';
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
        </>
    );
}

export default Modal;
