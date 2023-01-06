import className from 'classnames/bind';
import { useDispatch } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import { setModalPortal, setModalPortalDelete } from '~/redux/action';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import style from './ModalPortal.module.scss';

const cx = className.bind(style);

function ModalPortal({ title, content, onClick }) {
    const dispatch = useDispatch();
    return (
        <ModalWrapper>
            <div className={cx('portal')}>
                <h3 className={cx('title')}>{title}</h3>
                <span>{content}</span>
                <div className={cx('action')}>
                    <ButtonAction
                        className={cx('btn')}
                        onClick={() => {
                            dispatch(setModalPortal(false));
                            dispatch(setModalPortalDelete(false));
                        }}
                    >
                        Không
                    </ButtonAction>
                    <ButtonAction className={cx('btn')} action onClick={onClick}>
                        Có
                    </ButtonAction>
                </div>
            </div>
        </ModalWrapper>
    );
}

export default ModalPortal;
