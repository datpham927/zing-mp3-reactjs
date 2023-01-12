import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setIdAudio, setPlayListAudio } from '~/redux/dataControl';
import ItemAlbum from '../item/ItemAlBum/ItemAlBum';

function ContainerAlbum({ data, index = 12 }) {
    const dispatch = useDispatch();
    const handleOnClick = (e) => {
        dispatch(setPlayListAudio(data));
        dispatch(setIdAudio(e));
    };
    return (
        data && data.map((e, i) => i < index && <ItemAlbum key={uuidv4()} data={e} onClick={() => handleOnClick(e)} />)
    );
}

export default ContainerAlbum;
