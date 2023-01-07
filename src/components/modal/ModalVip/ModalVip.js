import className from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import { zingAction } from '~/redux/action';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import style from './ModalVip.module.scss';

const cx = className.bind(style);
function ModalVip() {
    const dispatch = useDispatch();
    const handleModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(zingAction.actions.setModalVip(false));
        }
    };
    const { booleanVip } = useSelector((state) => state.action);
    return (
        booleanVip && (
            <div className={cx('modal-vip')} onClick={(e) => handleModal(e)}>
                <ModalWrapper>
                    <div className={cx('vip-ctn')}>
                        <h1 className={cx('title')}>Dành Cho Tài Khoản Vip</h1>
                        <div className={cx('describe')}>
                            Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để nghe bài hát này.
                        </div>
                        <ButtonAction className={cx('btn')}>NÂNG CẤP VIP</ButtonAction>
                        <div className={cx('close')} onClick={() => dispatch(zingAction.actions.setModalVip(false))}>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </div>
                </ModalWrapper>
            </div>
        )
    );
}

export default ModalVip;
