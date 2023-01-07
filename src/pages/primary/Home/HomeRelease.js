/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ButtonAction from '~/components/Button/ButtonAction';
import Container from '~/components/container/Container';
import ContainerAlbum from '~/components/container/ContainerAlbum';
import style from './Home.module.scss';
const cx = className.bind(style);

function HomeRelease({ data }) {
    const [all, setAll] = useState(true);
    const [vPop, setVpop] = useState(false);
    const [others, setOthers] = useState(false);
    const handleChangeTab = (type) => {
        if (type === 'all') {
            setAll(true);
            setVpop(false);
            setOthers(false);
        } else if (type === 'vPop') {
            setAll(false);
            setVpop(true);
            setOthers(false);
        } else if (type === 'others') {
            setAll(false);
            setVpop(false);
            setOthers(true);
        }
    };
    const navigate = useNavigate();
    const handleNewSongs = () => {
        if (all) navigate('/new-release/song/all');
        else if (vPop) navigate('/new-release/song/vpop');
        else if (others) navigate('/new-release/song/usuk');
    };
    return (
        <Container title={data?.title}>
            <div className={cx('header')}>
                <div className={cx('left')}>
                    <ButtonAction action={all} btnItem onClick={() => handleChangeTab('all')}>
                        TẤT CẢ
                    </ButtonAction>
                    <ButtonAction action={vPop} btnItem onClick={() => handleChangeTab('vPop')}>
                        VIỆT NAM
                    </ButtonAction>
                    <ButtonAction action={others} btnItem onClick={() => handleChangeTab('others')}>
                        QUỐC TẾ
                    </ButtonAction>
                </div>
                <div className={cx('right')} onClick={handleNewSongs}>
                    <Link>
                        TẤT CẢ <i className="icon ic-go-right"></i>
                    </Link>
                </div>
            </div>
            <div className={cx('body')}>
                {all && <ContainerAlbum data={data?.items?.all} />}
                {vPop && <ContainerAlbum data={data?.items?.vPop} />}
                {others && <ContainerAlbum data={data?.items?.others} />}
            </div>
        </Container>
    );
}

export default HomeRelease;
