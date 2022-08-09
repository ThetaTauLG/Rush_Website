import { Box, Card, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import InfoNights from '../images/info_nights.jpeg'
import Cookout from '../images/cookout.jpeg'
import Sports from '../images/sports.jpeg'
import CommServ from '../images/comm_serve.jpeg'
import Interview from '../images/interview.jpeg'
import Dinner from '../images/family_dinner.jpeg'

export default function Schedule() {
    return (
        <Container>
            <div id='schedule'></div>
            <Box my={3}>
                <Grid container alignItems='center' justifyContent='center' spacing={1}>
                    <Grid item>
                        <Typography variant='h3'>Schedule</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${InfoNights})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            height: '20vh',
                        }}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Cookout})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                        }}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Sports})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            height: '20vh',
                        }}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${CommServ})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            height: '20vh',
                        }}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Interview})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                        }}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Dinner})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                        }}>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
