import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';


export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps) => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',  // стиль styles.primary применится тогда когда appearance == 'primary' 
                [styles.ghost]: appearance == 'ghost'
            })}
            {...props}  // аттрибуты кнопки (onClick и т.п.)
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
                [styles.right]: arrow == 'right'
            })}> 
                <ArrowIcon />
                </span>}
        </button>
    );
};