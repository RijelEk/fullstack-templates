import { combineReducers } from 'redux';
import user from '@/redux/reducers/user/user_reducer';

const rootReducer = combineReducers({
    user
});

export default rootReducer;
