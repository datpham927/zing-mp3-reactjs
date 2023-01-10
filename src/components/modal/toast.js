import { Slide, toast } from 'react-toastify';

function toastMessage(title) {
    toast(title, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
    });
}

export default toastMessage;
