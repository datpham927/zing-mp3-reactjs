import className from 'classnames/bind';
import Container from '~/components/container/Container';
import ItemPodcast from '~/components/item/ItemPodcast/ItemPodcast';
import style from './Radio.module.scss';

const cx = className.bind(style);

function RadioTopPodcast({ data }) {
    // const dispatch = useDispatch();
    const handleOnClick = (item) => {
        // dispatch(setPlayListAudio(item));
        // console.log(item.album);
    };
    return (
        <Container title={data?.title} all link={data.link}>
            <div className="l-6 col">
                <div className={cx('box-left')}>
                    {data?.items?.map(
                        (item, index) =>
                            index < 3 && (
                                <ItemPodcast
                                    className={cx('topPodcast')}
                                    index={index + 1}
                                    key={index}
                                    data={item}
                                    onClick={() => handleOnClick(item)}
                                />
                            ),
                    )}
                </div>
            </div>
            <div className="l-6 col">
                <div className={cx('box-right')}>
                    {data?.items?.map(
                        (item, index) =>
                            index >= 3 &&
                            index < 6 && (
                                <ItemPodcast
                                    className={cx('topPodcast')}
                                    index={index + 1}
                                    key={index}
                                    data={item}
                                    onClick={() => handleOnClick(item)}
                                />
                            ),
                    )}
                </div>
            </div>
        </Container>
    );
}

export default RadioTopPodcast;
