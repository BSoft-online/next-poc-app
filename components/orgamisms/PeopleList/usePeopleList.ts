import { useState, MouseEventHandler } from 'react';
import useGetAge from 'api/hooks/useGetAge';

type Result = {
    age: number | undefined;
    name: string;
    isModalOpen: boolean;
    onSeeDetailsClick: (name: string) => void;
    onModalClose: MouseEventHandler<HTMLButtonElement>;
};

const usePeopleList = (): Result => {
    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { age } = useGetAge(name, {
        enabled: isModalOpen
    });

    const onSeeDetailsClick = (newName: string): void => {
        setIsModalOpen(true);
        setName(newName);
    };

    const onModalClose = (): void => {
        setIsModalOpen(false);
        setName('');
    };

    return {
        age,
        name,
        isModalOpen,
        onSeeDetailsClick,
        onModalClose,
    };
};

export default usePeopleList;