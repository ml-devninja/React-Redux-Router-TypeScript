import {userInfo} from "@components/UserProfile";

import users from "../../mocks/users";

export interface UsersStateDefinition {
    items: userInfo[];
}

export const initialUserState: UsersStateDefinition = users;