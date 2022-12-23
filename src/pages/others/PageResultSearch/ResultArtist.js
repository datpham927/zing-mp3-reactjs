import { useSelector } from 'react-redux';

import ContainerArtists from '~/components/container/ContainerArtists';
import NoContent from '~/components/noContent/NoConTent';
function ResultArtist() {
    const data = useSelector((state) => state.dataArtist.dataSearch);
    return data?.artists ? (
        <ContainerArtists data={data?.artists} index={data?.artists.lenght} title={'Nghệ Sĩ/OA'} />
    ) : (
        <NoContent />
    );
}

export default ResultArtist;
