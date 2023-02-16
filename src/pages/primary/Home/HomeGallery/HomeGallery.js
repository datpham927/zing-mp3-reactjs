/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import style from './HomeGallery.module.scss';
const cx = className.bind(style);

function HomeGallery({ data }) {
    const [heightImg, setHeightImg] = useState(0);
    const itemRef = useRef();

    useEffect(() => {
        const listImg = document.querySelectorAll(`.${cx('item-image')}`);
        let interval;
        const autoChange = () => {
            let numberIndex = 0;
            const change = () => {
                listImg.forEach((item, i) => {
                    if (i === numberIndex) {
                        item.classList.replace(`${cx('second')}`, `${cx('first')}`);
                    } else if (i === numberIndex + 1) {
                        item.classList.replace(`${cx('third')}`, `${cx('second')}`);
                    } else if (i === numberIndex + 2) {
                        item.classList.replace(`${cx('four')}`, `${cx('third')}`);
                    } else {
                        item.classList.replace(`${cx('first')}`, `${cx('four')}`);
                    }
                    if (numberIndex === listImg?.length - 2) {
                        listImg[0].classList.replace(`${cx('four')}`, `${cx('third')}`);
                    }
                    if (numberIndex === listImg?.length - 1) {
                        listImg[0].classList.replace(`${cx('third')}`, `${cx('second')}`);
                        listImg[1].classList.replace(`${cx('four')}`, `${cx('third')}`);
                    }
                });
                numberIndex++;
                if (numberIndex > listImg?.length - 1) {
                    numberIndex = 0;
                }
            };
            interval = setInterval(() => change(), 2000);
        };

        listImg?.length > 0 && autoChange();

        return () => interval && clearInterval(interval);
    }, []);

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
