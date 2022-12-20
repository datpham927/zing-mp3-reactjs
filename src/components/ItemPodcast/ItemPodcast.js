/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import Button from '../Button';
import LoadImg from '../loadImg/LoadImg';
import FormatDate from '../time/FormatDate';
import Minute from '../time/Minute';
import style from './ItemPodcast.module.scss';

const cx = className.bind(style);

function ItemPodcast({ data, col = 'l-12', index, className }) {
    return (
        <div className={cx('item', className) + ` ${col} col `}>
            <div className={cx('include')}>
                <div className={cx('left')}>
                    {index && <div className={cx('number')}>{index}</div>}
                    <LoadImg>
                        <div className={cx('wrapper-img')}>
                            <img src={data?.thumbnail} className={cx('image')} alt="" />
                            <div className={cx('icon-play')}>
                                <ion-icon name="play" role="img" className="md hydrated" aria-label="play"></ion-icon>
                            </div>
                            <div className={cx('play-song')}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                    alt=""
                                />
                            </div>
                        </div>
                    </LoadImg>
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <h1 className={cx('song')}>{data?.title}</h1>
                        </div>
                        <span className={cx('singer')}>{data?.album?.title}</span>
                        <span className={cx('time')}>
                            {
                                <>
                                    <FormatDate time={data?.releaseDate} />• <Minute duration={data.duration} />
                                </>
                            }
                        </span>
                    </div>
                </div>
                <Button
                    content="Thêm vào thư viện"
                    className={cx('add')}
                    iconLeft={<i class="icon ic-20-Bookmark"></i>}
                />
            </div>
        </div>
    );
}

export default ItemPodcast;
