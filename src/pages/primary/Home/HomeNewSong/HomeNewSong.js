import className from 'classnames/bind';

import style from './HomeNewSong.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Container from '~/components/container/Container';
import ItemNewRelease from '~/components/item/ItemNewRelease/ItemNewRelease';
import { useDispatch } from 'react-redux';
import { setCurrentIndex, setPlayListAudio } from '~/redux/dataControl';

const cx = className.bind(style);

function HomeNewSong({ data }) {
    const dispatch = useDispatch();
    const handleClick = (i) => {
        dispatch(setPlayListAudio(data?.items));
        dispatch(setCurrentIndex(i));
    };
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
                breakpoints={{
                    740: {
                        slidesPerView: 2,
                    },
                    1025: {
                        slidesPerView: 3,
                    },
                }}
            >
                {data?.items?.map((item, index) => (
                    <li key={uuidv4()}>
                        <SwiperSlide>
                            <ItemNewRelease col="" data={item} index={index + 1} onClick={() => handleClick(index)} />
                        </SwiperSlide>
                    </li>
                ))}
            </Swiper>
        </Container>
    );
}

export default HomeNewSong;
