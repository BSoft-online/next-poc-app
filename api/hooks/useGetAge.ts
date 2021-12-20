import { useQuery, QueryObserverOptions } from 'react-query';
import Person from 'types/Person';
import PersonApi from '../services/PersonApi';

interface Result {
    age: number | undefined;
    isLoading: boolean;
}

const useGetAge = (
    name: string,
    options: QueryObserverOptions<Person, Error> = {},
): Result => {
    const { data, isLoading, error } = useQuery<Person, Error>(
        ['person', name],
        () => PersonApi.getSingle(name),
        options
    );

    if (error) throw error;

    return {
        age: data?.age,
        isLoading: isLoading
    };
}

export default useGetAge;