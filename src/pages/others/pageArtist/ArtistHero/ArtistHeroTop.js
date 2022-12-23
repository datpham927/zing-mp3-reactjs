/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as searchApi from '~/components/Api/Service';
import Button from '~/components/Button';
import ButtonAction from '~/components/Button/ButtonAction';
import Follow from '~/components/follow/Follow';
import { zingArtist } from '~/redux/dataArtist';
import style from './ArtistHero.module.scss';

const cx = classNames.bind(style);

function ArtistHeroTop() {
    const id = useParams();
    const dispatch = useDispatch();
    const [care, setCare] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await searchApi.artist(id.name);
            dispatch(zingArtist.actions.setDataArtist(data));
        };
        fetchApi();
    }, [id.name]);
    const data = useSelector((state) => state.dataArtist.dataArtist);
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
                    <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
                </div>
                <div className={cx('action')}>
                    <div className={cx('follow')}>
                        <Follow follow={data?.follow} /> người quan tâm
                    </div>
                    <ButtonAction onClick={() => setCare(!care)} className={cx('btn', !care && 'care')}>
                        {care ? (
                            <>
                                <i className="icon ic-addfriend"></i>
                                <span>QUAN TÂM</span>
                            </>
                        ) : (
                            <>
                                <i className="icon ic-check"></i>
                                <span>ĐÃ QUAN TÂM</span>
                            </>
                        )}
                    </ButtonAction>
                </div>
            </div>
        </div>
    );
}

export default memo(ArtistHeroTop);
