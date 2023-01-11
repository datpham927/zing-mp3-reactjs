/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';
import Container from '~/components/container/Container';
import ContainerSongs from '~/components/container/ContainerSongs';
import styles from './ArtistOverview.module.scss';

const cx = classNames.bind(styles);

function SongSpotlight({ data }) {
    const listImg = document.querySelectorAll('.ArtistOverview_image__CEGmU');
    const autoChangeImg = () => {
        let indexImg = 1;
        const changeImg = () => {
            listImg.forEach((item, index) => {
                if (index === indexImg) {
                    item.classList.replace('ArtistOverview_img-second__YofGW', 'ArtistOverview_img-first__n2HiD');
                } else if (index === indexImg + 1) {
                    item.classList.replace('ArtistOverview_img-third__li-P4', 'ArtistOverview_img-second__YofGW');
                } else if (index === indexImg + 2) {
                    item.classList.replace('ArtistOverview_img-four__It2OF', 'ArtistOverview_img-third__li-P4');
                } else {
                    item.classList.replace('ArtistOverview_img-first__n2HiD', 'ArtistOverview_img-four__It2OF');
                }
                if (indexImg === listImg?.length - 1) {
                    listImg[0].classList.replace('ArtistOverview_img-third__li-P4', 'ArtistOverview_img-second__YofGW');
                    listImg[1].classList.replace('ArtistOverview_img-four__It2OF', 'ArtistOverview_img-third__li-P4');
                }
                if (indexImg === listImg?.length - 2) {
                    listImg[0].classList.replace('ArtistOverview_img-four__It2OF', 'ArtistOverview_img-third__li-P4');
                }
            });
            indexImg++;
            if (indexImg > listImg?.length - 1) {
                indexImg = 0;
            }
        };
        setInterval(() => changeImg(), 4000);
    };
    listImg?.length > 0 && autoChangeImg();
    return (
        <div lassName={cx('song')}>
            <Container title={data?.title}>
                <div className={cx('left') + ' l-4'}>
                    {data?.items?.map((item, index) => (
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
                        <ContainerSongs type="song-12" data={data?.items} index={data?.items?.length} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SongSpotlight;
