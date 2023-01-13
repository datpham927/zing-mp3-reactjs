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
import toastMessage from '~/components/modal/toast';

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
                breakpoints={{
                    1: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        allowTouchMove: true,
                    },
                    740: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        allowTouchMove: false,
                    },
                }}
            >
                {data?.items?.map((i) => (
                    <SwiperSlide>
                        <div className={'col'}>
                            <div
                                className={cx('episode-item')}
                                onClick={() => toastMessage('phần này gọi api được không')}
                            >
                                <LoadImg className={cx('padding-img')}>
                                    <img src={i.thumbnail} alt={i.title} />
                                </LoadImg>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {data.items.length > 3 && (
                <>
                    <Button
                        noContent
                        ref={navigationPrevRef}
                        className={cx('btn-right-banner') + ' c-0'}
                        iconLeft={<i className="icon ic-go-right"></i>}
                    />
                    <Button
                        noContent
                        ref={navigationNextRef}
                        className={cx('btn-left-banner') + ' c-0'}
                        iconLeft={<i className="icon ic-go-left"></i>}
                    />
                </>
            )}
        </Container>
    );
}

export default RadioEpisode;
