import { MouseEventHandler, FC } from 'react';
import { css } from 'linaria';
import clsx from 'clsx';

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    className?: string;
};

const button = css`
    padding: 20px;
    background-color: #db0840;
    color: #fff;
    border-radius: 5px;
    border-width: 0;
    min-width: 100px;

    &:hover {
        background-color: #9b0e2e;
        cursor: pointer;
    }
`;

const Button: FC<Props> = ({
    onClick,
    children,
    className = '',
}) => (
    <button
        className={ clsx(button, className) }
        onClick={ onClick }
    >
        { children }
    </button>
);

export default Button;