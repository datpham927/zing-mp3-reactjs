import classNames from 'classnames/bind';
import styles from './KeywordsItem.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function SuggestItem({ data, onSubmit }) {
    return (
        <Link to={`/tim-kiem/tat-ca/${data}`} className={cx('item')} onClick={onSubmit}>
            <span>
                <i className="icon ic-search"></i>
            </span>
            <span className={cx('title')}>{data}</span>
        </Link>
    );
}

export default SuggestItem;
