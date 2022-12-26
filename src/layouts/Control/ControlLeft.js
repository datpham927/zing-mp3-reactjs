import className from 'classnames/bind';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import style from './Control.module.scss';
const cx = className.bind(style);

function ControlLeft({ data }) {
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
    };
    return (
        <div className={cx('left') + ' l-3'}>
            <div className={cx('image', 'action')}>
                <img src={data[0]?.thumbnail} alt="" />
            </div>
            <div className={cx('info')}>
                <h3>{data[0]?.title}</h3>
                <p>
                    {data[0]?.artists?.map((i, index) => (
                        <div key={index}>
                            <Link to={i.link}>{i.name}</Link>
                            {index < data[0]?.artists.length - 1 && ', '}
                        </div>
                    ))}
                </p>
            </div>
            <Button
                onClick={() => handleLike()}
                small
                content={like ? 'Đã thêm' : 'Thêm vào Thư viện'}
                iconLeft={like ? <i className="icon ic-like-full"></i> : <i className="icon ic-like"></i>}
            />
        </div>
    );
}

export default memo(ControlLeft);
