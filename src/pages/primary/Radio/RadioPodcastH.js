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
import ItemPodcastH from '~/components/item/ItemPodcastH/ItemPodcastH';
const cx = className.bind(style);
function RadioPodcastH({ data }) {
    const navigationPrevRef = useRef();
    const navigationNextRef = useRef();
    return (
        <Container swiper title={data.title}>
            <Swiper
                autoplay={{
                    delay: 3000,
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
                breakpoints={{
                    1: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    740: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                }}
            >
                <Container title={data.title}>
                    {data?.items?.map((item) => (
                        <SwiperSlide>
                            <ItemPodcastH key={item.encodeId} data={item} col={'l-12 m-12 c-12'} />
                        </SwiperSlide>
                    ))}
                </Container>

                <Button
                    noContent
                    primary
                    ref={navigationPrevRef}
                    className={cx('btn-right-center')}
                    iconLeft={<i className="icon ic-go-right"></i>}
                />
                <Button
                    noContent
                    primary
                    ref={navigationNextRef}
                    className={cx('btn-left-center')}
                    iconLeft={<i className="icon ic-go-left"></i>}
                />
            </Swiper>
        </Container>
    );
}

export default RadioPodcastH;
