import classNames from 'classnames/bind';
import styles from './background.module.scss';
import background from '~/assets/background/backroundThemes/backroundThemes';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Background() {
    const index = useSelector((state) => state.action.bgrIndex);
    const preview = useSelector((state) => state.action.booleanPreviewBgr);
    const previewIndex = useSelector((state) => state.action.previewBgrIndex);

    return (
        <>
            <div
                className={cx('background') + ' c-0'}
                style={
                    preview
                        ? { backgroundImage: `url(${background[previewIndex].path})` }
                        : { backgroundImage: `url(${background[index].path})` }
                }
            ></div>
            <div className={cx('background') + ' l-0 m-0'}></div>
        </>
    );
}

export default Background;
