import {
    USER_ME
} from "@/redux/actions/users";

export default function(state={}, action) {
    switch(action.type){
        case USER_ME:
            return {...state, me: action.user}
        default:
            return state;
    }
}
