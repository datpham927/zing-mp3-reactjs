function Minute({ duration }) {
    let kq = Math.floor(duration / 60);
    return kq + ' phút';
}

export default Minute;
