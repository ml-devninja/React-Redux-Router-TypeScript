
import {RootState} from "./store/state";

declare global {
    interface KeyValueMap<T = any> {
        [key: string]: T;
    }

    interface Window {
        __WILL_NOT_EXIST__: RootState;
        __REDUX_DEVTOOLS_EXTENSION__: (...args: any[]) => any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (...args: any[]) => any;
    }
}
