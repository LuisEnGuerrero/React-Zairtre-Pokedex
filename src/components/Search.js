import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState('');
    const [redirect, setRedirect] = useState(false);
    const searchRef = useRef();

    const redirectToSearch = (e) => {
        e.preventDefault();
        const query = searchRef.current.value.trim();
        if (query) {
            setSearch(query);
            setRedirect(true);
        }
    };

    if (redirect) {
        return <Navigate to={`/search/${search}`} />;
    }

    return (
        <form onSubmit={redirectToSearch}>
            <input type="text" name="search" ref={searchRef} />
            <input type="submit" name="submit" value="Buscar" className="btn btn-success" />
        </form>
    );
};

export default Search;