import { FC, ReactNode } from 'react';
import { css } from 'linaria';

interface Props {
    children?: ReactNode;
};

const background = css`
    display: flex;
    height: 400px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image:
        url("https://images.unsplash.com/photo-1576158114254-3ba81558b87d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80");
    align-items: center;
    justify-content: center;
`;

const container = css`
    padding: 20px;
    background: #fff;
    border-radius: 5px;
`;

const SearchBarContainer: FC<Props> = ({ children }) => (
    <div className={ background }>
        <div className={ container }>
            { children }
        </div>
    </div>
);

export default SearchBarContainer;