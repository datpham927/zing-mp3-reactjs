import { useEffect, useState } from 'react';

function Follow({ follow }) {
    const [newFollow, setFollow] = useState('');
    useEffect(() => {
        if (follow < 1000) {
            setFollow(follow + ' ');
        } else if (follow < 1000000) {
            setFollow((follow / 1000).toFixed(0) + 'K ');
        } else if (follow < 1000000000) {
            setFollow((follow / 1000000).toFixed(1) + 'M ');
        }
    }, [follow]);
    return newFollow;
}

export default Follow;
