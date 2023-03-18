import React from 'react'

import {  Grid, styled } from '@mui/material';

import useHttp from 'app/hooks/use-http';
import { Fragment, useEffect } from 'react';

import StatCards from '../../views/dashboard/shared/StatCards';
import TopSellingTable from '../../views/dashboard/shared/TopSellingTable';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));


const Home = () => {

  const tableHead = ['Image', 'Name', 'Revenue', 'Stock Status', 'Action'];
  const productList = [
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
  const { requestFn } = useHttp();

  const getUserApi = 'https://abdjan.everest-ci.com/api/users';
  useEffect(() => {
    const transformData = (data) => {
      console.log(data);
    };
    requestFn(
      {
        url: getUserApi,
      },
      transformData
    );
  }, [requestFn, getUserApi]);
  
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <StatCards />
            <TopSellingTable
              title="top selling products"
              tableHead={tableHead}
              list={productList}
              edit={'/products/editProduct'}
              show={'/products/product1'}
            />
            
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Home;
