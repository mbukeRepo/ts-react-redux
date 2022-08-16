import {Action} from "../actions";
import {actionType} from "../action-types";
import axios from "axios";
import {Dispatch} from "redux";


export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({type: actionType.SEARCH_REPOSITORIES});
        try {
            const {data} = await axios.get("https://registry.npmjs.org/-/v1/search", {
                params: {
                    text: term
                }
            });
            const names = data.objects.map(res => res.package.name);
            dispatch({
                type: actionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            });
        } catch (error) {
            dispatch({
                type: actionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            });
        }
    }
}