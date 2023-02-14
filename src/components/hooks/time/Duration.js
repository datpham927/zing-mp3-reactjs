import { useEffect, useState } from 'react';

function Duration({ duration }) {
    const [time, setTime] = useState('');
    useEffect(() => {
        let minute = ('0' + Math.floor(duration / 60)).slice(-2);
        let second = ('0' + (duration % 60)).slice(-2);
        let time = minute + ':' + second;
        setTime(time);
    }, [duration]);
    return time;
}

export default Duration;
