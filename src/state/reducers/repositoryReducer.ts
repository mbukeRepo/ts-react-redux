import {Action} from "../actions";
import {actionType} from "../action-types";

interface RepositoriesState {
    data: any[];
    error: string | null;
    loading: boolean
}


const reducer = (
    state: RepositoriesState, 
    action:Action
    ): RepositoriesState => {
    switch(action.type){
        case actionType.SEARCH_REPOSITORIES:
            return {
                loading: true,
                error: null,
                data: []
            }
        case actionType.SEARCH_REPOSITORIES_SUCCESS:
            return {
                data: action.payload,
                error: null,
                loading: false
            }
        case actionType.SEARCH_REPOSITORIES_ERROR:
            return {
                data: [],
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
};
export default reducer;