import React, { useState } from 'react';

const CharacterSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch({ name: searchTerm, status, species });
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search characters..." 
        value={searchTerm} 
        onChange={handleInputChange} 
      />
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">Status</option>
        <option value="alive">Vivo</option>
        <option value="dead">Morto</option>
        <option value="unknown">Não se sabe</option>
      </select>
      <select onChange={(e) => setSpecies(e.target.value)}>
        <option value="">Espécie</option>
        <option value="human">Humano</option>
        <option value="alien">Alien</option>
      </select>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default CharacterSearch;
