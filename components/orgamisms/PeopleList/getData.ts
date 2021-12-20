import { createAvatar } from '@dicebear/avatars';
import * as maleStyles from '@dicebear/avatars-male-sprites';
import * as femaleStyles from '@dicebear/avatars-female-sprites';
import FeminativeName from 'types/FeminativeName';
import Sex from 'types/enums/Sex';

interface NamedAvatar {
    name: string;
    avatar: string;
}

const getData = (names: FeminativeName[]): NamedAvatar[] => {
    return names.map(({ name, sex }) => {
        const styles = sex === Sex.male ? maleStyles : femaleStyles;
        return {
            name,
            avatar: createAvatar(styles, { seed: name }),
        };
    });
};

export default getData;