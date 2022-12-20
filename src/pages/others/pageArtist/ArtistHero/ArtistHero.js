/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';
import Container from '~/components/container/Container';
import styles from './ArtistHero.module.scss';
import ItemSong from '~/components/ItemSong/ItemSong';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import { useSelector } from 'react-redux';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
import NoContent from '~/components/noContent/NoConTent';
import { useEffect, useState } from 'react';
import ArtistHeroTop from './ArtistHeroTop';

const cx = classNames.bind(styles);

function ArtistHero() {
    const data = useSelector((state) => state.dataArtist.dataArtist);

    const [songs, setSongs] = useState([]);
    const [singleEP, setSingleEP] = useState([]);
    const [mvs, setMv] = useState([]);
    const [appear, setAppear] = useState([]);
    const [canLike, setCanLike] = useState([]);

    useEffect(() => {
        data?.sections?.forEach((i) => {
            if (i.title === 'Bài hát nổi bật') {
                setSongs(i);
            } else if (i.title === 'Single & EP') {
                setSingleEP(i);
            } else if (i.title === 'MV') {
                setMv(i.item);
            } else if (i.title === 'Xuất hiện trong') {
                setAppear(i);
            } else if (i.title === 'Bạn Có Thể Thích') {
                setCanLike(i);
            }
        });
    });

    return (
        <div className={cx('wrapper')}>
            <ArtistHeroTop />
            {data?.sections ? (
                <>
                    <div lassName={cx('song')}>
                        <Container title={songs?.title}>
                            {songs?.items?.map((item, index) => index < 6 && <ItemSong key={index} data={item} />)}
                        </Container>
                    </div>
                    <div className={cx('wrapper')}>
                        <Container title={singleEP?.title}>
                            {singleEP?.items?.map(
                                (item, index) => index < 4 && <ItemPlayList key={index} data={item} />,
                            )}
                        </Container>
                    </div>
                    <div className={cx('mv')}>
                        <Container title={mvs?.title}>
                            {mvs?.items?.map((item, index) => index < 3 && <ItemVideo key={index} data={item} />)}
                        </Container>
                    </div>
                    <div className={cx('wrapper')}>
                        <Container title={appear?.title}>
                            {appear?.items?.map((item, index) => index < 4 && <ItemPlayList key={index} data={item} />)}
                        </Container>
                    </div>
                    <div className={cx('wrapper')}>
                        <Container title={canLike?.title}>
                            {canLike?.items?.map((item, index) => index < 4 && <ItemArtists key={index} data={item} />)}
                        </Container>
                    </div>
                </>
            ) : (
                <NoContent />
            )}
        </div>
    );
}

export default ArtistHero;
