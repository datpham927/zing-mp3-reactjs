import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonAction from '~/components/Button/ButtonAction';
import Follow from '~/components/number/follow/Follow';
import LoadImg from '~/components/load/loadImg/LoadImg';

import styles from './ItemArtists.module.scss';

const cx = classNames.bind(styles);

function ItemArtists({ data, col = 'l-3 m-3 c-6' }) {
    const [care, setCare] = useState(false);
    return (
        <li className={cx('item') + ` ${col} col `}>
            <div className={cx('wrapper')}>
                <LoadImg radius>
                    <Link to={data.link}>
                        <div className={cx('image')}>
                            <img src={data.thumbnail} alt="" />
                            <div className={cx('play')}>
                                <i className="icon action-play ic-24-Shuffle"></i>
                            </div>
                        </div>
                    </Link>
                </LoadImg>

                <div className={cx('info')}>
                    <div className={cx('content')}>
                        <div className={cx('singer')}>
                            <Link to={data.link}>{data.name}</Link>
                        </div>
                        <span className={cx('follow')}>
                            <Follow follow={data.totalFollow} /> quan tâm
                        </span>
                    </div>
                    <ButtonAction className={cx('btn', !care && 'care')} onClick={() => setCare(!care)}>
                        {care ? (
                            <>
                                <i className="icon ic-check"></i>
                                <span>Đã quan tâm</span>
                            </>
                        ) : (
                            <>
                                <i className="icon ic-addfriend"></i>
                                <span>Quan tâm</span>
                            </>
                        )}
                    </ButtonAction>
                </div>
            </div>
        </li>
    );
}

export default ItemArtists;
