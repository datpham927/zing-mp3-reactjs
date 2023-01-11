/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Home.module.scss';
const cx = className.bind(style);

function HomeGallery({ data }) {
    const [heightImg, setHeightImg] = useState(0);
    const itemRef = useRef();
    const listImg = document.querySelectorAll('.Home_item__BetTT');
    const autoChange = () => {
        let numberIndex = 0;
        const change = () => {
            listImg.forEach((item, i) => {
                if (i === numberIndex) {
                    item.classList.replace('Home_second__RvisO', 'Home_first__6BikT');
                } else if (i === numberIndex + 1) {
                    item.classList.replace('Home_third__zpBHp', 'Home_second__RvisO');
                } else if (i === numberIndex + 2) {
                    item.classList.replace('Home_four__iAiTT', 'Home_third__zpBHp');
                } else {
                    item.classList.replace('Home_first__6BikT', 'Home_four__iAiTT');
                }
                if (numberIndex === listImg?.length - 2) {
                    listImg[0].classList.replace('Home_four__iAiTT', 'Home_third__zpBHp');
                }
                if (numberIndex === listImg?.length - 1) {
                    listImg[0].classList.replace('Home_third__zpBHp', 'Home_second__RvisO');
                    listImg[1].classList.replace('Home_four__iAiTT', 'Home_third__zpBHp');
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
                        key={item.encodeId}
                        ref={itemRef}
                        className={cx(
                            'item',
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
