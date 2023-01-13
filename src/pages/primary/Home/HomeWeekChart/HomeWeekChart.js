import { Link } from 'react-router-dom';
import Container from '~/components/container/Container';
import { v4 as uuidv4 } from 'uuid';

import className from 'classnames/bind';
import style from './HomeSpotlight.module.scss';
import LoadImg from '~/components/load/loadImg/LoadImg';

const cx = className.bind(style);

function HomeWeekChart({ data }) {
    return (
        <Container>
            {data?.items?.map((item) => (
                <div key={uuidv4()} className={cx('weekChart') + ' l-4'}>
                    <LoadImg className={cx('image')}>
                        <div className={cx('image')}>
                            <Link to={item.link}>
                                {item.cover ? <img src={item.cover} alt="" /> : <LoadImg className={cx('load')} />}
                            </Link>
                        </div>
                    </LoadImg>
                </div>
            ))}
        </Container>
    );
}

export default HomeWeekChart;
