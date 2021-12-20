import { FC, ChangeEvent, useCallback } from 'react';
import { css } from 'linaria';

interface Props {
    onChange: Function;
    value: string;
    placeholder: string;
};

const inputStyles = css`
    padding: 20px;
    width: 200px;
    border-radius: 5px;
    margin-right: 20px;
    border-style: solid;
    border-color: #ddd;
`;

const Input: FC<Props> = ({ placeholder, value, onChange }) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => {
            onChange(event.currentTarget.value || '');
        },
        [onChange]
    );
    return (
        <input
            type="text"
            placeholder={ placeholder }
            value={ value }
            className={ inputStyles }
            onChange={ handleChange }
        />
    );
};

export default Input;