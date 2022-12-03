import axios from 'axios';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonAction from '~/components/Button/ButtonAction';
import Container from '~/components/container/container';
import ItemAlbum from '~/components/ItemAlBum/ItemAlBum';
import { zingHome } from '~/redux/dataHome';
import style from './Home.module.scss';

const cx = className.bind(style);
function Home() {
    const [heightImg, setHeightImg] = useState(0);
    const [slider, setSlider] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
    const [all, setAll] = useState(true);
    const [vPop, setVpop] = useState(false);
    const [others, setOthers] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const getTodoItems = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL_HOME}getHome`);
                const data = response.data;
                dispatch(zingHome.actions.setDataHome(data.data));
            } catch (errors) {
                console.error(errors);
            }
        };
        getTodoItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { data_Home } = useSelector((state) => state.dataHome);
    useEffect(() => {
        data_Home?.items?.forEach((item) => {
            if (item.sectionType === 'banner' && item.sectionId === 'hSlider') setSlider(item);
            //mới phát hành
            else if (item.sectionType === 'new-release') setNewRelease(item);
        });
    }, [data_Home]);

    const handleChangeTab = (type) => {
        if (type === 'all') {
            setAll(true);
            setVpop(false);
            setOthers(false);
        } else if (type === 'vPop') {
            setAll(false);
            setVpop(true);
            setOthers(false);
        } else if (type === 'others') {
            setAll(false);
            setVpop(false);
            setOthers(true);
        }
    };

    const handleHeight = () => {
        var divWidth = document.getElementsByClassName('Home_item__BetTT');
        setHeightImg(divWidth[0].offsetHeight);
    };
    console.log(newRelease);
    const navigate = useNavigate();
    const handleNewSongs = () => {
        if (setAll) navigate(newRelease?.link + '/all');
        else if (setVpop) navigate(newRelease?.link + '/Vpop');
        else if (setOthers) navigate(newRelease?.link + '/usuk');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery')} style={{ height: heightImg }}>
                <div className={cx('gallery-wrapper')}>
                    {slider?.items?.map((item, index) => (
                        <div
                            className={
                                cx(
                                    'item',
                                    index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : 'four',
                                ) + ' l-4'
                            }
                            onLoad={handleHeight}
                        >
                            <img src={item.banner} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            {/* ------------ */}
            <Container title={newRelease?.title}>
                <div className={cx('header')}>
                    <div className={cx('left')}>
                        <ButtonAction action={all} className={cx('btn')} onClick={() => handleChangeTab('all')}>
                            TẤT CẢ
                        </ButtonAction>
                        <ButtonAction action={vPop} className={cx('btn')} onClick={() => handleChangeTab('vPop')}>
                            VIỆT NAM
                        </ButtonAction>
                        <ButtonAction action={others} className={cx('btn')} onClick={() => handleChangeTab('others')}>
                            QUỐC TẾ
                        </ButtonAction>
                    </div>
                    <div className={cx('right')} onClick={handleNewSongs}>
                        <Link>
                            TẤT CẢ <i className="icon ic-go-right"></i>
                        </Link>
                    </div>
                </div>
                <div className={cx('body')}>
                    {all &&
                        newRelease?.items?.all.map(
                            (item, index) => index < 12 && <ItemAlbum key={index} data={item} />,
                        )}
                    {vPop &&
                        newRelease?.items?.vPop.map(
                            (item, index) => index < 12 && <ItemAlbum key={index} data={item} />,
                        )}
                    {others &&
                        newRelease?.items?.others.map(
                            (item, index) => index < 12 && <ItemAlbum key={index} data={item} />,
                        )}
                </div>
            </Container>
        </div>
    );
}

export default Home;
