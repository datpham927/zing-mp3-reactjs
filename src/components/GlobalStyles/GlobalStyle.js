import PropTypes from 'prop-types';
import './gird.css';
import './GlobalStyles.module.scss';
import Background from '../background/Background';
import ChangerColor from './ChangeColor/ChangerColor';

function GlobalStyles({ children }) {
    return (
        <ChangerColor>
            <div>
                {children}
                <Background />
            </div>
        </ChangerColor>
    );
}
GlobalStyles.prototype = {
    children: PropTypes.node,
};

export default GlobalStyles;
