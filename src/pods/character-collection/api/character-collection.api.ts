import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  //return characterCollection;
  return axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => res.data)
    .then((res) => res.results);
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  axios.delete(`http://localhost:3000/characters/${id}`);

  return true;
};
