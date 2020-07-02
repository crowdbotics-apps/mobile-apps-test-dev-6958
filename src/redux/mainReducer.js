import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth47576Reducer from '../features/EmailAuth47576/redux/reducers';
import EmailAuth57575Reducer from '../features/EmailAuth57575/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth47576: EmailAuth47576Reducer,
EmailAuth57575: EmailAuth57575Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});