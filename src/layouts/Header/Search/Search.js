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
            setBorderRadius(true);
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
        setBorderRadius(true);
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
        setShowResult(true);
        ref.current.focus();
    };
    const appearInput = () => {
        setOpen(true);
        setBorderRadius(true);
        setSearchResult([]);
        setShowResult(true);
    };
    // ẩn khung kết quả
    window.onclick = (e) => {
        if (
            !e.target.closest('.Search_icon-search__TdugZ') &&
            !e.target.closest('.Search_menu-search__mVQK0') &&
            !e.target.closest('input')
        ) {
            if (e.target.closest('.Search_close__S-Oy5')) {
                hideBtnClose();
            } else {
                setOpen(false);
                setBorderRadius(false);
            }
        }
    };

    return (
        <div
            className={cx(
                'search',
                ((searchSuggest.length > 0 && borderRadius) || (searchResult.length > 0 && borderRadius)) &&
                    'bgrHeader',
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
            <div className={cx('close')}>{showBtn && <ion-icon name="close-outline"></ion-icon>}</div>

            {searchSuggest.length > 0 &&
                open &&
                (showResult ? (
                    <div className={cx('menu-search')}>
                        <div className={cx('show')}>
                            {/* -----------Đề Xuất Cho Bạn ----------- */}
                            <SuggestMenu data={searchSuggest} />
                        </div>
                    </div>
                ) : (
                    <div className={cx('menu-search')}>
                        <div className={cx('show')}>
                            {/* ------------ từ khóa liên quan ----------- */}
                            <div className={cx('Keywords')}>
                                <div className={cx('Keywords-header')}>
                                    <h1>Từ Khóa Liên Quan</h1>
                                    {searchResult.length > 0 && <KeywordsMenu data={searchResult} />}
                                    <KeywordsItem data={`Tim kiếm "${value}"`} />
                                </div>
                            </div>
                            {/* ------------ ----------------- */}
                            {searchResult.length > 0 && <RecentlyMenu data={searchResult} />}
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Search;
