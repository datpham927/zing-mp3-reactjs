import PropTypes from 'prop-types';
import './GlobalStyles.module.scss';

import Background from '../background/Background';
function GlobalStyles({ children }) {
    return (
        <>
            {children}
            <Background />
        </>
    );
}
GlobalStyles.prototype = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
