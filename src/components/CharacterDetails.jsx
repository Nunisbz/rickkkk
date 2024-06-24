import React from 'react';

const CharacterDetails = ({ character, onClose }) => {
  return (
    <div className="character-details">
      <button onClick={onClose}>Fechar</button>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Specie: {character.species}</p>
      <p>Gênero: {character.gender}</p>
      <p>Origem: {character.origin.name}</p>
      <p>Localização: {character.location.name}</p>
    </div>
  );
};

export default CharacterDetails;
