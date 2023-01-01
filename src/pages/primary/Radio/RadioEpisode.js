import className from 'classnames/bind';
import style from './Radio.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Button from '~/components/Button';
import { useRef } from 'react';
import Container from '~/components/container/Container';
import LoadImg from '~/components/load/loadImg/LoadImg';

const cx = className.bind(style);
function RadioEpisode({ data }) {
    const navigationPrevRef = useRef();
    const navigationNextRef = useRef();
    return (
        <Container swiper title={data.title}>
            <Swiper
                className={'swiper'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                mousewheel={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={2}
                slidesPerGroup={1}
            >
                {data?.items?.map((i) => (
                    <SwiperSlide>
                        <div className="l-12 col">
                            <div className={cx('episode-item')}>
                                {i.thumbnail ? (
                                    <img src={i.thumbnail} alt={i.title} />
                                ) : (
                                    <LoadImg className={cx('padding-img')} />
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Button
                noContent
                ref={navigationPrevRef}
                className={cx('btn-right-banner')}
                iconLeft={<i className="icon ic-go-right"></i>}
            />
            <Button
                noContent
                ref={navigationNextRef}
                className={cx('btn-left-banner')}
                iconLeft={<i className="icon ic-go-left"></i>}
            />
        </Container>
    );
}

export default RadioEpisode;
