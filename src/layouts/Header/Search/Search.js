/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import RecentlyMenu from './Recently/RecentlyMenu';
import KeywordsMenu from './Keywords/KeywordsMenu';
import useDebounce from '~/components/hooks/useDebounce';
import SuggestMenu from './Suggest/SuggestMenu';

import * as searchApi from '~/components/servicesApi/searchService';
import KeywordsItem from './Keywords/KeywordsItem';
const cx = classNames.bind(style);

function Search() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchResult, setSearchResult] = useState([]);
    const [searchSuggest, setSearchSuggest] = useState([]);
    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [borderRadius, setBorderRadius] = useState(false);
    const [open, setOpen] = useState(false);

    const ref = useRef();
    const debouncedValue = useDebounce(value, 500);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            setShowResult(true);
            setShowBtn(false);
            return;
        }
        const fetchApi = async () => {
            const data = await searchApi.search(debouncedValue);
            setSearchResult(data.songs || []);
        };

        fetchApi();
    }, [debouncedValue]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await searchApi.top100();
            setSearchSuggest(data.newRelease || []);
        };
        fetchApi();
    }, []);
    const handleValueChange = (e) => {
        setBorderRadius(false);
        setValue(e);
        setShowBtn(true);
        setShowResult(false);
    };

    const hideBtnClose = () => {
        setBorderRadius(false);
        setShowBtn(false);
        setValue('');
        setOpen(false);
        setSearchResult([]);
        setShowResult(false);
        ref.current.focus();
    };
    const appearInput = () => {
        setOpen(true);
        setBorderRadius(true);
        setShowResult(true);
    };
    // hiện box round inout

    // eslint-disable-next-line no-lone-blocks

    return (
        <div
            className={cx(
                'search',
                ((searchSuggest.length > 0 && borderRadius) || searchResult.length > 0) && 'borderRadius',
            )}
        >
            <div className={cx('icon-search')}>
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <input
                ref={ref}
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                onFocus={appearInput}
            />
            <div className={cx('icon-search')} onClick={hideBtnClose}>
                {showBtn && <ion-icon name="close-outline"></ion-icon>}
            </div>

            {searchSuggest.length > 0 &&
                open &&
                (showResult ? (
                    <div className={cx('menu-search')}>
                        <div className={cx('show')}>
                            {/* ----------- gợi ý ----------- */}
                            <SuggestMenu data={searchSuggest} />
                        </div>
                    </div>
                ) : (
                    searchResult.length > 0 && (
                        <div className={cx('menu-search')}>
                            <div className={cx('show')}>
                                {/* ------------ từ khóa liên quan ----------- */}
                                <KeywordsMenu data={searchResult} />
                                {/* ------------ ----------------- */}
                                <KeywordsItem data={`Tim kiếm "${value}"`} />
                                <RecentlyMenu data={searchResult} />
                            </div>
                        </div>
                    )
                ))}
        </div>
    );
}

export default Search;
