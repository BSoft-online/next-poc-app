import { ReactNode, FC } from 'react';
import Modal from 'components/molecules/Modal';
import FeminativeName from 'types/FeminativeName';
import PeopleListContainer from './PeopleListContainer';
import Header from './Header';
import Person from './Person';
import ListWrapper from './ListWrapper';
import getData from './getData';
import usePeopleList from './usePeopleList';

interface Props {
    names: FeminativeName[];
    children?: ReactNode;
};

const PeopleList: FC<Props> = ({ names }) => {
    const {
        age,
        name,
        isModalOpen,
        onSeeDetailsClick,
        onModalClose,
    } = usePeopleList();
    return (
        <PeopleListContainer>
            <Header>Featured People:</Header>
            <ListWrapper>
                { getData(names).map(
                    (value, index): JSX.Element => (
                        <Person
                            key={ index }
                            { ...value }
                            onButtonClick={ onSeeDetailsClick }
                        />
                    )
                ) }
            </ListWrapper>
            { isModalOpen ? (
                <Modal age={ age } name={ name } onClose={ onModalClose } />
            ) : null }
        </PeopleListContainer>
    );
};

export default PeopleList;