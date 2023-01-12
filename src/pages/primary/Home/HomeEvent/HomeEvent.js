import Button from '~/components/Button';
import Container from '~/components/container/Container';
import className from 'classnames/bind';
import style from './HomeEvent.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import ItemEvent from '~/components/item/ItemEvent/ItemEvent';

const cx = className.bind(style);
function HomeEvent({ data }) {
    const navigationPrevRef = useRef();
    const navigationNextRef = useRef();
    return (
        <Container swiper title={data.title}>
            <Swiper
                className={('swiper', 'mySwiper')}
                autoplay={{
                    // delay: 2000,
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
                        allowTouchMove: false,
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                    },
                }}
            >
                <div className={cx('wrapper-event')}>
                    {data?.items?.map((item) => (
                        <SwiperSlide key={uuidv4()}>
                            <ItemEvent col="" data={item} />
                        </SwiperSlide>
                    ))}
                </div>
                <Button
                    noContent
                    ref={navigationPrevRef}
                    className={cx('btn-right') + ' c-0'}
                    iconLeft={<i className="icon ic-go-right"></i>}
                />
                <Button
                    noContent
                    ref={navigationNextRef}
                    className={cx('btn-left') + ' c-0'}
                    iconLeft={<i className="icon ic-go-left"></i>}
                />
            </Swiper>
        </Container>
    );
}

export default HomeEvent;
