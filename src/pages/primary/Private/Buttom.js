import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonAction from '~/components/Button/ButtonAction';
import Container from '~/components/container/Container';
import ContainerSongs from '~/components/container/ContainerSongs';
import ContainerVideos from '~/components/container/ContainerVideos';
import Empty from './Empty';
import style from './Private.module.scss';

const cx = classNames.bind(style);

function Bottom() {
    const [covertTap, setCovetTap] = useState(false);
    const { songFavorite, mvFavorite } = useSelector((state) => state.Favorite);
    return (
        <div className={cx('bottom')}>
            <div className={cx('select-menu')}>
                <ButtonAction onClick={() => setCovetTap(false)} className={cx('btn', !covertTap && 'active')} btnItem>
                    BÀI HÁT
                </ButtonAction>
                <ButtonAction onClick={() => setCovetTap(true)} className={cx('btn', covertTap && 'active')} btnItem>
                    MV
                </ButtonAction>
            </div>
            {covertTap ? (
                mvFavorite.length > 0 ? (
                    <ContainerVideos data={mvFavorite} />
                ) : (
                    <Empty
                        title="Chưa có MV nào trong thư viện cá nhân"
                        link="/the-loai-video/Viet-Nam/IWZ9Z08I.html"
                    />
                )
            ) : songFavorite.length > 0 ? (
                <>
                    <div className={cx('header')}>
                        <div className={cx('song')}>BÀI HÁT</div>
                        <span>ALBUM</span>
                        <span>THỜI GIAN</span>
                    </div>
                    <Container className={cx('body')}>
                        <ContainerSongs data={songFavorite} type="add" />
                    </Container>
                </>
            ) : (
                <Empty title="Chưa có bài hát yêu thích trong thư viện cá nhân" link="/moi-phat-hanh" />
            )}
        </div>
    );
}

export default Bottom;
