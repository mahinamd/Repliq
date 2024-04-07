import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slice'; // Import the addToCart action creator from your slice file

const Products = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the selected product
  };

  return (
    <Grid container spacing={2} >
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.5} key={index}>
          <Card onClick={() => handleAddToCart(product)} className='ml-6'>
            <div className="h-40 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
