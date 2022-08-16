interface SearchBoxInterface {
    term: string;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: () => void;
}
const SearchBox: React.FC<SearchBoxInterface> = ({term, onSubmit, onChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={onChange} />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBox