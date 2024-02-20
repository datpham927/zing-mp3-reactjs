import className from 'classnames/bind';
import LoadImg from '~/components/load/loadImg/LoadImg';
import toastMessage from '~/components/modal/toast';
import style from './ItemPodcastH.module.scss';

const cx = className.bind(style);

function ItemPodcastH({ data, col = 'l-12 m-12' }) {
    return (
        <div className={`${col} col`}>
            <div className={cx('podcast-item')} onClick={() => toastMessage('Đang phát triển!')}>
                <div
                    className={cx('cover')}
                    style={{
                        backgroundImage: `url(${data.thumbnailM}`,
                    }}
                ></div>
                <div className={cx('left')}>
                    <LoadImg>
                        <img src={data.thumbnailM} className={cx('image')} alt="" />
                    </LoadImg>
                </div>
                <div className={cx('right')}>
                    <h3 className={cx('host')}>{data.artists.name}</h3>
                    <h3 className={cx('title')}>{data.title}</h3>
                    <h3 className={cx('subtitle')}>{data.description}</h3>
                </div>
            </div>
        </div>
    );
}

export default ItemPodcastH;
