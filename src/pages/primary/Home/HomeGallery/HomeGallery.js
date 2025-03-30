import classNames from 'classnames/bind'; // Import classNames để tạo class động
import { useEffect, useRef, useState } from 'react'; // Import các hook từ React
import { Link } from 'react-router-dom'; // Import Link để điều hướng giữa các trang
import style from './HomeGallery.module.scss'; // Import file style

const cx = classNames.bind(style); // Tạo function `cx` để bind class với CSS module

function HomeGallery({ data }) {
    const [heightImg, setHeightImg] = useState(0); // State lưu chiều cao của hình ảnh
    const [numberIndex, setNumberIndex] = useState(0); // State lưu vị trí hình ảnh hiện tại
    const itemRefs = useRef([]); // useRef để lưu danh sách tham chiếu đến các hình ảnh

    useEffect(() => {
        if (!data?.items?.length) return; // Nếu không có dữ liệu thì không chạy hiệu ứng
        // Thiết lập interval để tự động thay đổi ảnh sau mỗi 2 giây
        const interval = setInterval(() => {
            setNumberIndex((prevIndex) => (prevIndex + 1) % data.items.length);
        }, 2000);
        return () => clearInterval(interval); // Cleanup interval khi component unmount
    }, [data]); // Chạy lại khi `data` thay đổi
    useEffect(() => {
        // Sau khi dữ liệu được render, lấy chiều cao của ảnh đầu tiên
        if (itemRefs.current[0]) {
            setHeightImg(itemRefs.current[0].offsetHeight);
        }
    }, [data]); // Chạy lại khi `data` thay đổi

    return (
        <div className={cx('gallery')} style={{ height: heightImg }}>
            {/* Đặt chiều cao theo hình ảnh đầu tiên để tránh layout nhảy */}
            <div className={cx('gallery-wrapper')}>
                {data.items.map((item, index) => {
                    const classOrder = ['first', 'second', 'third', 'four']; // Danh sách class định sẵn cho vị trí ảnh
                    const position = (index - numberIndex + data.items.length) % data.items.length;
                    // Xác định vị trí của ảnh hiện tại dựa trên `numberIndex`
                    return (
                        <div
                            key={item.id || index} // Key giúp React nhận diện phần tử duy nhất
                            ref={(el) => (itemRefs.current[index] = el)} // Gán ref vào phần tử để truy xuất DOM
                            className={`${cx('item-image', classOrder[position])} l-4 m-6 c-12`}
                            // Thêm class động dựa vào vị trí hiện tại của ảnh
                        >
                            <Link to={item.link}>
                                <img src={item.banner} alt="" />
                                {/* Hiển thị ảnh, có thể thêm alt mô tả */}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomeGallery;
