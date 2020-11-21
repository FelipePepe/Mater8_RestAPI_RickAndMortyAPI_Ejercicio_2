import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  episode: [...character.episode],
  url: character.url,
  created: character.created,
});

export const mapCommentFromApiToVm = (
  comment: apiModel.Comment
): viewModel.Comment => ({
  ...comment,
  id: comment.id,
  comment: comment.comment,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: {
      name: character.origin.name,
      url: character.origin.url,
    },
    location: {
      name: character.location.name,
      url: character.location.url,
    },
    image: character.image,
    episode: [...character.episode],
    url: character.url,
    created: character.created,
  } as unknown) as apiModel.Character);

export const mapCommentFromVmToApi = (
  comment: viewModel.Comment
): apiModel.Comment =>
  (({
    ...comment,
    id: comment.id,
    comment: comment.comment,
  } as unknown) as apiModel.Comment);
