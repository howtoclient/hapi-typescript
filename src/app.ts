import * as Hapi from '@hapi/hapi';
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import * as HapiSwagger from "hapi-swagger";
import {swaggerOptions} from './swagger/swaggerOptions';
import {routes} from "./routes";

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

(async (): Promise<void> => {
    // create server
    const server: Hapi.Server = new Hapi.Server( {
        host,
        port,
        debug: { request: ['error'] },
        routes: {
            response: {
                modify: true
            }
        }
    });
    // add swagger UI plugin
    await server.register([Inert, Vision, {plugin: HapiSwagger, options: swaggerOptions}]);
    // register routes
    server.route(routes);
    // add basic logger
    server.events.on('response',  ({
                                       info, method, path, response }: Hapi.Request) => {
        console.info(`[${info.remoteAddress}] ${method.toUpperCase()}: ${path} --> ${response.statusCode}`);
    });
    // start server
    await server.start();
    console.info('Server running at:', server.info.uri);
})();

