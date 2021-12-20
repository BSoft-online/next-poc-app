import { MouseEventHandler, FC } from 'react';
import Button from 'components/atoms/Button';
import { background, button, container } from './styles';

interface Props {
    onClose: MouseEventHandler<HTMLButtonElement>;
    age: number | undefined;
    name: string;
};

const Modal: FC<Props> = ({
    onClose,
    age,
    name
}) => (
    <div className={ background }>
        <div className={ container }>
            <label>Name: { name }</label>
            <label>Age: { age || 'Loading' }</label>
            <Button className={ button } onClick={ onClose }>
                Cool
            </Button>
        </div>
    </div>
);

export default Modal;