import { FC, ReactNode } from 'react';
import { css } from 'linaria';

interface Props {
    children: ReactNode;
}

const wrapper = css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const ListWrapper: FC<Props> = ({ children }) => (
    <div className={ wrapper }>{ children }</div>
);

export default ListWrapper;