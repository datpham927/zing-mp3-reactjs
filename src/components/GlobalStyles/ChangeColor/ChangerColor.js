import { useSelector } from 'react-redux';

const ChangerColor = ({ children }) => {
    const p = useSelector((state) => state.counter.previewBgrIndex);
    const t = useSelector((state) => state.counter.bgrIndex);
    console.log('t', t);
    console.log('p', p);
    if (t === 0 || p === 0) {
        document.documentElement.style.setProperty(
            '--linear-gradient-bg',
            'linear-gradient(to bottom, #740091, #2d1a4c)',
        );
        document.documentElement.style.setProperty('--sidebar-popup-bg', '#572f90');
        document.documentElement.style.setProperty('--link-text-hover', '#fe63da');
        document.documentElement.style.setProperty('--box-hot-item-bg-hove', 'rgba(254,255,255,0.2)');
        document.documentElement.style.setProperty('--box-hot-item-bg', 'rgba(254,255,255,0.1)');
        document.documentElement.style.setProperty('--purple-primary', '#ed2b91');
        document.documentElement.style.setProperty('--queue-player-popup-bg', '#5d218c');
        document.documentElement.style.setProperty('--layout-bg', '#37075d');
        document.documentElement.style.setProperty('--primary-bg', '#4B1178');
        document.documentElement.style.setProperty('--layout-bg', '#37075d');
    }
    if (t === 1 || p === 1) {
        document.documentElement.style.setProperty('--primary-bg', '#363636');
        document.documentElement.style.setProperty('--layout-bg', '#282828');
    }
    if (t === 2 || p === 2) {
        document.documentElement.style.setProperty('--primary-bg', '#1A3570');
        document.documentElement.style.setProperty('--layout-bg', '#061C4F');
        document.documentElement.style.setProperty('--link-text-hover', '#4C7CFF');
        document.documentElement.style.setProperty('--purple-primary', '#3560F5');
        document.documentElement.style.setProperty('--layout-bg', '#061641');
    }
    if (t === 3 || p === 3) {
        document.documentElement.style.setProperty('--layout-bg', '#E6E1DE');
        document.documentElement.style.setProperty('--primary-bg', '#EFEDEB');
        document.documentElement.style.setProperty('--link-text-hover', '#AC3E82');
        document.documentElement.style.setProperty('--purple-primary', '#C24793');
        document.documentElement.style.setProperty('--layout-bg', '#061641');
        document.documentElement.style.setProperty('--box-hot-item-bg-hove', 'rgba(254,255,255,0.4)');
        document.documentElement.style.setProperty('--box-hot-item-bg', 'rgba(254,255,255,0.3)');
        document.documentElement.style.setProperty('--text-item-hover', '#AC3E82');
    }
    if (t === 4 || p === 4) {
        document.documentElement.style.setProperty('--purple-primary', '#1966B2');
        document.documentElement.style.setProperty('--primary-bg', '#D1EDF0');
        document.documentElement.style.setProperty('--link-text-hover', '#1F5A93');
        document.documentElement.style.setProperty('--text-item-hover', '#1F5A93');
        document.documentElement.style.setProperty('--layout-bg', '#B3D8DB');
        document.documentElement.style.setProperty('--player-bg', '#A3D5DC');
    }
    if (t === 5 || p === 5) {
        document.documentElement.style.setProperty('--layout-bg', '#F1DDD8');
        document.documentElement.style.setProperty('--player-bg', '#F4CBCA');
        document.documentElement.style.setProperty('--primary-bg', '#F9E6E2');
        document.documentElement.style.setProperty('--purple-primary', '#D14781');
        document.documentElement.style.setProperty('--text-item-hover', '#CC3373');
        document.documentElement.style.setProperty('--link-text-hover', '#CC3373');
        document.documentElement.style.setProperty('--box-hot-item-bg-hove', 'rgba(254,255,255,0.4)');
        document.documentElement.style.setProperty('--box-hot-item-bg', 'rgba(254,255,255,0.3)');
    }
    if (t === 6 || p === 6) {
        document.documentElement.style.setProperty('--layout-bg', '#BBB9C4');
        document.documentElement.style.setProperty('--player-bg', '#C6C4D1');
        document.documentElement.style.setProperty('--primary-bg', '#CAC6DD');
        document.documentElement.style.setProperty('--purple-primary', '#8919AE');
        document.documentElement.style.setProperty('--text-item-hover', '#2a5e6b');
        document.documentElement.style.setProperty('--link-text-hover', '#6F1F89');
    }

    return <>{children}</>;
};
export default ChangerColor;
