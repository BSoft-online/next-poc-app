import { QueryClient } from 'react-query';
import Person from 'types/Person';
import PersonApi from './services/PersonApi';

const fetchMultipleAges = async (names: string[], queryClient: QueryClient): Promise<void> => {
    const people = await queryClient.fetchQuery<Person[], Error>(
        'person',
        () => PersonApi.getMultiple(names)
    );

    if (people) {
        people.map((person) => {
            queryClient.setQueryData(['person', person.name], person);
        });
    }
}

export default fetchMultipleAges;