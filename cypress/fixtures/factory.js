import faker from 'faker'

faker.locale = 'pt_BR';

export class Factory {
    static userData(type) {
        switch (type) {
            case 'senha invalida':
                return {
                    "email": "wrichaard@hotmail.com",
                    "password": faker.internet.password()
                }
            case 'email em branco':
                return {
                    "email": "",
                    "password": faker.internet.password()
                }
            case 'senha em branco':
                return {
                    "email": faker.internet.email(),
                    "password": ""
                }
            default:
                return { notfound: "The user type was not found, please verify!" }
        }
    }
}