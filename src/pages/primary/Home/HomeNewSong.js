import className from 'classnames/bind';

import style from './Home.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Container from '~/components/container/Container';
import ItemNewRelease from '~/components/item/ItemNewRelease/ItemNewRelease';

const cx = className.bind(style);

function HomeNewSong({ data }) {
    return (
        <Container title={data.title} all link={data.link} swiper>
            <Swiper
                className={cx('swiper')}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
            >
                {data?.items?.map((item, index) => (
                    <li className="1-2" key={item.encodeId}>
                        <SwiperSlide>
                            <ItemNewRelease col="" data={item} index={index + 1} />
                        </SwiperSlide>
                    </li>
                ))}
            </Swiper>
        </Container>
    );
}

export default HomeNewSong;
