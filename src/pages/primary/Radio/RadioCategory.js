import Container from '~/components/container/Container';
import LoadImg from '~/components/loadImg/LoadImg';
import className from 'classnames/bind';
import style from './Radio.module.scss';

const cx = className.bind(style);

function RadioCategory({ data }) {
    return (
        <Container title={data.title}>
            {data?.items?.map(
                (i, index) =>
                    index < 4 && (
                        <div className="l-3 col">
                            <div className={cx('episode-item')}>
                                <LoadImg timeLoad={'2000'} className={cx('padding-img')}>
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
