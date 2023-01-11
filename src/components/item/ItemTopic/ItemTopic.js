import className from 'classnames/bind';
import style from './ItemTopic.module.scss';

const cx = className.bind(style);

function ItemTopic({ data }) {
    return (
        <div className={cx('topic-item') + ' l-4  m-4 col'}>
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
        </div>
    );
}

export default ItemTopic;
