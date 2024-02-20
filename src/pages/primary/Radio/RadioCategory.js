import Container from '~/components/container/Container';

import className from 'classnames/bind';
import style from './Radio.module.scss';
import LoadImg from '~/components/load/loadImg/LoadImg';
import toastMessage from '~/components/modal/toast';

const cx = className.bind(style);

function RadioCategory({ data }) {
    return (
        <Container title={data.title} scroll>
            {data?.items?.map(
                (i, index) =>
                    index < 4 && (
                        <div className="l-3 m-3 c-6 col">
                            <div
                                className={cx('episode-item')}
                                onClick={() => toastMessage('Đang phát triển!')}
                            >
                                <LoadImg className={cx('padding-img')}>
                                    <img src={i.thumbnail} alt={i.title} />
                                </LoadImg>
                            </div>
                        </div>
                    ),
            )}
        </Container>
    );
}

export default RadioCategory;
