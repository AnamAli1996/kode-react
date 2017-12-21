import {userLoggedIn} from "./auth";
import api from "../api"


export const signup = data => dispatch =>
    api.user.register(data).then(user => {
        dispatch(userLoggedIn(user));
    });