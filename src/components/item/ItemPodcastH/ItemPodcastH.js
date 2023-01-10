import className from 'classnames/bind';
import toastMessage from '~/components/modal/toast';
import style from './ItemPodcastH.module.scss';

const cx = className.bind(style);

function ItemPodcastH({ data, col = 'l-12 m-12' }) {
    return (
        <div className={`${col} col`}>
            <div className={cx('podcast-item')} onClick={() => toastMessage('phần này gọi api được không')}>
                <div
                    className={cx('cover')}
                    style={{
                        backgroundImage: `url(${data.thumbnailM}`,
                    }}
                ></div>
                <div className={cx('left')}>
                    <img src={data.thumbnailM} alt="" />
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
