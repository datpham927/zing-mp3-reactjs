/* eslint-disable no-implied-eval */
import classNames from 'classnames/bind';
import Container from '~/components/container/container';
import styles from './Overview.module.scss';
import ItemSong from '~/components/ItemSong/ItemSong';
import ItemAlbum from '~/components/ItemAlbum/ItemAlbum';
import ItemVideo from '~/components/ItemVideo/ItemVideo';
import { useSelector } from 'react-redux';
import ItemArtists from '~/components/ItemArtists/ItemArtists';
const cx = classNames.bind(styles);
function Overview() {
    const data = useSelector((state) => state.data.dataArtist);
    const listImg = document.querySelectorAll('.Overview_image__x92oQ');
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
            {data.sections &&
                data?.sections.map((i) =>
                    i.title === 'Bài hát nổi bật' ? (
                        <div lassName={cx('song')}>
                            <Container title={i.title}>
                                <div className={cx('left') + ' l-4'}>
                                    {i.items?.map((item, index) => (
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
                                            src={item.thumbnailM}
                                            alt=""
                                        />
                                    ))}
                                </div>
                                <div className={cx('right') + ' l-8'}>
                                    <div className={cx('list')}>
                                        {i.items?.map((item) => (
                                            <ItemSong data={item} type="song-12" />
                                        ))}
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ) : i.title === 'Single & EP' ? (
                        <div className={cx('wrapper')}>
                            <Container title={i.title}>
                                {i.items?.map((item, index) => index < 4 && <ItemAlbum data={item} />)}
                            </Container>
                        </div>
                    ) : i.title === 'MV' ? (
                        <div className={cx('mv')}>
                            <Container title={i.title}>
                                {i.items?.map((item, index) => index < 3 && <ItemVideo key={index} data={item} />)}
                            </Container>
                        </div>
                    ) : i.title === 'Xuất hiện trong' ? (
                        <div className={cx('wrapper')}>
                            <Container title={i.title}>
                                {i.items?.map((item, index) => index < 4 && <ItemAlbum key={index} data={item} />)}
                            </Container>
                        </div>
                    ) : i.title === 'Bạn Có Thể Thích' ? (
                        <div className={cx('wrapper')}>
                            <Container title={i.title}>
                                {i.items?.map((item, index) => index < 4 && <ItemArtists key={index} data={item} />)}
                            </Container>
                        </div>
                    ) : (
                        ''
                    ),
                )}
        </div>
    );
}

export default Overview;
