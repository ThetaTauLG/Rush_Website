import { Container, Typography, Box, Grid } from '@mui/material';
import * as React from 'react';

export default function About() {

    return (
        <Container>
            <Box my={2}>
                <Grid container alignItems='center' justifyContent='center' spacing={2}>
                    <Grid item>
                        <Typography variant='h3'>About Us</Typography>
                    </Grid>
                    <Grid item>
                        <Typography varaint='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus, maiores expedita possimus fugit molestias minus odit natus totam voluptatibus? Sunt ipsam eos dolore molestiae dolorum dignissimos incidunt quis libero?</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}
