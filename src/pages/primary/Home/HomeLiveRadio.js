import Button from '~/components/Button';

import Container from '~/components/container/Container';
import ItemRadio from '~/components/ItemRadio/ItemRadio';
import className from 'classnames/bind';
import style from './Home.module.scss';

const cx = className.bind(style);
function HomeLiveRadio({ data }) {
    return (
        <Container title={data.title} all link={data.link}>
            <div className={cx('radio')}>
                {data?.items?.map((item, index) => (
                    <ItemRadio key={index} data={item} index={index} />
                ))}
                <Button noContent className={cx('btn-right')} iconLeft={<i className="icon ic-go-right"></i>} />
                <Button noContent className={cx('btn-left')} iconLeft={<i className="icon ic-go-left"></i>} />
            </div>
        </Container>
    );
}

export default HomeLiveRadio;
