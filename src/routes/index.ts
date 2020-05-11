import {ServerRoute} from "hapi";
import { testRoutes } from "./testRoutes";

export const routes: Array<ServerRoute> = [
    ...testRoutes
];