/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';
const cx = classNames.bind(style);

function Button({
    to,
    href,
    type,
    src,
    primary = false,
    outline = false,
    iconLeft,
    sidebar = false,
    className,
    onclick,
    children,
    ...passProps
}) {
    const classNames = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        sidebar,
        iconLeft,
    });
    const props = {
        onclick,
        ...passProps,
    };
    let Comp = 'button';
    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classNames} {...props}>
            {iconLeft && <span className={cx('iconLeft')}>{iconLeft}</span>}
            {type && (
                <span className={cx('iconLeft')}>
                    <label for="upload">{type}</label>
                    <input type="file" hidden id="upload" />
                </span>
            )}
            {src && <img className={cx('image')} src={src} />}
            <span className={cx('content')}>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    sidebar: PropTypes.bool,
    iconLeft: PropTypes.node,
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};
export default Button;
