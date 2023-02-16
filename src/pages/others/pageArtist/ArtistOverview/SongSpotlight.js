/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import Container from '~/components/container/Container';
import ContainerSongs from '~/components/container/ContainerSongs';
import styles from './ArtistOverview.module.scss';

const cx = classNames.bind(styles);

function SongSpotlight({ data }) {
    useEffect(() => {
        const listImg = document.querySelectorAll(`.image-selector`);
        let interval;
        const autoChangeImg = () => {
            let indexImg = 1;
            const changeImg = () => {
                listImg.forEach((item, index) => {
                    if (index === indexImg) {
                        item.classList.replace(`${cx('img-second')}`, `${cx('img-first')}`);
                    } else if (index === indexImg + 1) {
                        item.classList.replace(`${cx('img-third')}`, `${cx('img-second')}`);
                    } else if (index === indexImg + 2) {
                        item.classList.replace(`${cx('img-four')}`, `${cx('img-third')}`);
                    } else {
                        item.classList.replace(`${cx('img-first')}`, `${cx('img-four')}`);
                    }
                    if (indexImg === listImg?.length - 1) {
                        listImg[0].classList.replace(`${cx('img-third')}`, `${cx('img-second')}`);
                        listImg[1].classList.replace(`${cx('img-four')}`, `${cx('img-third')}`);
                    }
                    if (indexImg === listImg?.length - 2) {
                        listImg[0].classList.replace(`${cx('img-four')}`, `${cx('img-third')}`);
                    }
                });
                indexImg++;
                if (indexImg > listImg?.length - 1) {
                    indexImg = 0;
                }
            };
            interval = setInterval(() => changeImg(), 4000);
        };
        listImg?.length > 0 && autoChangeImg();

        return () => interval && clearInterval(interval);
    }, []);

    return (
        <div lassName={cx('song')}>
            <Container title={data?.title}>
                <div className={cx('left') + ' l-4'}>
                    {data?.items?.map((item, index) => (
                        <img
                            className={
                                cx(
                                    'image',
                                    index === 0
                                        ? 'img-first'
                                        : index === 1
                                        ? 'img-second'
                                        : index === 2
                                        ? 'img-third'
                                        : 'img-four',
                                ) + ' image-selector'
                            }
                            src={item?.thumbnailM}
                            alt=""
                        />
                    ))}
                </div>
                <div className={cx('right') + ' l-8'}>
                    <div className={cx('list')}>
                        <ContainerSongs type="song-12" data={data?.items} index={data?.items?.length} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SongSpotlight;
