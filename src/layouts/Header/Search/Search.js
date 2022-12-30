import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import RecentlyMenu from './Recently/RecentlyMenu';
import KeywordsMenu from './Keywords/KeywordsMenu';
import useDebounce from '~/components/hooks/useDebounce';
import SuggestMenu from './Suggest/SuggestMenu';

import * as searchApi from '~/components/Api/Service';
import KeywordsItem from './Keywords/KeywordsItem';
import { Icon } from '~/components/Icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { zingAction } from '~/redux/action';
const cx = classNames.bind(style);

function Search() {
    const valueRef = useRef();
    const dispatch = useDispatch();

    //điều hướng đường dẫn
    const navigate = useNavigate();

    const [searchResult, setSearchResult] = useState([]);
    const [searchSuggest, setSearchSuggest] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [changeBtn, setChangeBtn] = useState(false);
    const [borderRadius, setBorderRadius] = useState(false);
    const [value, setValue] = useState('');
    const [open, setOpenInput] = useState(false);

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
            setChangeBtn(false);
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
            setValue(e.target.value);
        }
        setOpenInput(true);
        setShowBtn(true);
        setShowResult(false);
    };
    const hideBtnClose = () => {
        setBorderRadius(false);
        setShowBtn(false);
        setValue('');
        setOpenInput(false);
        setSearchResult([]);
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
        dispatch(zingAction.actions.setValueSearch(value));
    };

    // ẩn khung kết quả
    useEffect(() => {
        window.onclick = (e) => {
            if (
                !e.target.closest('.Search_icon-search__TdugZ') &&
                !e.target.closest('.Search_menu-search__mVQK0') &&
                !e.target.closest('input')
            ) {
                if (e.target.closest('.Search_close__S-Oy5')) {
                    hideBtnClose();
                } else {
                    setOpenInput(false);
                    setBorderRadius(false);
                    setShowResult(false);
                }
            }
        };
    }, []);
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if (valueRef.current.value !== '') {
                navigate(`/tim-kiem/tat-ca/${valueRef.current.value}`);
                setOpenInput(false);
                dispatch(zingAction.actions.setValueSearch(value));
            }
        }
    };
    return (
        <div className={cx('search', ((borderRadius && open) || (borderRadius && open)) && 'bgrHeader')}>
            <div className={cx('icon-search')} onClick={(e) => handleSubmit(e)}>
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
                                <SuggestMenu data={searchSuggest} setValue={setValue} onSubmit={handleSubmit} />
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
                                    {searchResult?.length > 0 && (
                                        <KeywordsMenu data={searchResult} onSubmit={handleSubmit} />
                                    )}
                                    <KeywordsItem data={`Tim kiếm "${value}"`} onSubmit={handleSubmit} />
                                </div>
                            </div>
                            {/* ------------ ----------------- */}
                            {searchResult?.length > 0 && <RecentlyMenu data={searchResult} />}
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Search;
