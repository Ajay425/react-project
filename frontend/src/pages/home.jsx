import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // always connect to a state. Everytime state changes it re renders the component

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Home Alone", release_date: "2010" },
        { id: 3, title: "Toy Story 3", release_date: "2012" },
        { id: 4, title: "Juan Sucks", release_date: "2026" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("-----------")
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for Movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value) } />
                <button type="submit" className="search_button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
