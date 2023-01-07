import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLyric } from '~/components/Api/Service';
import Button from '~/components/Button';
import { setOpenLyric } from '~/redux/action';
import ItemLyric from './ItemLyric';
import style from './Lyric.module.scss';

const cx = className.bind(style);
function Lyric() {
    const [data, setData] = useState([]);
    const { idAudio } = useSelector((state) => state.dataControl);
    const dispatch = useDispatch();
    useEffect(() => {
        const api = async () => {
            const data = await getLyric(idAudio.encodeId);
            setData(data.sentences);
        };
        api();
    }, [idAudio.encodeId]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('background')}>
                <div className={cx('overlay')} />
            </div>
            {/* img={idAudio.thumbnailM} blurRadius={5} enableStyles */}
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>Lời bài hát</div>

                    <div className={cx('action')}>
                        <Button primary content="Toàn màng hình" iconLeft={<i class="icon ic-scale-1"></i>} />
                        <Button primary content="Cài đặt" iconLeft={<i class="icon ic-settings"></i>} />
                        <Button
                            primary
                            content="Đóng"
                            iconLeft={<i class="icon ic-go-down"></i>}
                            onClick={() => dispatch(setOpenLyric(false))}
                        />
                    </div>
                </div>

                <div className={cx('body')}>
                    <div className={cx('left') + ' l-5'}>
                        <div className={cx('image')}>
                            <img src={idAudio.thumbnailM} alt="" />
                            <div className={cx('play-music')}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('right') + ' l-7'}>
                        <ul className={cx('lyric')}>
                            {data?.map((e) => (
                                <ItemLyric data={e} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lyric;
