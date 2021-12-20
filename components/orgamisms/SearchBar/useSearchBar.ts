import { useState, MouseEventHandler } from 'react';
import useGetAge from 'api/hooks/useGetAge';

interface Result {
    age: number | undefined;
    name: string;
    isModalOpen: boolean;
    onSearchButtonClick: MouseEventHandler<HTMLButtonElement>;
    onModalClose: MouseEventHandler<HTMLButtonElement>;
    onInputChange: Function;
};

export const useSearchBar = (): Result => {
    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { age } = useGetAge(name, {
        enabled: isModalOpen
    });

    const onSearchButtonClick = (): void => {
        setIsModalOpen(true);
    };

    const onModalClose = (): void => {
        setIsModalOpen(false);
        setName('');
    };

    const onInputChange = (inputName: string): void => {
        setName(inputName);
    };

    return {
        age,
        name,
        isModalOpen,
        onSearchButtonClick,
        onModalClose,
        onInputChange,
    };
};