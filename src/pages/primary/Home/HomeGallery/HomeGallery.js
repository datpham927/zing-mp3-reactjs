/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import style from './HomeGallery.module.scss';
const cx = className.bind(style);

function HomeGallery({ data }) {
    const [heightImg, setHeightImg] = useState(0);
    const itemRef = useRef();
    const listImg = document.querySelectorAll('.HomeGallery_item-image__2Df6B');
    const autoChange = () => {
        let numberIndex = 0;
        const change = () => {
            listImg.forEach((item, i) => {
                if (i === numberIndex) {
                    item.classList.replace('HomeGallery_second__b5Uio', 'HomeGallery_first__Nlpab');
                } else if (i === numberIndex + 1) {
                    item.classList.replace('HomeGallery_third__7WCGB', 'HomeGallery_second__b5Uio');
                } else if (i === numberIndex + 2) {
                    item.classList.replace('HomeGallery_four__ZDitJ', 'HomeGallery_third__7WCGB');
                } else {
                    item.classList.replace('HomeGallery_first__Nlpab', 'HomeGallery_four__ZDitJ');
                }
                if (numberIndex === listImg?.length - 2) {
                    listImg[0].classList.replace('HomeGallery_four__ZDitJ', 'HomeGallery_third__7WCGB');
                }
                if (numberIndex === listImg?.length - 1) {
                    listImg[0].classList.replace('HomeGallery_third__7WCGB', 'HomeGallery_second__b5Uio');
                    listImg[1].classList.replace('HomeGallery_four__ZDitJ', 'HomeGallery_third__7WCGB');
                }
            });
            numberIndex++;
            if (numberIndex > listImg?.length - 1) {
                numberIndex = 0;
            }
        };
        setInterval(() => change(), 3000);
    };

    listImg?.length > 0 && autoChange();

    return (
        <div className={cx('gallery')} style={{ height: heightImg }}>
            <div className={cx('gallery-wrapper')}>
                {data?.items?.map((item, index) => (
                    <div
                        key={uuidv4()}
                        ref={itemRef}
                        className={cx(
                            'item-image',
                            index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : 'four',
                            ' l-4 m-6 c-12',
                        )}
                        onLoad={() => setHeightImg(itemRef.current.offsetHeight)}
                    >
                        <Link to={item.link}>
                            <img src={item.banner} alt="" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeGallery;
