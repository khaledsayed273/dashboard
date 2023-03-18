import { Container } from '@mui/material';
import React, { useState } from 'react'
import EditComponent from '../edit/EditComponent';

function EditServices() {
    const [state, setState] = useState({ date: new Date() });
    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const servicesInputs = [
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


    return (
        <Container>
            <EditComponent
                title={'Update Services'}
                inputs={servicesInputs}
            />
        </Container>
    );
}

export default EditServices
