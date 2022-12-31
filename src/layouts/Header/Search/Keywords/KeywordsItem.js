import classNames from 'classnames/bind';
import styles from './KeywordsMenu.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValueSearch } from '~/redux/action';
const cx = classNames.bind(styles);

function SuggestItem({ data, onSubmit }) {
    const dispatch = useDispatch();
    const handleCLick = () => {
        dispatch(setValueSearch(data));
        onSubmit();
    };
    return (
        <Link to={`/tim-kiem/tat-ca/${data}`} className={cx('item')} onClick={handleCLick}>
            <span>
                <i className="icon ic-search"></i>
            </span>
            <span className={cx('title')}>{data}</span>
        </Link>
    );
}

export default SuggestItem;
