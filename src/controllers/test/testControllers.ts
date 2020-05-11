import * as Hapi from 'hapi';
import {user} from "./testModels";

export const postEndpoint: user = (request: Hapi.Request/*, h: Hapi.ResponseToolkit*/): user => {
    return {
        name: request.method,
        phoneNumber: 11,
        addresses: {
            endDate :'12',
            postCode: '123',
            startDate: '123',
        }
    };
};