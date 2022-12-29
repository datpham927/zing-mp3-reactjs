/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { artist } from '~/components/Api/Service';
import Loading from '~/components/load/Loading/Loading';
import { zingArtist } from '~/redux/dataArtist';
import ArtistBody from './ArtistBody';
import ArtistHeader from './ArtistHeader';
import style from './PageArtist.module.scss';
const cx = classNames.bind(style);

function PageArtist() {
    const id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchApi = async () => {
            const data = await artist(id.name);
            dispatch(zingArtist.actions.setDataArtist(data));
            data?.sections &&
                data?.sections.forEach((i) => {
                    // eslint-disable-next-line no-unused-expressions
                    i.title === 'Bài hát nổi bật'
                        ? dispatch(zingArtist.actions.setArtist_Song(i))
                        : i.title === 'Single & EP'
                        ? dispatch(zingArtist.actions.setArtist_Singer(i))
                        : i.title === 'MV'
                        ? dispatch(zingArtist.actions.setArtist_MV(i))
                        : i.title === 'Album'
                        ? dispatch(zingArtist.actions.setArtist_Album(i))
                        : '';
                });
        };
        fetchApi();
    }, [id.name]);
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
