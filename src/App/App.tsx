import React, {useState} from "react";


import SearchBox from "../SearchBox/SearchBox";
import {useActions} from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";


const App = () => {
    const [term, setTerm] = useState("");
    const {searchRepositories} = useActions();
    const {data} = useTypedSelector(state => state.repositories);
    

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTerm(e.target.value);
    }

    const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        searchRepositories(term);
        setTerm("");
    }

    const searchBoxProps = {
        onChange,
        onSubmit,
        term
    }

    return (
        <div>
            <h1>Search npm packages</h1>
            <SearchBox {...searchBoxProps} />
            {data.length !== 0  && data.map(term => (<p key={term}>{term}</p>))}
        </div>
        
    );
}

export default App;