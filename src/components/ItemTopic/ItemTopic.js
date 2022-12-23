import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './ItemTopic.module.scss';

const cx = className.bind(style);

function ItemTopic({ data }) {
    return (
        <div className={cx('topic-item') + ' l-4 col'}>
            <Link to={data.link}>
                <div className={cx('topic-item-img')}>
                    <img src={data?.thumbnail} alt="" />
                    <div className={cx('topic-content')}>
                        <h3>{data?.title}</h3>
                        <div className={cx('small-image')}>
                            {data?.playlists?.map((i) => (
                                <img src={i?.thumbnail} alt="" />
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ItemTopic;
