import className from 'classnames/bind';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '~/firebasse/firebase';
import { setCurrentUser, setOpenModalLogin } from '~/redux/action';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import toastMessage from '../toast';
import style from './ModalLogin.module.scss';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { useEffect } from 'react';

const cx = className.bind(style);

function ModalLogin() {
    const dispatch = useDispatch();
    const { openModalLogin, user } = useSelector((state) => state.action);

    const handleUser = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        onAuthStateChanged(auth, (currents) => {
            if (currents?.displayName) {
                dispatch(
                    setCurrentUser({
                        user: true,
                        displayName: currents.displayName,
                        email: currents.displayName,
                        photoURL: currents.photoURL,
                    }),
                );
                toastMessage('Đăng nhập thành công');
            }
        });
        dispatch(setOpenModalLogin(false));
    };
    const imgs = [
        'https://htran844.github.io/hihi/img/fb/a8.jpg',
        'https://htran844.github.io/hihi/img/ig/i36.jpg',
        'https://htran844.github.io/hihi/img/fb/b8.jpg',
    ];
    useEffect(() => {
        window.onload = function () {
            if (!user) {
                auth.signOut();
            }
        };
    }, []);
    return (
        openModalLogin && (
            <ModalWrapper>
                <div className={cx('login')}>
                    <div className={cx('background')}>
                        <Swiper
                            effect={'fade'}
                            modules={[EffectFade, Navigation, Pagination, Autoplay]}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper"
                            loop={true}
                            speed={1000}
                        >
                            {imgs.map((e) => (
                                <SwiperSlide>
                                    <div className={cx('image')}>
                                        <img src={e} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={cx('content')} onClick={handleUser}>
                        <img
                            src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg"
                            alt=""
                        />
                        <h3>Đăng nhập bằng google</h3>
                    </div>
                    <div className={cx('close')} onClick={() => dispatch(setOpenModalLogin(false))}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
            </ModalWrapper>
        )
    );
}

export default ModalLogin;
