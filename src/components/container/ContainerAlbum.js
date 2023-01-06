import { useDispatch } from 'react-redux';
import { setCurrentIndex, setPlayListAudio } from '~/redux/dataControl';
import ItemAlbum from '../item/ItemAlBum/ItemAlBum';

function ContainerAlbum({ data, index = 12 }) {
    const dispatch = useDispatch();
    const handleOnClick = (i) => {
        dispatch(setPlayListAudio(data));
        dispatch(setCurrentIndex(i));
    };
    return (
        data &&
        data.map((e, i) => i < index && <ItemAlbum key={e.encodeId} data={e} onClick={() => handleOnClick(i)} />)
    );
}

export default ContainerAlbum;
