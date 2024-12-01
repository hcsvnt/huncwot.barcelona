import type { Access } from 'payload';
import type { AccessArgs } from 'payload';
import type { User } from '@/payload-types';

// eslint-disable-next-line functional/functional-parameters
const anyone: Access = () => true;

// eslint-disable-next-line functional/prefer-immutable-types
type isAuthenticated = (args: AccessArgs<User>) => boolean;

const authenticated: isAuthenticated = ({ req: { user } }) => {
    return Boolean(user);
};

const authenticatedOrPublished: Access = ({ req: { user } }) => {
    if (user) {
        return true;
    }

    return {
        _status: {
            equals: 'published'
        }
    };
};

export default {
    anyone,
    authenticated,
    authenticatedOrPublished
};
