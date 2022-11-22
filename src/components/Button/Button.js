/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';
import { forwardRef } from 'react';
const cx = classNames.bind(style);

function Button(
    {
        to,
        href,
        type,
        src,
        primary = false,
        outline = false,
        iconLeft,
        disable = false,
        small = false,
        noContent = false,
        className,
        onClick,
        children,
        content,
        ...passProps
    },
    ref,
) {
    const classNames = cx('wrapper', {
        [className]: className,
        primary,
        disable,
        outline,
        small,
        noContent,
    });
    const props = {
        onClick,
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
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
        Comp = 'button';
    }
    if (small) {
        Comp = 'button';
    }
    if (noContent) {
        Comp = 'button';
    }

    return src ? (
        <Comp ref={ref} className={classNames} {...props}>
            {src && <img className={cx('image')} src={src} />}
            <span className={cx('content')}>{children}</span>
        </Comp>
    ) : noContent ? (
        <Comp className={classNames} {...props}>
            {iconLeft && <span>{iconLeft}</span>}
            {type && (
                <span>
                    <label htmlFor="upload">{type}</label>
                    <input type="file" hidden id="upload" />
                </span>
            )}
            <span className={cx('content')}>{children}</span>
        </Comp>
    ) : (
        <Tippy delay={[0, 50]} content={content}>
            <Comp className={classNames} {...props}>
                {iconLeft && <span>{iconLeft}</span>}
                {type && (
                    <span>
                        <label htmlFor="upload">{type}</label>
                        <input type="file" hidden id="upload" />
                    </span>
                )}
            </Comp>
        </Tippy>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    iconLeft: PropTypes.node,
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};
export default forwardRef(Button);
