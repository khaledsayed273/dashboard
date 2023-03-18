import { Container } from '@mui/system';
import React, { useState } from 'react';
import EditComponent from '../edit/EditComponent';

function EditCategory() {

  const [state, setState] = useState({ date: new Date() });
  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const categoryInputs = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'name',
      onchange: { handleChange },
    },
    {
      label: 'Type',
      name: 'type',
      type: 'text',
      placeholder: 'type',
      onchange: { handleChange },
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textArea',
      placeholder: 'description',
      onchange: { handleChange },
    },
  ];


  return (
    <Container>
      <EditComponent
        title={'Update Category'}
        inputs={categoryInputs}
      />
    </Container>
  );
}

export default EditCategory;
