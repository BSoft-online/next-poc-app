import { FC, useCallback } from 'react';
import { css } from 'linaria';
import Button from 'components/atoms/Button';

interface Props {
    avatar: string;
    name: string;
    onButtonClick: (name: string) => void;
};

const container = css`
    text-align: center;
    display: inline-block;
`;

const wrapper = css`
    width: 100px;
`;

const Person: FC<Props> = ({
    avatar,
    name,
    onButtonClick,
}) => {
    const handleButtonClick = useCallback((): void => {
        onButtonClick(name);
    }, [onButtonClick, name]);

    return (
        <div className={ container }>
            <div className={ wrapper }>
                <div dangerouslySetInnerHTML={{ __html: avatar }} />
                <label>{ name }</label>
                <Button onClick={ handleButtonClick }>
                    See details
                </Button>
            </div>
        </div>
    );
};

export default Person;