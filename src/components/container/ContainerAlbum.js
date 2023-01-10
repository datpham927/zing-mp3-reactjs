import { useDispatch } from 'react-redux';
import { setIdAudio, setPlayListAudio } from '~/redux/dataControl';
import ItemAlbum from '../item/ItemAlBum/ItemAlBum';

function ContainerAlbum({ data, index = 12 }) {
    const dispatch = useDispatch();
    const handleOnClick = (e) => {
        dispatch(setPlayListAudio(data));
        dispatch(setIdAudio(e));
    };
    return (
        data &&
        data.map((e, i) => i < index && <ItemAlbum key={e.encodeId} data={e} onClick={() => handleOnClick(e)} />)
    );
}

export default ContainerAlbum;
