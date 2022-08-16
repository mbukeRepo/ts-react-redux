interface RepositoriesState {
    data: any[];
    error: string | null;
    loading: boolean
}

interface Action {
    type: string;
    payload?: any;
}

 const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
    switch(action.type){
        case "search_repositories":
            return {
                loading: true,
                error: null,
                data: []
            }
        case "search_repositories_success":
            return {
                data: action.payload,
                error: null,
                loading: false
            }
        case "search_repositories_error":
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