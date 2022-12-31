import className from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import { setModalPortal, setTimer } from '~/redux/action';
import style from './ModalPortal.module.scss';

const cx = className.bind(style);

function ModalPortal() {
    const dispatch = useDispatch();
    const handleModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(setModalPortal(false));
        }
    };
    const { booleanModalPortal } = useSelector((state) => state.action);
    return (
        booleanModalPortal && (
            <div className={cx('modal')} onClick={(e) => handleModal(e)}>
                <div className={cx('portal')}>
                    <h3 className={cx('title')}>Xóa hẹn giờ</h3>
                    <span>Bạn có chắc chắn muốn xóa hẹn giờ?</span>
                    <div className={cx('action')}>
                        <ButtonAction
                            className={cx('btn')}
                            onClick={() => {
                                dispatch(setModalPortal(false));
                            }}
                        >
                            Không
                        </ButtonAction>
                        <ButtonAction
                            className={cx('btn')}
                            action
                            onClick={() => {
                                dispatch(setModalPortal(false));
                                dispatch(setTimer(0));
                            }}
                        >
                            Có
                        </ButtonAction>
                    </div>
                </div>
            </div>
        )
    );
}

export default ModalPortal;
