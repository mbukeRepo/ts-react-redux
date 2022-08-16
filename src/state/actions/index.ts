import {actionType} from "../action-types";

interface SearchRepositoriesAction {
    type: actionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction{
    type: actionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction{
    type: actionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =   SearchRepositoriesAction 
| SearchRepositoriesErrorAction 
| SearchRepositoriesSuccessAction;

