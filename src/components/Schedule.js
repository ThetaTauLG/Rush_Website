import { Box, Card, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import InfoNights from '../images/info_nights.webp'
import Cookout from '../images/cookout.webp'
import Sports from '../images/sports.webp'
import CommServ from '../images/comm_serve.webp'
import Interview from '../images/interview.webp'
import Dinner from '../images/family_dinner.webp'

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
                            <Grid container justifyContent='left' alignItems='center' sx={{
                                height: '100%',
                            }}>
                                <Grid item xs={5} sx={{
                                    height: '100%',
                                }}>
                                    <Card sx={{
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'rgba(139,0,0,0.55)',
                                    }}>
                                        <Box m={3}>
                                            <Stack alignContent='center' direction='column'>
                                                <Typography align='left' variant='h3' sx={{ color: 'primary.contrastText' }}>Dates</Typography>
                                                <Typography align='left' variant='h4' sx={{ color: 'primary.contrastText' }}>Event</Typography>
                                                <Typography align='left' variant='subtitle1' sx={{ color: 'primary.contrastText' }}>snippet of event</Typography>
                                            </Stack>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Cookout})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                        }}>
                            <Grid container justifyContent='right' alignItems='center' sx={{
                                height: '100%',
                            }}>
                                <Grid item xs={5} sx={{
                                    height: '100%',
                                }}>
                                    <Card sx={{
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'rgba(139,0,0,0.55)',
                                    }}>
                                        <Box m={3}>
                                            <Stack alignContent='center' direction='column'>
                                                <Typography align='right' variant='h3' sx={{ color: 'primary.contrastText' }}>Dates</Typography>
                                                <Typography align='right' variant='h4' sx={{ color: 'primary.contrastText' }}>Event</Typography>
                                                <Typography align='right' variant='subtitle1' sx={{ color: 'primary.contrastText' }}>snippet of event</Typography>
                                            </Stack>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Sports})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            height: '20vh',
                        }}>
                            <Grid container justifyContent='left' alignItems='center' sx={{
                                height: '100%',
                            }}>
                                <Grid item xs={5} sx={{
                                    height: '100%',
                                }}>
                                    <Card sx={{
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'rgba(139,0,0,0.55)',
                                    }}>
                                        <Box m={3}>
                                            <Stack alignContent='center' direction='column'>
                                                <Typography align='left' variant='h3' sx={{ color: 'primary.contrastText' }}>Dates</Typography>
                                                <Typography align='left' variant='h4' sx={{ color: 'primary.contrastText' }}>Event</Typography>
                                                <Typography align='left' variant='subtitle1' sx={{ color: 'primary.contrastText' }}>snippet of event</Typography>
                                            </Stack>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${CommServ})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            height: '20vh',
                        }}>
                            <Grid container justifyContent='right' alignItems='center' sx={{
                                height: '100%',
                            }}>
                                <Grid item xs={5} sx={{
                                    height: '100%',
                                }}>
                                    <Card sx={{
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'rgba(139,0,0,0.55)',
                                    }}>
                                        <Box m={3}>
                                            <Stack alignContent='center' direction='column'>
                                                <Typography align='right' variant='h3' sx={{ color: 'primary.contrastText' }}>Dates</Typography>
                                                <Typography align='right' variant='h4' sx={{ color: 'primary.contrastText' }}>Event</Typography>
                                                <Typography align='right' variant='subtitle1' sx={{ color: 'primary.contrastText' }}>snippet of event</Typography>
                                            </Stack>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Interview})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                        }}>
                            <Grid container justifyContent='left' alignItems='center' sx={{
                                height: '100%',
                            }}>
                                <Grid item xs={5} sx={{
                                    height: '100%',
                                }}>
                                    <Card sx={{
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'rgba(139,0,0,0.55)',
                                    }}>
                                        <Box m={3}>
                                            <Stack alignContent='center' direction='column'>
                                                <Typography align='left' variant='h3' sx={{ color: 'primary.contrastText' }}>Dates</Typography>
                                                <Typography align='left' variant='h4' sx={{ color: 'primary.contrastText' }}>Event</Typography>
                                                <Typography align='left' variant='subtitle1' sx={{ color: 'primary.contrastText' }}>snippet of event</Typography>
                                            </Stack>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            backgroundImage: `url(${Dinner})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                        }}>
                            <Grid container justifyContent='right' alignItems='center' sx={{
                                height: '100%',
                            }}>
                                <Grid item xs={5} sx={{
                                    height: '100%',
                                }}>
                                    <Card sx={{
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'rgba(139,0,0,0.55)',
                                    }}>
                                        <Box m={3}>
                                            <Stack alignContent='center' direction='column'>
                                                <Typography align='right' variant='h3' sx={{ color: 'primary.contrastText' }}>Dates</Typography>
                                                <Typography align='right' variant='h4' sx={{ color: 'primary.contrastText' }}>Event</Typography>
                                                <Typography align='right' variant='subtitle1' sx={{ color: 'primary.contrastText' }}>snippet of event</Typography>
                                            </Stack>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
