import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import {
  createEmptyCharacter,
  Character,
  Comment,
  createEmptyComment,
} from './character.vm';
import {
  mapCommentFromApiToVm,
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
  mapCommentFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );

  const [comment, setComment] = React.useState<Comment>(createEmptyComment());

  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    const apiComment = await api.getComment(id);

    console.log(apiComment);

    setComment(mapCommentFromApiToVm(apiComment));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSaveComment = async (comment: Comment) => {
    const apiComment = mapCommentFromVmToApi(comment);
    const success = await api.saveComment(apiComment);

    console.log(success);

    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return (
    <CharacterComponent
      character={character}
      onSaveComment={handleSaveComment}
      comment={comment}
    />
  );
};
