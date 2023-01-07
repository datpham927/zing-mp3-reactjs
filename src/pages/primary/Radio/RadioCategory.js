import Container from '~/components/container/Container';

import className from 'classnames/bind';
import style from './Radio.module.scss';
import LoadImg from '~/components/load/loadImg/LoadImg';

const cx = className.bind(style);

function RadioCategory({ data }) {
    return (
        <Container title={data.title}>
            {data?.items?.map(
                (i, index) =>
                    index < 4 && (
                        <div className="l-3 col">
                            <div className={cx('episode-item')}>
                                {i.thumbnail ? (
                                    <img src={i.thumbnail} alt={i.title} />
                                ) : (
                                    <LoadImg className={cx('padding-img')} />
                                )}
                            </div>
                        </div>
                    ),
            )}
        </Container>
    );
}

export default RadioCategory;
