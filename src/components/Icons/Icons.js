import './Icons.css';
const IconMessage = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
            ></path>
        </svg>
    );
};

const IconInbox = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
            ></path>
        </svg>
    );
};

const IconView = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"
            ></path>
        </svg>
    );
};
const IconSettings = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.375 44.2391C21.375 44.6593 21.7157 45 22.1359 45H25.8641C26.2843 45 26.625 44.6593 26.625 44.2391V41.3044C29.4979 40.8723 32.1421 39.7417 34.3792 38.0912L36.4554 40.1674C36.7525 40.4646 37.2343 40.4646 37.5314 40.1674L40.1677 37.5311C40.4648 37.234 40.4648 36.7522 40.1677 36.4551L38.0915 34.3789C39.7419 32.1418 40.8723 29.4978 41.3044 26.625H44.2391C44.6593 26.625 45 26.2843 45 25.8641V22.1359C45 21.7157 44.6593 21.375 44.2391 21.375H41.3044C40.8723 18.5021 39.7418 15.858 38.0913 13.6209L40.1673 11.5449C40.4644 11.2478 40.4644 10.766 40.1673 10.4689L37.531 7.83262C37.2339 7.53548 36.7521 7.53548 36.455 7.83262L34.379 9.90863C32.1419 8.25818 29.4978 7.1277 26.625 6.69556V3.76087C26.625 3.34065 26.2843 3 25.8641 3H22.1359C21.7156 3 21.375 3.34065 21.375 3.76087V6.69556C18.5022 7.1277 15.8582 8.25815 13.6211 9.90854L11.5452 7.83265C11.2481 7.53551 10.7664 7.53551 10.4692 7.83265L7.83294 10.4689C7.5358 10.7661 7.5358 11.2478 7.83294 11.545L9.90878 13.6208C8.25826 15.8579 7.12772 18.5021 6.69556 21.375H3.76087C3.34065 21.375 3 21.7157 3 22.1359V25.8641C3 26.2843 3.34065 26.625 3.76087 26.625H6.69556C7.1277 29.4978 8.25819 32.1419 9.90863 34.379L7.83255 36.4551C7.53541 36.7522 7.53541 37.234 7.83255 37.5311L10.4688 40.1674C10.766 40.4645 11.2477 40.4645 11.5449 40.1674L13.6209 38.0913C15.858 39.7418 18.5021 40.8723 21.375 41.3044V44.2391ZM24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
            ></path>
        </svg>
    );
};
const IconCoins = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
            ></path>
        </svg>
    );
};

const IconLogOut = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M24.1716 26L7 26C6.44771 26 6 25.5523 6 25L6 23C6 22.4477 6.44771 22 7 22L24.1716 22L20.2929 18.1213C19.9024 17.7308 19.9024 17.0976 20.2929 16.7071L21.7071 15.2929C22.0976 14.9024 22.7308 14.9024 23.1213 15.2929L30.4142 22.5858C31.1953 23.3668 31.1953 24.6332 30.4142 25.4142L23.1213 32.7071C22.7308 33.0976 22.0976 33.0976 21.7071 32.7071L20.2929 31.2929C19.9024 30.9024 19.9024 30.2692 20.2929 29.8787L24.1716 26ZM36 43L27 43C26.4477 43 26 42.5523 26 42L26 40C26 39.4477 26.4477 39 27 39L36 39C37.1046 39 38 38.1046 38 37L38 11C38 9.89543 37.1046 9 36 9L27 9C26.4477 9 26 8.55228 26 8L26 6C26 5.44771 26.4477 5 27 5L36 5C39.3137 5 42 7.68629 42 11L42 37C42 40.3137 39.3137 43 36 43Z"
            ></path>
        </svg>
    );
};
const IconLanguage = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
            ></path>
        </svg>
    );
};
const IconHelp = ({ className }) => {
    return (
        <svg
            className={className}
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
            ></path>
        </svg>
    );
};
const IconClose = ({ className }) => {
    return <i className="icon ic-close"></i>;
};

const IconTopic = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <defs>
                <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                    <stop offset="0%" stopColor="#F81212"></stop>
                    <stop offset="100%" stopColor="red"></stop>
                </linearGradient>
                <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                    <stop offset="0%" stopColor="#00F"></stop>
                    <stop offset="100%" stopColor="#0031FF"></stop>
                </linearGradient>
                <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                    <stop offset="0%" stopColor="#FFA600"></stop>
                    <stop offset="100%" stopColor="orange"></stop>
                </linearGradient>
                <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                    <stop offset="0%" stopColor="#13EFEC"></stop>
                    <stop offset="100%" stopColor="#00E8DF"></stop>
                </linearGradient>
                <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <filter
                    id="301mo6jeah"
                    width="312.7%"
                    height="312.7%"
                    x="-106.4%"
                    y="-106.4%"
                    filterUnits="objectBoundingBox"
                >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <filter
                    id="b2zvzgq7fj"
                    width="295%"
                    height="295%"
                    x="-97.5%"
                    y="-97.5%"
                    filterUnits="objectBoundingBox"
                >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <path
                    id="qtpqrj1oda"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                ></path>
                <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                <path
                    id="2eiwxjmc7m"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                ></path>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(2 3)">
                <mask id="tinejqaasb" fill="#fff">
                    <use xlinkHref="#qtpqrj1oda"></use>
                </mask>
                <use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
                <g mask="url(#tinejqaasb)">
                    <g transform="translate(-2 -3)">
                        <mask id="uf3ckvfvpf" fill="#fff">
                            <use xlinkHref="#jggzvnjgfc"></use>
                        </mask>
                        <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
                        <circle
                            cx="8.9"
                            cy="6.8"
                            r="9"
                            fill="url(#j32lhg93hd)"
                            filter="url(#4a7imk8mze)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                        <circle
                            cx="9.3"
                            cy="13.7"
                            r="5.5"
                            fill="url(#hjoavsus6g)"
                            filter="url(#301mo6jeah)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                        <circle
                            cx="15.9"
                            cy="6.9"
                            r="6"
                            fill="url(#la1y5u3dvi)"
                            filter="url(#b2zvzgq7fj)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                        <circle
                            cx="16.4"
                            cy="17.7"
                            r="7.5"
                            fill="url(#2dsmrlvdik)"
                            filter="url(#a1wq161tvl)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                    </g>
                </g>
                <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
            </g>
        </svg>
    );
};
const IconVip = () => {
    return <i className="icon ic-20-VIP-2"></i>;
};
const upload = () => {
    return <i className="icon ic-upload"></i>;
};
const IconLeft = () => {
    return <i className="icon ic-back"></i>;
};
const IconRight = () => {
    return <i className="icon ic-forward"></i>;
};
const IconHQ = () => {
    return <i className="icon ic-20-quaility"></i>;
};
const IconCheck = () => {
    return <i className="icon ic-check"></i>;
};

const IconLoad = ({ className }) => {
    return (
        <svg
            className={className}
            width="40px"
            height="40px"
            fill="#f1f1f1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <g transform="rotate(0 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.9166666666666666s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(30 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.8333333333333334s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(60 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.75s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(90 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.6666666666666666s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(120 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5833333333333334s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(150 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(180 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.4166666666666667s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(210 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.3333333333333333s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(240 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.25s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(270 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.16666666666666666s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(300 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.08333333333333333s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(330 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
        </svg>
    );
};
const IconMusic = () => {
    return <i className="icon  ic-24-NewReleaseTab"></i>;
};

const ImgTop100 = () => {
    return (
        <svg width="625" height="166" viewBox="0 0 625 166">
            <defs>
                <linearGradient id="csl6gbytxb" x1="0%" x2="102%" y1="49.434%" y2="50.578%">
                    <stop offset="0%" stop-color="#3023AE"></stop>
                    <stop offset="100%" stop-color="#C86DD7"></stop>
                </linearGradient>
                <linearGradient id="nhmksuo1gc" x1="0%" x2="102%" y1="26.937%" y2="73.525%">
                    <stop offset="0%" stop-color="#3023AE"></stop>
                    <stop offset="100%" stop-color="#C86DD7"></stop>
                </linearGradient>
                <path
                    id="dxhld9pu1a"
                    d="M7.99 88.712V74.768h3.966v-3.09H.566v3.09h3.992v13.944h3.431zm74.837.316c2.604 0 4.721-.851 6.4-2.53 1.63-1.68 2.458-3.772 2.458-6.303 0-2.507-.827-4.6-2.458-6.279-1.679-1.703-3.82-2.555-6.4-2.555-2.58 0-4.721.852-6.4 2.555-1.63 1.68-2.458 3.772-2.458 6.279 0 2.53.827 4.623 2.458 6.302 1.679 1.68 3.796 2.531 6.4 2.531zm0-3.212c-1.533 0-2.799-.535-3.796-1.582-.998-1.046-1.485-2.409-1.485-4.04 0-1.605.487-2.944 1.485-4.015.997-1.07 2.263-1.606 3.796-1.606s2.799.536 3.796 1.606c.998 1.071 1.485 2.41 1.485 4.016 0 1.63-.487 2.993-1.485 4.04-.997 1.046-2.263 1.581-3.796 1.581zm76.128 2.896v-6.351h2.02c1.606 0 2.944-.512 3.99-1.51 1.047-.997 1.582-2.287 1.582-3.869 0-1.606-.51-2.895-1.557-3.869-1.022-.949-2.36-1.436-4.04-1.436h-5.427v17.035h3.432zm1.533-9.32h-1.533v-4.746h1.582c.73 0 1.314.22 1.776.633.462.438.706.998.706 1.703 0 .706-.244 1.29-.706 1.753-.462.438-1.07.657-1.825.657z"
                ></path>
            </defs>
            <g fill="none" fill-rule="evenodd" opacity="0.653">
                <g>
                    <g>
                        <g>
                            <g fill-rule="nonzero" transform="translate(-504 -92) translate(239) translate(265 92)">
                                <use fill="url(#csl6gbytxb)" xlinkHref="#dxhld9pu1a"></use>
                            </g>
                            <path
                                d="M434 45H625V124H434z"
                                transform="translate(-504 -92) translate(239) translate(265 92)"
                            ></path>
                            <path
                                fill="url(#nhmksuo1gc)"
                                d="M368.977 146.84c-32.595 0-59.113-26.5-59.113-59.073l-.001-.016.001-.066c0-21.715-17.679-39.382-39.409-39.382-14.823 0-27.756 8.225-34.483 20.343V56.073c8.862-9.649 21.338-15.154 34.483-15.154 25.805 0 46.798 20.98 46.798 46.766h.009c-.001.028-.009.054-.009.082 0 28.501 23.204 51.689 51.724 51.689 28.521 0 51.725-23.188 51.725-51.689 0-28.5-23.204-51.688-51.725-51.688-16.88 0-32.297 7.978-42.01 21.53-1.25-2.335-2.639-4.585-4.159-6.737 11.292-14.118 28.018-22.177 46.17-22.177 32.595 0 59.113 26.5 59.113 59.072 0 32.573-26.518 59.073-59.114 59.073m-98.522-24.696c-19.014 0-34.483-15.458-34.483-34.459 0-19 15.47-34.46 34.483-34.46 19.014 0 34.483 15.46 34.483 34.46 0 19.001-15.469 34.46-34.483 34.46m98.522-68.837c19.014 0 34.483 15.459 34.483 34.46 0 19-15.469 34.458-34.483 34.458-19.013 0-34.482-15.458-34.482-34.459 0-19 15.469-34.459 34.482-34.459m-98.522-24.696c32.595 0 59.114 26.5 59.114 59.073h.001l-.001.082c0 21.715 17.678 39.382 39.408 39.382s39.41-17.667 39.41-39.382c0-21.715-17.68-39.382-39.41-39.382-16.305 0-30.33 9.948-36.315 24.09-.82-3.351-1.901-6.6-3.227-9.721C338.079 49.116 352.785 41 368.977 41c25.805 0 46.799 20.98 46.799 46.766 0 25.787-20.994 46.766-46.799 46.766-25.804 0-46.798-20.979-46.798-46.766 0-.028-.007-.054-.008-.082h.008c0-28.5-23.203-51.689-51.724-51.689-12.814 0-25.053 4.733-34.483 13.165v-9.44c10.1-7.268 21.982-11.109 34.483-11.109m49.278 18.248c-11.756-14.146-29.482-23.17-49.278-23.17-12.374 0-24.189 3.467-34.483 10.069V2.545c0-.85-.44-1.641-1.163-2.09-.723-.45-1.627-.494-2.39-.117l-40.887 20.184c-1.22.602-1.72 2.078-1.118 3.296.603 1.22 2.08 1.72 3.3 1.117l37.332-18.428v81.26c0 .01.003.018.003.028.06 21.665 17.713 39.272 39.406 39.272 16.306 0 30.33-9.947 36.316-24.089.82 3.35 1.901 6.6 3.227 9.72-8.644 13.638-23.351 21.753-39.543 21.753-25.804 0-46.798-20.979-46.798-46.766v-65.39c0-.853-.442-1.645-1.168-2.094-.726-.449-1.633-.489-2.396-.107L191.52 34.369c-1.217.608-1.71 2.087-1.101 3.303.608 1.216 2.088 1.708 3.304 1.1l25.007-12.495v63.364c0 .182.023.36.061.531 1.303 27.35 23.977 49.202 51.663 49.202 16.88 0 32.297-7.98 42.01-21.53 1.25 2.334 2.639 4.584 4.158 6.735-11.29 14.116-28.025 22.179-46.168 22.179-32.595 0-59.113-26.5-59.113-59.073V41.001c0-.853-.442-1.645-1.169-2.093-.725-.449-1.632-.49-2.396-.108l-16.748 8.369c-1.217.607-1.71 2.086-1.102 3.302.608 1.216 2.088 1.708 3.304 1.1l13.185-6.587v117.914c0 1.36 1.103 2.461 2.463 2.461s2.463-1.102 2.463-2.461v-50.606c1.897 4.534 4.302 8.805 7.143 12.741v37.865c0 1.36 1.103 2.461 2.463 2.461s2.463-1.102 2.463-2.461v-31.842c2.137 2.313 4.443 4.468 6.896 6.447v25.395c0 1.36 1.103 2.461 2.463 2.461s2.463-1.102 2.463-2.461v-21.794c10.112 6.68 22.22 10.577 35.222 10.577 19.249 0 37.029-8.38 49.245-23.089 11.755 14.146 29.48 23.17 49.277 23.17 35.312 0 64.04-28.708 64.04-63.995s-28.728-63.995-64.04-63.995c-19.257 0-37.03 8.378-49.244 23.088z"
                                transform="translate(-504 -92) translate(239) translate(265 92)"
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
const IconLoadControl = ({ className }) => {
    return (
        <i className={className} style={{ border: '1px solid white', borderRadius: '50%', margin: '0 2px' }}>
            <svg
                className="lds-spinner"
                width="34px"
                height="34px"
                fill="#f1f1f1"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                style={{ background: 'none' }}
            >
                <g transform="rotate(0 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.9166666666666666s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(30 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.8333333333333334s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(60 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.75s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(90 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.6666666666666666s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(120 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5833333333333334s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(150 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(180 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.4166666666666667s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(210 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.3333333333333333s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(240 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.25s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(270 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.16666666666666666s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(300 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.08333333333333333s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
                <g transform="rotate(330 50 50)">
                    <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                        ></animate>
                    </rect>
                </g>
            </svg>
        </i>
    );
};
const IconLoadMusic = ({ font = ' 30px' }) => {
    return (
        <svg
            className="lds-spinner"
            width={font}
            height={font}
            fill="#f1f1f1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style={{ background: 'none' }}
        >
            <g transform="rotate(0 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.9166666666666666s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(30 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.8333333333333334s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(60 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.75s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(90 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.6666666666666666s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(120 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5833333333333334s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(150 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(180 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.4166666666666667s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(210 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.3333333333333333s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(240 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.25s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(270 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.16666666666666666s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(300 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.08333333333333333s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
            <g transform="rotate(330 50 50)">
                <rect x="47" y="24" rx="3.7600000000000002" ry="1.92" width="6" height="12">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </g>
        </svg>
    );
};
export {
    IconMessage,
    IconInbox,
    IconCoins,
    IconHelp,
    IconLanguage,
    IconLogOut,
    IconSettings,
    IconView,
    IconLoad,
    upload,
    IconClose,
    IconTopic,
    IconRight,
    IconLeft,
    IconVip,
    IconHQ,
    IconCheck,
    IconMusic,
    ImgTop100,
    IconLoadMusic,
    IconLoadControl,
};
