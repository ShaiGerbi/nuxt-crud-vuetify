import { Model } from '@vuex-orm/core';

export default class User extends Model {

    static entity = 'users';

    static fields () {
        return {
            id: this.uid(),
            name: this.string(''),
            username: this.string(''),
            website: this.string(''),
            email: this.string(''),
            phone: this.string(''),
        };
    };

    static apiConfig = {
        actions: {
            fetchAll() {
                return this.get('users');
            },
        },
    };

};
