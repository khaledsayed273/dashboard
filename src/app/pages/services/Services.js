import { Container } from '@mui/material';
import TopSellingTable from 'app/views/dashboard/shared/TopSellingTable';
import React from 'react';

const Services = () => {

  const tableHead = ['Image', 'Name', 'Revenue', 'Stock Status', 'Action'];
  const servicesList = [
    {
      imgUrl: '/assets/images/products/headphone-2.jpg',
      name: 'earphone1',
      price: 100,
      available: 15,
    },
    {
      imgUrl: '/assets/images/products/headphone-3.jpg',
      name: 'earphone2',
      price: 1500,
      available: 30,
    },
    {
      imgUrl: '/assets/images/products/iphone-2.jpg',
      name: 'iPhone x1',
      price: 1900,
      available: 35,
    },
    {
      imgUrl: '/assets/images/products/iphone-1.jpg',
      name: 'iPhone x2',
      price: 100,
      available: 0,
    },
    {
      imgUrl: '/assets/images/products/headphone-3.jpg',
      name: 'Head phone',
      price: 1190,
      available: 5,
    },
  ];
  return (
    <Container sx={{ mt: 2 }} fixed>
      <TopSellingTable
        title="Services"
        tableHead={tableHead}
        list={servicesList}
        edit={'/services/editservices'}
        show={'/services/services1'}
      />
    </Container>
  )
};

export default Services;
