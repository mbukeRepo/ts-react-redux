interface RepositoriesState {
    data: any[];
    error: string | null;
    loading: boolean
}

interface SearchRepositoriesAction {
    type: "search_repositories"
}

interface SearchRepositoriesSuccessAction{
    type: "search_repositories_success";
    payload: string[];
}

interface SearchRepositoriesErrorAction{
    type: "search_repositories_error";
    payload: string;
}

type Action =   SearchRepositoriesAction 
| SearchRepositoriesErrorAction 
| SearchRepositoriesSuccessAction;

enum actionType  {
    SEARCH_REPOSITORIES = "search_repositories",
    SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
    SEARCH_REPOSITORIES_ERROR = "search_repositories_error"
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