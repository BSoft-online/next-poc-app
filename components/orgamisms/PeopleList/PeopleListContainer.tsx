import { FC, ReactNode } from 'react';
import { css } from 'linaria';

interface Props {
    children: ReactNode;
};

const container = css`
    padding: 50px 5%;
`;

const PeopleListContainer: FC<Props> = ({ children }) => (
    <div className={ container }>{ children }</div>
);

export default PeopleListContainer;