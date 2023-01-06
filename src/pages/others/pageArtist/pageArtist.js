/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { artist } from '~/components/Api/Service';
import Loading from '~/components/load/Loading/Loading';
import { setDataArtist } from '~/redux/dataArtist';
import ArtistBody from './ArtistBody';
import ArtistHeader from './ArtistHeader';
import style from './PageArtist.module.scss';
const cx = classNames.bind(style);

function PageArtist() {
    const id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setDataArtist([]));
        const fetchApi = async () => {
            const data = await artist(id.name);
            dispatch(setDataArtist(data));
        };
        fetchApi();
    }, [id.name]);
    const navigate = useNavigate();
    useEffect(() => {
        navigate(-1);
    }, []);
    const data = useSelector((state) => state.dataArtist.dataArtist);
    return data.length !== 0 ? (
        <div className={cx('wrapper')}>
            <ArtistHeader data={data} />
            <ArtistBody />
        </div>
    ) : (
        <Loading />
    );
}

export default PageArtist;
