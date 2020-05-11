import {ServerRoute} from "hapi";
import {postEndpoint, userAddressModel, userModel} from '../controllers/test'

export const testRoutes: Array<ServerRoute> = [
    {
        method: "POST",
        path: '/test',
        options: {
            id: 'testAction',
            description: 'Demo post endpoint',
            notes: 'returns user data',
            tags: ['api'],
            handler: postEndpoint,
            validate:{
                payload: userAddressModel as any
            },
            response:{
                schema: userModel as any
            }
        }
    },
];