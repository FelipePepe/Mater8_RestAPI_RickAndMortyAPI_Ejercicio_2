import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character, Comment } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  comment: Comment;
  onSaveComment: (comment: Comment) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, comment, onSaveComment } = props;

  return (
    <div>
      <div className={classes.root}>
        <img src={character.image} className={classes.image} />
        <TextField
          value={character.name}
          label="Name"
          className={classes.textfields}
        />
        <TextField
          value={character.status}
          label="Status"
          className={classes.textfields}
        />
        <TextField
          value={character.species}
          label="Species"
          className={classes.textfields}
        />
        <TextField
          value={character.type}
          label="Type"
          className={classes.textfields}
        />
        <TextField
          value={character.gender}
          label="Gender"
          className={classes.textfields}
        />
        <TextField
          value={character.origin.name}
          label="Origin"
          className={classes.textfields}
        />
        <TextField
          value={character.location.name}
          label="Location"
          className={classes.textfields}
        />
        <TextField
          value={character.created}
          label="Created"
          className={classes.textfields}
        />
      </div>
      <Formik
        onSubmit={onSaveComment}
        initialValues={comment}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.form}>
            <TextFieldComponent name="comment" label="Comment" multiline />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
