import { Container, Stack, Typography, Box, Card, Hidden, CardActionArea, CardContent } from '@mui/material'
import React from 'react'

export default function Contact() {
    return (
        <Container>
            <Box m={3}>
                <Typography align='center' variant='h3'>Contact Us</Typography>
            </Box>
            <Typography variant='h4' align='left' gutterBottom>Meet Us Before Rush</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
                <Card raised={true} sx={{
                    width: {
                        xs: '100%',
                        md: '33%'
                    },
                    height: '20vh',
                    backgroundColor: 'primary.dark'
                }}>
                    <CardContent>
                        <Typography variant='h3' align='left' color='primary.contrastText'>Tiger Prowl</Typography>
                        <Typography variant='h5' align='left' color='primary.contrastText' gutterBottom>August 23rd @ 5pm</Typography>
                    </CardContent>
                </Card>
                <Card raised={true} sx={{
                    width: {
                        xs: '100%',
                        md: '33%'
                    },
                    height: '20vh',
                    backgroundColor: 'primary.dark'
                }}>
                    <CardContent>
                        <Typography variant='h3' align='left' color='primary.contrastText'>Tabling in Watt</Typography>
                        <Typography variant='h5' align='left' color='primary.contrastText' gutterBottom>Join GroupMe for details</Typography>
                    </CardContent>
                </Card>
                <Card raised={true} sx={{
                    width: {
                        xs: '100%',
                        md: '33%'
                    },
                    height: '20vh',
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'secondary.main',
                    }
                }}>
                    <CardActionArea href='https://app.groupme.com/join_group/88320776/zLlLAPVu' target='_blank' sx={{ height: '100%', width: '100%' }}>
                        <CardContent>
                            <Typography variant='h3' align='left' color='primary.contrastText'>Rush GroupMe</Typography>
                            <Typography variant='h5' align='left' color='primary.contrastText' gutterBottom>Click to join...</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>
            <Box mt={3} mb={1}>
                <Typography align='left' variant='h4'>Prefer to Email Us Directly?</Typography>
            </Box>
            <Card raised={true} sx={{
                width: '100%',
                height: {
                    xs: '30vh',
                    sm: '20vh',
                    md: '15vh',
                },
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'secondary.main',
                }
            }}>
                <CardActionArea href='mailto:clemson.thetatau@gmail.com' sx={{ height: '100%', width: '100%' }}>
                    <CardContent>
                        <Typography variant='h3' align='left' color='primary.contrastText'>Click here to send us an email!</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Box sx={{ height: '30vh' }} />
        </Container>
    )
}
