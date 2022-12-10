import className from 'classnames/bind';

import style from './Home.module.scss';
import ItemArtists from '~/components/ItemArtists/ItemArtists';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';

const cx = className.bind(style);

function HomeSpotlight({ data }) {
    return (
        // <Container>
        //     <div >
        //         {data?.items?.map((item, index) => (
        //             <ItemArtists col="l-2" timeLoad={0} key={index} data={item} />
        //         ))}
        //     </div>
        // </Container>
        <Swiper
            className={cx('spotlight')}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={6}
        >
            {data?.items?.map((item, index) => (
                <li key={index} className="1-2">
                    <SwiperSlide>
                        <ItemArtists col="" timeLoad={0} key={index} data={item} />
                    </SwiperSlide>
                </li>
            ))}
        </Swiper>
    );
}

export default HomeSpotlight;
