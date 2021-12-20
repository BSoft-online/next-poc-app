import { css } from 'linaria';

const background = css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const container = css`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    min-width: 300px;

    & > * {
        display: block;
    }
`;

const button = css`
    margin-top: 20px;
    padding: 10px;
`;

export { background, container, button };