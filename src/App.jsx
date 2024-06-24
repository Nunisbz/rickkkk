import React, { useState } from 'react';
import CharacterSearch from './components/CharacterSearch';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacters = ({ name, status, species }, page = 1) => {
    setLoading(true);
    let url = `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`;
    if (status) url += `&status=${status}`;
    if (species) url += `&species=${species}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results || []);
        setTotalPages(data.info.pages);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchCharacters(filters, newPage);
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseDetails = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="container">
      <CharacterSearch onSearch={(filters) => { setFilters(filters); fetchCharacters(filters); }} />
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      {!loading && !error && (
        <>
          <CharacterList characters={characters} onCharacterClick={handleCharacterClick} />
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
      {selectedCharacter && (
        <CharacterDetails character={selectedCharacter} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default App;
