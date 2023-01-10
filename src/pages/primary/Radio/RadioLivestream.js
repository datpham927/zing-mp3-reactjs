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
import ItemRadio from '~/components/item/ItemRadio/ItemRadio';

const cx = className.bind(style);
function RadioLivestream({ data }) {
    const navigationPrevRef = useRef();
    const navigationNextRef = useRef();
    return (
        <Container swiper>
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
                    <li className="1-2">
                        <SwiperSlide>
                            <ItemRadio col="" key={item.encodeId} data={item} />
                        </SwiperSlide>
                    </li>
                ))}
                <Button
                    noContent
                    ref={navigationPrevRef}
                    className={cx('btn-right')}
                    iconLeft={<i className="icon ic-go-right"></i>}
                />
                <Button
                    noContent
                    ref={navigationNextRef}
                    className={cx('btn-left')}
                    iconLeft={<i className="icon ic-go-left"></i>}
                />
            </Swiper>
        </Container>
    );
}

export default RadioLivestream;
