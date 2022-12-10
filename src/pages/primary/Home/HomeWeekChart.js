import { Link } from 'react-router-dom';
import Container from '~/components/container/Container';
import LoadImg from '~/components/loadImg/LoadImg';
import className from 'classnames/bind';
import style from './Home.module.scss';

const cx = className.bind(style);

function HomeWeekChart({ data }) {
    return (
        <Container>
            {data?.items?.map((item, index) => (
                <div key={index} className={cx('weekChart') + ' l-4'}>
                    <div className={cx('image')}>
                        <Link to={item.link}>
                            <LoadImg timeLoad={2000} classNam={cx('load')}>
                                <img src={item.cover} alt="" />
                            </LoadImg>
                        </Link>
                    </div>
                </div>
            ))}
        </Container>
    );
}

export default HomeWeekChart;
