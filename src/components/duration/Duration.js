import { useEffect, useState } from 'react';

function Duration({ duration }) {
    const [time, setTime] = useState('');
    useEffect(() => {
        let minute = Math.floor(duration / 60);
        let second = duration % 60;
        let time = '';
        if (minute < 10) {
            // eslint-disable-next-line no-useless-concat
            second < 10 ? (time = '0' + minute + ':' + '0' + second) : (time = '0' + minute + ':' + second);
        } else {
            // eslint-disable-next-line no-useless-concat
            second < 10 ? (time = '0' + minute + ':' + '0' + second) : (time = '0' + minute + ':' + second);
        }
        setTime(time);
    }, [duration]);
    return <>{time}</>;
}

export default Duration;
