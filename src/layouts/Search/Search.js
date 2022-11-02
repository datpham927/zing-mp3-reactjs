/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import RecentlyMenu from './Recently/RecentlyMenu';
import KeywordsMenu from './Keywords/KeywordsMenu';
const cx = classNames.bind(style);

function search() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [recently, setRecently] = useState([]);
    const [valueInput, setValueInput] = useState('');
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        fetch(`https://lvthai-zingmp3-api.herokuapp.com/api/getDataSearch/${valueInput}`)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setTimeout(() => {
                    setRecently(data.data.songs);
                    // setSuggest(data.data.song);
                }, 100);
            });
        return () => clearTimeout();
    }, [valueInput]);

    const handleValueInput = (value) => {
        setValueInput(value);
    };
    const handleMenu = (e) => {
        if (!e.target === e.currentTarget) {
            setShowResult(false);
        }
    };

    return (
        <div className={cx('search')}>
            <div className={cx('icon-search')}>
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <input
                value={valueInput}
                onChange={(e) => handleValueInput(e.target.value)}
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                onFocus={() => setShowResult(true)}
            />
            {showResult && (
                <div className={cx('menu-search')} onClick={(e) => handleMenu(e)}>
                    <div className={cx('show')}>
                        {/* ----------------------- */}
                        <KeywordsMenu data={recently} />
                        {/* ----------------------------- */}
                        <RecentlyMenu data={recently} />
                        {/* {console.log(suggest)} */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default search;
