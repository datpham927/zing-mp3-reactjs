import className from 'classnames/bind';
import style from './HomeLiveRadio.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { v4 as uuidv4 } from 'uuid';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Container from '~/components/container/Container';
import Button from '~/components/Button';
import { useRef } from 'react';
import ItemRadio from '~/components/item/ItemRadio/ItemRadio';

const cx = className.bind(style);
function HomeLiveRadio({ data }) {
    const navigationPrevRef = useRef();
    const navigationNextRef = useRef();
    return (
        <Container swiper all title={data.title} link={'/radio'}>
            <Swiper
                className={('swiper', 'mySwiper')}
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
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        allowTouchMove: true,
                    },
                    740: {
                        slidesPerView: 5,
                        slidesPerGroup: 2,
                    },
                    1025: {
                        slidesPerView: 6,
                        slidesPerGroup: 3,
                    },
                }}
            >
                {data?.items?.map((item, index) => (
                    <li className="1-2" key={uuidv4()}>
                        <SwiperSlide>
                            <ItemRadio col="" key={uuidv4()} data={item} />
                        </SwiperSlide>
                    </li>
                ))}
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

export default HomeLiveRadio;
