/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';
import style from './Lyric.module.scss';
const cx = className.bind(style);

function ItemLyric({ data }) {
    const { currentTimeAudio } = useSelector((state) => state.currentTimeAudio);
    var texts = '';
    data.words.forEach((e) => {
        texts += e.data + ' ';
    });
    const lyricRef = useRef();
    let start = data.words[0].startTime / 1000;
    let end = data.words[data.words?.length - 1].endTime / 1000;

    const lyricView = document?.querySelector('.Lyric_active__hB8VK');
    setTimeout(() => {
        smoothScrollIntoView(lyricView, {
            block: 'center',
            behavior: 'smooth',
        });
    }, 200);
    return (
        <li
            ref={lyricRef}
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
