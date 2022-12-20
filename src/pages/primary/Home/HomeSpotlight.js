import ItemArtists from '~/components/ItemArtists/ItemArtists';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Pagination } from 'swiper';
import Container from '~/components/container/Container';

function HomeSpotlight({ data }) {
    return (
        <Container swiper>
            <Swiper
                className={'swiper'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination]}
                slidesPerView={6}
                slidesPerGroup={3}
            >
                {data?.items?.map((item, index) => (
                    <li key={index} className="1-2">
                        <SwiperSlide>
                            <ItemArtists col="" timeLoad={0} key={index} data={item} />
                        </SwiperSlide>
                    </li>
                ))}
            </Swiper>
        </Container>
    );
}

export default HomeSpotlight;
