/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '~/firebasse/config';
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

        dispatch(setOpenModalLogin(false));
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currents) => {
            if (currents?.displayName) {
                console.log(currents);
                const { displayName, email, photoURL } = currents;
                dispatch(
                    setCurrentUser({
                        user: true,
                        displayName,
                        email,
                        photoURL,
                    }),
                );
                toastMessage('Đăng nhập thành công');
            }
        });
    }, []);
    const imgs = [
        'https://static2.yan.vn/YanNews/2167221/202012/son-tung-tro-lai-cdm-chi-ra-poster-bai-hat-giong-phim-trung-34ba995c.jpg',
        'https://menback.com/wp-content/uploads/2020/03/Ribi-Sachi-anh-dep.jpg',
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
                                <SwiperSlide key={uuidv4()}>
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

                    <div
                        className={cx('user-test')}
                        onClick={() => {
                            dispatch(
                                setCurrentUser({
                                    user: true,
                                    displayName: 'Test',
                                    email: '',
                                    photoURL: 'https://htran844.github.io/hihi/img/fb/a8.jpg',
                                }),
                            );
                            dispatch(setOpenModalLogin(false));
                            toastMessage('Đăng nhập thành công');
                        }}
                    >
                        Click vào đây để dùng thử
                    </div>
                    <div className={cx('header')}>
                        <div className={cx('contact')}>
                            <a href="https://www.facebook.com/profile.php?id=100012882123870">Contact me</a>
                        </div>
                        <div
                            className={cx('close')}
                            onClick={() => {
                                dispatch(setOpenModalLogin(false));
                            }}
                        >
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        )
    );
}

export default ModalLogin;
