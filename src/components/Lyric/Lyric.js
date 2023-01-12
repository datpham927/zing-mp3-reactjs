import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLyric } from '~/components/Api/Service';
import Button from '~/components/Button';
import { setOpenLyric } from '~/redux/action';
import ItemLyric from './ItemLyric';
import style from './Lyric.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const cx = className.bind(style);
function Lyric() {
    const [data, setData] = useState([]);
    const [size, setSize] = useState('s');
    const [open, setOpen] = useState(false);
    const [playFullscreen, setPlayFullScreen] = useState(false);
    const [bgr, setBgr] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const dispatch = useDispatch();
    const { idAudio, activePlay } = useSelector((state) => state.dataControl);
    const { openLyric } = useSelector((state) => state.action);

    useEffect(() => {
        const api = async () => {
            const data = await getLyric(idAudio?.encodeId);
            setData(data || []);
        };
        api();
    }, [idAudio?.encodeId]);

    const handle = (e) => {
        if (!e.target.closest('.Lyric_setting__QRvsQ') && !e.target.closest('.Lyric_menu__2F3sy')) {
            setOpenMenu(false);
        }
    };

    useEffect(() => {
        if (
            (document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)
        ) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }, []);

    useEffect(() => {
        var time;
        if (openLyric) {
            setOpen(false);
        } else {
            time = setTimeout(() => {
                setOpen(true);
            }, 600);
        }
        return () => clearTimeout(time);
    }, [openLyric]);

    return (
        !open && (
            <div className={cx('wrapper', openLyric ? 'open' : 'close')}>
                <div className={cx('background')}>
                    {bgr ? (
                        <div className={cx('list-img')}>
                            <Swiper
                                effect={'fade'}
                                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                                autoplay={{
                                    delay: 8000,
                                    disableOnInteraction: false,
                                }}
                                className="mySwiper"
                                loop={true}
                                speed={1000}
                            >
                                {data?.defaultIBGUrls?.map((e) => (
                                    <SwiperSlide key={uuidv4()}>
                                        <div className={cx('item')}>
                                            <img src={e} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <>
                            <div
                                className={cx('blur-image')}
                                style={{ backgroundImage: `url(${idAudio?.thumbnailM})` }}
                            />
                            <div className={cx('overlay')} />
                        </>
                    )}
                </div>

                <div className={cx('content')} onClick={handle}>
                    <div className={cx('header')}>
                        <div className={cx('info-song-mb') + ' l-0 m-0'}>
                            <div className={cx('image-mb', activePlay && 'action-mb')}>
                                <img src={idAudio?.thumbnail} alt="" />
                            </div>
                            <div className={cx('content-mb')}>
                                <div className={cx('title-mb')}>{idAudio?.title}</div>
                                <span className={cx('singer')}>
                                    {idAudio?.artists?.map((i, index) => (
                                        <span key={uuidv4()}>
                                            <span>
                                                <Link to={i.link}>{i.name}</Link>
                                            </span>
                                            {index < idAudio?.artists?.length - 1 && ', '}
                                        </span>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className={cx('title') + ' c-0'}>Lời bài hát</div>

                        <div className={cx('action')}>
                            <Button
                                primary
                                content="Toàn màng hình"
                                iconLeft={<i className="icon ic-scale-1"></i>}
                                className={cx('btn') + ' c-0'}
                            />
                            <div className={cx('setting')} onClick={() => setOpenMenu((e) => !e)}>
                                <Button
                                    primary
                                    content="Cài đặt"
                                    iconLeft={<i className="icon ic-settings"></i>}
                                    className={cx('btn')}
                                />
                                {openMenu && (
                                    <div className={cx('menu')}>
                                        <div className={cx('option')}>
                                            <div className={cx('left')}>
                                                <h3>Hình nền</h3>
                                            </div>
                                            <div className={cx('right')}>
                                                <div
                                                    className={cx('button', bgr && 'action')}
                                                    onClick={() => setBgr((e) => !e)}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className={cx('option')}>
                                            <div className={cx('left')}>
                                                <h3>Cỡ chữ lời nhạc</h3>
                                            </div>
                                            <div className={cx('right')}>
                                                <button
                                                    className={cx('btn-size', 's', size === 's' && 'active')}
                                                    onClick={() => setSize('s')}
                                                >
                                                    A
                                                </button>
                                                <button
                                                    className={cx('btn-size', 'm', size === 'm' && 'active')}
                                                    onClick={() => setSize('m')}
                                                >
                                                    A
                                                </button>
                                                <button
                                                    className={cx('btn-size', 'l', size === 'l' && 'active')}
                                                    onClick={() => setSize('l')}
                                                >
                                                    A
                                                </button>
                                            </div>
                                        </div>

                                        <div className={cx('option')}>
                                            <div className={cx('left')}>
                                                <h3>Luôn phát nhạc toàn màng hình</h3>
                                            </div>
                                            <div className={cx('right')}>
                                                <div
                                                    className={cx('button', playFullscreen && 'action')}
                                                    onClick={() => setPlayFullScreen((e) => !e)}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Button
                                primary
                                content="Đóng"
                                iconLeft={<i className="icon ic-go-down"></i>}
                                onClick={() => {
                                    dispatch(setOpenLyric(false));
                                    setOpenMenu(false);
                                }}
                                className={cx('btn')}
                            />
                        </div>
                    </div>

                    <div className={cx('body')}>
                        <div className={cx('left') + ' l-5 c-0'}>
                            <div className={cx('image')}>
                                <img src={idAudio?.thumbnailM} alt="" />
                                {activePlay && (
                                    <div className={cx('play-music')}>
                                        <img
                                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={cx('right') + ' l-7 c-12'}>
                            <ul className={cx('lyric', size)}>
                                {data?.sentences?.map((e) => (
                                    <ItemLyric data={e} key={uuidv4()} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Lyric;
