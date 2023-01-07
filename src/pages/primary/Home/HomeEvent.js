import Button from '~/components/Button';
import Container from '~/components/container/Container';
import className from 'classnames/bind';
import style from './Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                    delay: 5000,
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
                slidesPerView={3}
                slidesPerGroup={1}
            >
                <div className={cx('wrapper-event')}>
                    {data?.items?.map((item) => (
                        <li className="1-4" key={item.encodeId}>
                            <SwiperSlide>
                                <ItemEvent col="" data={item} />
                            </SwiperSlide>
                        </li>
                    ))}
                </div>
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

export default HomeEvent;
