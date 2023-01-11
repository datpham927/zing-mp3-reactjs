/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useSelector } from 'react-redux';
import style from './Lyric.module.scss';
const cx = className.bind(style);

function ItemLyric({ data }) {
    const { currentTimeAudio } = useSelector((state) => state.currentTimeAudio);
    let texts = '';
    data.words.forEach((e) => {
        texts += e.data + ' ';
    });
    let start = data.words[0].startTime / 1000;
    let end = data.words[data.words?.length - 1].endTime / 1000;
    const songPlayView = document?.querySelector('.Lyric_active__BbzsP');
    songPlayView?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
    });
    return (
        <li
            className={cx(
                'item',
                currentTimeAudio >= start && currentTimeAudio < end && 'active',
                currentTimeAudio > end && 'is-over',
            )}
        >
            {texts}
        </li>
    );
}

export default ItemLyric;