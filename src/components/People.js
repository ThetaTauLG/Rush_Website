import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Exec from './Exec';
import RushChairs from './RushChairs';

export default function People() {
    return (
        <Container>
            <Grid container justifyContent='center' alignContent='center' spacing={2}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3'>People</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align='left' variant='h5'>Rush Chairs</Typography>
                </Grid>
                <Grid item xs={12}>
                    <RushChairs />
                </Grid>
                <Grid item xs={12}>
                    <Typography align='left' variant='h5'>Executive Council</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Exec />
                </Grid>
            </Grid>
        </Container >
    )
}
