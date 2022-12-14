import { useDispatch, useSelector } from 'react-redux';
import ItemPlayList from '~/components/item/ItemPlayList/ItemPlayList';
import Empty from '../Empty/Empty';
import classNames from 'classnames/bind';
import style from './PlayList.module.scss';
import Button from '~/components/Button';
import { setModalAddPlayList } from '~/redux/action';

const cx = classNames.bind(style);
function PlayList() {
    const { playListFavorite, createPlayList } = useSelector((state) => state.Favorite);
    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>PLAYLIST</h3>
                <Button
                    content="Tạo playlist mới"
                    className={cx('btn')}
                    iconLeft={<i class="icon ic-add"></i>}
                    onClick={() => dispatch(setModalAddPlayList(true))}
                />
            </div>
            {playListFavorite.length > 0 || createPlayList.length > 0 ? (
                <div className={cx('body')}>
                    {playListFavorite.map((e) => (
                        <ItemPlayList data={e} />
                    ))}
                    {createPlayList.map((e) => (
                        <ItemPlayList data={e} type="create-playlist" />
                    ))}
                </div>
            ) : (
                <Empty title="Chưa có PlayList nào trong thư viện cá nhân" link="/top100" />
            )}
        </div>
    );
}

export default PlayList;
