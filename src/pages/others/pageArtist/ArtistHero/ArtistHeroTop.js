/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as searchApi from '~/components/Api/Service';
import Button from '~/components/Button';
import ButtonAction from '~/components/Button/ButtonAction';
import Follow from '~/components/follow/Follow';
import { setActivePlay, setCurrentIndex, setPlayListAudio } from '~/redux/dataAudio';
import style from './ArtistHero.module.scss';

const cx = classNames.bind(style);

function ArtistHeroTop() {
    const id = useParams();
    const dispatch = useDispatch();
    const [care, setCare] = useState(false);
    const [plays, setPlay] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await searchApi.artist(id.name);
            setData(data);
        };
        fetchApi();
    }, [id.name]);
    const play = useSelector((state) => state.dataControl.activePlay);
    const handleOnClick = () => {
        setPlay(!plays);
        if (plays) {
            dispatch(setActivePlay(false));
        } else {
            dispatch(setCurrentIndex(0));
            dispatch(setPlayListAudio(data.sections.find((e) => e.sectionType === 'song').items));
            dispatch(setActivePlay(true));
        }
    };
    return (
        <div
            className={cx('header')}
            style={{
                backgroundImage: `url(${data?.cover})`,
            }}
        >
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h1>{data?.name}</h1>
                    <Button
                        noContent
                        iconLeft={play && plays ? <i class="fa-solid fa-pause"></i> : <i className="icon ic-play"></i>}
                        className={cx('btn')}
                        onClick={handleOnClick}
                    />
                </div>
                <div className={cx('action')}>
                    <div className={cx('follow')}>
                        <Follow follow={data?.follow} /> người quan tâm
                    </div>
                    <ButtonAction onClick={() => setCare(!care)} className={cx('btn', !care && 'care')}>
                        {care ? (
                            <>
                                <i className="icon ic-check"></i>
                                <span>ĐÃ QUAN TÂM</span>
                            </>
                        ) : (
                            <>
                                <i className="icon ic-addfriend"></i>
                                <span>QUAN TÂM</span>
                            </>
                        )}
                    </ButtonAction>
                </div>
            </div>
        </div>
    );
}

export default memo(ArtistHeroTop);
