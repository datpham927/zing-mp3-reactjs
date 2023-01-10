/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Icon } from '../../components/Icons';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { zingAction } from '~/redux/action';
import TippyMenu from '~/components/menu/tippyMenu/TippyMenu';
import { useDispatch } from 'react-redux';
import Avatar from './Avatar';

const cx = classNames.bind(style);

const MENU_ITEM = [
    {
        id: 0,
        title: 'Danh sách chặn',
        iconLeft: <i className="icon ic-20-Block"></i>,
        // path: '/block',
    },
    {
        id: 1,
        title: 'Chất lượng nhạc',
        iconLeft: <i className="icon ic-20-quaility-SQ"></i>,
        iconRight: <ion-icon name="chevron-forward-outline"></ion-icon>,
        type: 'quality',
        children: {
            data: [
                {
                    id: 4,
                    title: 'SQ • 128',
                    iconLeft: <i className="icon ic-20-quaility-SQ"></i>,
                    type: 'SQ',
                },
                {
                    id: 5,
                    title: 'HQ • 320',
                    iconLeft: <i className="icon ic-20-quaility"></i>,
                    type: 'HQ',
                },
            ],
        },
    },
    {
        id: 2,
        title: 'Giới thiệu',
        iconLeft: <i className="icon ic-20-info"></i>,
        type: 'separate',
    },
    {
        id: 3,
        title: 'Liên hệ',
        iconLeft: <i className="icon ic-20-Call"></i>,
    },
];

function HeaderRight() {
    const dispatch = useDispatch();
    return (
        <div className={cx('right') + ' l-5 c-0'}>
            {/* ------ theme ------ */}
            <Button
                primary
                iconLeft={<Icon.IconTopic />}
                content="Chủ đề"
                onClick={() => dispatch(zingAction.actions.modalTheme(true))}
            />
            {/* ------ vip ------ */}
            <Button disable iconLeft={<Icon.IconVip />} content="Nâng cấp VIP" />
            {/* ------ tải file ------*/}
            <Button primary type={<Icon.upload />} content="Tải lên" />
            {/* ------ setting ------*/}
            <TippyMenu MENU_ITEM={MENU_ITEM}>
                <div className={cx('setting')}>
                    <ion-icon name="settings-outline"></ion-icon>
                </div>
            </TippyMenu>
            <Avatar className="c-0" />
        </div>
    );
}

export default HeaderRight;
