import { Link } from 'react-router-dom';
import Container from '~/components/container/Container';

import className from 'classnames/bind';
import style from './Home.module.scss';
import LoadImg from '~/components/load/loadImg/LoadImg';

const cx = className.bind(style);

function HomeWeekChart({ data }) {
    return (
        <Container>
            {data?.items?.map((item, index) => (
                <div key={index} className={cx('weekChart') + ' l-4'}>
                    <div className={cx('image')}>
                        <Link to={item.link}>
                            {item.cover ? <img src={item.cover} alt="" /> : <LoadImg className={cx('load')} />}
                        </Link>
                    </div>
                </div>
            ))}
        </Container>
    );
}

export default HomeWeekChart;
