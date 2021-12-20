import { FC } from 'react';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Modal from 'components/molecules/Modal';

import Container from './SearchBarContainer';
import { useSearchBar } from './useSearchBar';

const SearchBar: FC = () => {
    const {
        age,
        name,
        isModalOpen,
        onSearchButtonClick,
        onModalClose,
        onInputChange,
    } = useSearchBar();

    return (
        <Container>
            <Input
                placeholder="Person name"
                value={ name }
                onChange={ onInputChange }
            />
            <Button onClick={ onSearchButtonClick }>Search</Button>
            {isModalOpen ? (
                <Modal age= {age } name={ name } onClose={ onModalClose } />
            ) : null}
        </Container>
    );
};

export default SearchBar;