import { ReactNode, FC } from 'react';
import { css } from 'linaria';

interface Props {
    children: ReactNode;
};

const header = css`
    margin: 20px 0;
`;

const Header: FC<Props> = ({ children }) => (
    <h2 className={ header }>{ children }</h2>
);

export default Header;