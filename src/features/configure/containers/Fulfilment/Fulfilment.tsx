import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Card, Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import imgMiki from '../../../../assets/images/miki_house.jpg';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const Fulfilment: React.FunctionComponent = () => {
	return (
		<Grid container spacing={3}>
			{arr.map(n => (
							<Grid item>
							<Card style={{ width: '200px' }}>
								<CardMedia
									style={{ padding: '5px' }}
									component='img'
									alt='Contemplative Reptile'
									height='60px'
									image={imgMiki}
									title='Contemplative Reptile'
								/>
								<CardActions style={{ justifyContent: 'center' }}>
									<Button size='small' color='primary'>
										Enable
									</Button>
								</CardActions>
							</Card>
						</Grid>
			))}
		</Grid>
	);
};

export default Fulfilment;
