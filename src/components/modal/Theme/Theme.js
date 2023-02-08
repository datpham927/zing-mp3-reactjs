import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { zingAction } from '~/redux/action';
import style from './Theme.module.scss';
import ThemeContainer from './ThemeContainer/ThemeContainer';
const cx = classNames.bind(style);

const themesModal = {
    Dynamic: {
        names: 'Dynamic',
        data: [
            {
                id: 0,
                title: 'Zing Music Awards',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme1/theme1.jpg',
            },
            {
                id: 1,
                title: 'Tháp Eiffel',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme1/theme2.jpg',
            },
        ],
    },
    topic: {
        names: 'Chủ đề',
        data: [
            {
                id: 2,
                title: 'Rosé',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme2/theme1.jpg',
            },
            {
                id: 3,
                title: 'IU',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme2/theme2.jpg',
            },
            {
                id: 4,
                title: 'Ji Chang Wook',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme2/theme3.jpg',
            },
        ],
    },
    artist: {
        names: 'Nghệ sĩ',
        data: [
            {
                id: 5,
                title: 'Lisa',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme2/theme4.jpg',
            },
            {
                id: 6,
                title: 'Jennie Kim',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme2/theme5.jpg',
            },
            {
                id: 7,
                title: 'Jisoo',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme2/theme6.jpg',
            },
            {
                id: 8,
                title: 'Jack',
                link: 'https://datpham927.github.io/ZingMp3/background/modalThemes/modalTheme2/theme7.jpg',
            },
        ],
    },
};

function Theme() {
    const dispatch = useDispatch();
    const handleModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(zingAction.actions.modalTheme(false));
            dispatch(zingAction.actions.booleanPreview(false));
        }
    };
    const handleCloseModal = () => {
        dispatch(zingAction.actions.modalTheme(false));
        dispatch(zingAction.actions.booleanPreview(false));
    };
    return (
        <div className={cx('modal-topic')} onClick={(e) => handleModal(e)}>
            <div className={cx('topic')}>
                <div className={cx('topic-header')}>
                    <h1>Giao Diện</h1>
                    <div className={cx('icon-close')} onClick={handleCloseModal}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
                <div className={cx('topic-body')}>
                    <ThemeContainer data={themesModal.Dynamic} />
                    <ThemeContainer data={themesModal.topic} />
                    <ThemeContainer data={themesModal.artist} />
                </div>
            </div>
        </div>
    );
}

export default Theme;
