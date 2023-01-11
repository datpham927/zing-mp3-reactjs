import { useSelector } from 'react-redux';
import ContainerVideos from '~/components/container/ContainerVideos';
import NoContent from '~/components/noContent/NoConTent';

function ResultMv() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    return (
        <>
            {data.videos ? (
                <ContainerVideos data={data?.videos} index={data.videos?.length} title={'MV'} />
            ) : (
                <NoContent />
            )}
        </>
    );
}

export default ResultMv;
