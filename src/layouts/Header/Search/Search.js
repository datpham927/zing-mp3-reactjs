/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import RecentlyMenu from './Recently/RecentlyMenu';
import KeywordsMenu from './Keywords/KeywordsMenu';
import useDebounce from '~/components/hooks/useDebounce';
import SuggestMenu from './Suggest/SuggestMenu';

import * as searchApi from '~/components/Api/Service';
import { Icon } from '~/components/Icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setValueSearch } from '~/redux/action';
const cx = classNames.bind(style);

function Search() {
    const valueRef = useRef();
    const dispatch = useDispatch();
    //điều hướng đường dẫn
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState([]);
    const [searchSuggest, setSearchSuggest] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [changeBtn, setChangeBtn] = useState(false);
    const [borderRadius, setBorderRadius] = useState(false);
    const [open, setOpenInput] = useState(false);
    const { value } = useSelector((state) => state.action);
    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setKeywords([]);
            setShowResult(true);
            setShowBtn(false);
            setBorderRadius(true);
            return;
        }
        const fetchApi = async () => {
            const data = await searchApi.getSearch(debouncedValue);
            setKeywords(data.items);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await searchApi.newRelease();
            setSearchSuggest(data.items || []);
        };
        fetchApi();
    }, []);

    const handleValueChange = (e) => {
        setBorderRadius(true);
        setChangeBtn(true);
        if (!e.target.value.startsWith(' ')) {
            dispatch(setValueSearch(e.target.value));
        }
        setOpenInput(true);
        setShowBtn(true);
        setShowResult(false);
    };

    const hideBtnClose = () => {
        setBorderRadius(false);
        setShowBtn(false);
        dispatch(setValueSearch(''));
        setOpenInput(false);
        setKeywords([]);
        valueRef.current.focus();
    };

    const focusInput = () => {
        setOpenInput(true);
        setBorderRadius(true);
    };

    const handleSubmit = () => {
        if (valueRef.current.value) {
            setOpenInput(false);
            navigate(`/tim-kiem/tat-ca/${valueRef.current.value}`);
        }
    };
    const closeSearch = (e) => {
        setOpenInput(false);
        setBorderRadius(false);
        setShowResult(false);
    };
    // ẩn khung kết quả
    useEffect(() => {
        const close = (e) => {
            if (
                !e.target.closest('.Search_icon-search__TdugZ') &&
                !e.target.closest('.Search_menu-search__mVQK0') &&
                !e.target.closest('input')
            ) {
                if (e.target.closest('.Search_close__S-Oy5')) {
                    hideBtnClose();
                } else {
                    closeSearch();
                }
            }
        };
        document.body.addEventListener('click', close);
        return () => {
            document.body.removeEventListener('click', close);
        };
    }, []);

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if (valueRef.current.value !== '') {
                navigate(`/tim-kiem/tat-ca/${valueRef.current.value}`);
                setOpenInput(false);
                dispatch(setValueSearch(valueRef.current.value));
            }
        }
    };

    return (
        <div className={cx('search', ((borderRadius && open) || (borderRadius && open)) && 'bgrHeader')}>
            <div className={cx('icon-search')} onClick={handleSubmit}>
                <i className="icon ic-search"></i>
            </div>
            <input
                ref={valueRef}
                value={value}
                onChange={(e) => handleValueChange(e)}
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                onFocus={focusInput}
                onKeyDown={(e) => handleEnter(e)}
            />
            <div className={cx('icon-action')}>
                {showBtn && (
                    <>
                        {changeBtn ? (
                            <span className={cx('close')}>{<Icon.IconLoad />} </span>
                        ) : (
                            <span className={cx('close')}>{<Icon.IconClose />}</span>
                        )}
                    </>
                )}
            </div>
            {open &&
                (showResult ? (
                    <>
                        <div className={cx('menu-search')}>
                            <div className={cx('show')}>
                                {/* -----------Đề Xuất Cho Bạn ----------- */}
                                <SuggestMenu data={searchSuggest} onSubmit={handleSubmit} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={cx('menu-search')}>
                        <div className={cx('show')}>
                            {/* ------------ từ khóa liên quan ----------- */}
                            <div className={cx('Keywords')}>
                                <div className={cx('Keywords-header')}>
                                    <h1>Từ Khóa Liên Quan</h1>
                                    {keywords[0]?.keywords?.length > 0 && (
                                        <KeywordsMenu data={keywords[0]?.keywords} onSubmit={handleSubmit} />
                                    )}
                                    <span className={cx('item')} onClick={handleSubmit}>
                                        <span>
                                            <i className="icon ic-search"></i>
                                        </span>
                                        <span className={cx('title')}>{`Tìm Kiếm ${value}`}</span>
                                    </span>
                                </div>
                            </div>
                            {/* ------------ ----------------- */}
                            {keywords[1]?.suggestions?.length > 0 && (
                                <RecentlyMenu data={keywords[1]?.suggestions} onClick={closeSearch} />
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Search;
