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

export default GlobalStyles;
