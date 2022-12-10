import Button from '~/components/Button';
import Container from '~/components/container/Container';
import className from 'classnames/bind';
import style from './Home.module.scss';
import ItemEvent from '~/components/ItemEvent/ItemEvent';

const cx = className.bind(style);
function HomeEvent({ data }) {
    return (
        <Container title={data.title}>
            <div className={cx('wrapper-event')}>
                {data?.items?.map((item, index) => (
                    <ItemEvent key={index} data={item} />
                ))}
                <Button noContent className={cx('btn-right')} iconLeft={<i className="icon ic-go-right"></i>} />
                <Button noContent className={cx('btn-left')} iconLeft={<i className="icon ic-go-left"></i>} />
            </div>
        </Container>
    );
}

export default HomeEvent;
