/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';

import Container from '~/components/container/Container';
import styles from './Overview.module.scss';
import ItemSong from '~/components/ItemSong/ItemSong';
import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import { useSelector } from 'react-redux';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
import NoContent from '~/components/noContent/NoConTent';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function Overview() {
    const data = useSelector((state) => state.dataArtist.dataArtist);
    const [songs, setSongs] = useState([]);
    const [singleEP, setSingleEP] = useState([]);
    const [mvs, setMv] = useState([]);
    const [appear, setAppear] = useState([]);
    const [canLike, setCanLike] = useState([]);
    const listImg = document.querySelectorAll('.Overview_image__x92oQ');

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
    const autoChangeImg = () => {
        let indexImgs = 1;
        const changeImg = () => {
            listImg.forEach((item, index) => {
                if (index === indexImgs) {
                    item.classList.replace('Overview_img-second__CTm4x', 'Overview_img-first__oC9Wb');
                } else if (index === indexImgs + 1) {
                    item.classList.replace('Overview_img-third__sDvxS', 'Overview_img-second__CTm4x');
                } else if (index === indexImgs + 2) {
                    item.classList.replace('Overview_img-four__DCou+', 'Overview_img-third__sDvxS');
                } else {
                    item.classList.replace('Overview_img-first__oC9Wb', 'Overview_img-four__DCou+');
                }
                if (indexImgs === listImg.length - 1) {
                    listImg[0].classList.replace('Overview_img-third__sDvxS', 'Overview_img-second__CTm4x');
                    listImg[1].classList.replace('Overview_img-four__DCou+', 'Overview_img-third__sDvxS');
                }
                if (indexImgs === listImg.length - 2) {
                    listImg[0].classList.replace('Overview_img-four__DCou+', 'Overview_img-third__sDvxS');
                }
            });
            indexImgs++;
            if (indexImgs > listImg.length - 1) {
                indexImgs = 0;
            }
        };
        setInterval(() => changeImg(), 3000);
    };
    listImg.length > 0 && autoChangeImg();

    return (
        <div className={cx('wrapper')}>
            {data?.sections ? (
                <>
                    <div lassName={cx('song')}>
                        <Container title={songs?.title}>
                            <div className={cx('left') + ' l-4'}>
                                {songs?.items?.map((item, index) => (
                                    <img
                                        className={cx(
                                            'image',
                                            index === 0
                                                ? 'img-first'
                                                : index === 1
                                                ? 'img-second'
                                                : index === 2
                                                ? 'img-third'
                                                : 'img-four',
                                        )}
                                        src={item?.thumbnailM}
                                        alt=""
                                    />
                                ))}
                            </div>
                            <div className={cx('right') + ' l-8'}>
                                <div className={cx('list')}>
                                    {songs?.items?.map((item, index) => (
                                        <ItemSong key={index} data={item} type="song-12" />
                                    ))}
                                </div>
                            </div>
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

export default Overview;
