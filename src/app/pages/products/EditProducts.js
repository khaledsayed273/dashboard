import { Container } from '@mui/system';
import React, { useState } from 'react';
import EditComponent from '../edit/EditComponent';

function EditProducts() {

  const [state, setState] = useState({ date: new Date() });
  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const productInputs = [
    {
      label: 'Image',
      name: 'image',
      type: 'file',
      onchange: { handleChange },
    },
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      onchange: { handleChange },
    },
    {
      label: 'Revenue',
      name: 'revenue',
      type: 'text',
      onchange: { handleChange },
    },
    {
      label: 'Stock Status',
      name: 'stockStatus',
      type: 'text',
      onchange: { handleChange },
    },
  ];
  const editProductHandler = (e) => {
    console.log(e);
  };
  return (
    <Container>
      <EditComponent
        title={'Update Product'}
        inputs={productInputs}
        editHandler={editProductHandler}
      />
    </Container>
  );
}

export default EditProducts;
