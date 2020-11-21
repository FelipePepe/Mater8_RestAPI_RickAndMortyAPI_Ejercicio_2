import { Character, Comment } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getComment = async (id: string): Promise<Comment> => {
  return axios
    .get(`http://localhost:3000/api/characters/${id}`)
    .then((res) => res.data)
    .catch(() => []);
};

export const saveComment = async (comment: Comment): Promise<boolean> => {
  let res;
  let err: boolean = false;
  if (comment.id) {
    res = axios
      .put(`http://localhost:3000/api/characters/${comment.id}`, comment)
      .catch(() => {
        err = true;
        return [];
      });
  } else {
    res = axios
      .post('http://localhost:3000/api/characters', comment)
      .catch(() => {
        err = true;
        return [];
      });
  }

  return !err;
};
