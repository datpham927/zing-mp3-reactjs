/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import Loading from '~/components/load/Loading/Loading';
import FormatDate from '~/components/number/time/FormatDate';
import Minute from '~/components/number/time/Minute';
import style from './ItemPodcast.module.scss';

const cx = className.bind(style);

function ItemPodcast({ data, col = 'l-12', index, className, onClick }) {
    // const dispatch = useDispatch();
    const idAudio = useSelector((state) => state.dataControl.idAudio);
    const play = useSelector((state) => state.dataControl.activePlay);

    const handlePlay = () => {
        // dispatch(setIdAudio(data));
        ////dispatch(setActivePlay(true));
        // onClick();
    };
    const handlePause = () => {
        //  dispatch(setActivePlay(false));
    };
    return (
        <div className={cx('item', className) + ` ${col} col `}>
            <div className={cx('include')} onClick={() => handlePlay()}>
                <div className={cx('left')}>
                    {index && <div className={cx('number')}>{index}</div>}
                    <div className={cx('wrapper-img')}>
                        {data?.thumbnail ? <img src={data?.thumbnail} className={cx('image')} alt="" /> : <Loading />}
                        {play === true && data?.encodeId === idAudio?.encodeId ? (
                            <div className={cx('play-song')} onClick={() => handlePause()}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                    alt=""
                                />
                            </div>
                        ) : (
                            <div
                                className={cx('icon-play', data?.encodeId === idAudio?.encodeId && 'pause')}
                                onClick={() => handlePlay()}
                            >
                                <ion-icon name="play" role="img" className="md hydrated" aria-label="play"></ion-icon>
                            </div>
                        )}
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <h1 className={cx('song')}>{data?.title}</h1>
                        </div>
                        <span className={cx('singer')}>{data?.album?.title}</span>
                        <span className={cx('time')}>
                            {
                                <>
                                    <FormatDate time={data?.releaseDate} />• <Minute duration={data?.duration} />
                                </>
                            }
                        </span>
                    </div>
                </div>
                <Button
                    content="Thêm vào thư viện"
                    className={cx('add')}
                    iconLeft={<i className="icon ic-20-Bookmark"></i>}
                />
            </div>
        </div>
    );
}

export default ItemPodcast;
