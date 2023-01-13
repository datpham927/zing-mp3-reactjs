import className from 'classnames/bind';
import LoadImg from '~/components/load/loadImg/LoadImg';
import style from './ItemTopic.module.scss';

const cx = className.bind(style);

function ItemTopic({ data }) {
    return (
        <div className={cx('topic-item') + ' l-4  m-4 col'}>
            <div className={cx('topic-item-img')}>
                <LoadImg>
                    <img src={data.thumbnailM} alt="" />
                </LoadImg>
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
