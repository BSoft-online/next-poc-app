import Person from 'types/Person';

export default class PersonApi {
    public static async getSingle(name: string): Promise<Person> {
        const response = await fetch(`https://api.agify.io/?name=${name}`, {
            method: 'GET',
        });
        return response.json();
    }

    public static async getMultiple(names: string[]): Promise<Person[]> {
        const response = await fetch(encodeURI(`https://api.agify.io/?${
            names.reduce((pv, name, index) =>
                index + 1 >= names.length
                    ? `${pv}name[]=${name}`
                    : `${pv}name[]=${name}&`,
            ''
        )}`), { method: 'GET' });
        return response.json();
    }
}
