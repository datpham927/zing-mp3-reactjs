import classNames from 'classnames/bind';
import styles from './background.module.scss';
import background from '~/assets/background/backroundThemes/backroundThemes';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Background() {
    const index = useSelector((state) => state.counter.bgrIndex);
    const preview = useSelector((state) => state.counter.booleanPreviewBgr);
    const previewIndex = useSelector((state) => state.counter.previewBgrIndex);

    return (
        <div
            className={cx('background')}
            style={
                preview
                    ? { backgroundImage: `url(${background[previewIndex].path})` }
                    : { backgroundImage: `url(${background[index].path})` }
            }
        ></div>
    );
}

export default Background;
