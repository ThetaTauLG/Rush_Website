import { Container, Stack, Typography, Box, Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'

export default function Contact() {
    return (
        <Container>
            <Box m={3}>
                <Typography align='center' variant='h3'>Contact Us</Typography>
            </Box>
            <Typography variant='h5' align='left' gutterBottom>Meet Us Before Rush</Typography>
            <Box mx={3}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
                    <Card raised={true} sx={{
                        width: {
                            xs: '100%',
                            md: '33%'
                        },
                        height: '30vh',
                        backgroundColor: 'primary.dark'
                    }}>
                        <CardContent>
                            <Typography variant='h3' align='left' color='primary.contrastText'>Tiger Prowl</Typography>
                            <Typography variant='h5' align='left' color='primary.contrastText' gutterBottom>August 23rd @ 5pm</Typography>
                            <Typography variant='body1' align='left' color='primary.contrastText'>We will be having a raffle for people who come by our table and sign up for the mailing list!</Typography>
                        </CardContent>
                    </Card>
                    <Card raised={true} sx={{
                        width: {
                            xs: '100%',
                            md: '33%'
                        },
                        height: '30vh',
                        backgroundColor: 'primary.dark'
                    }}>
                        <CardContent>
                            <Typography variant='h3' align='left' color='primary.contrastText'>Tabling in Watt</Typography>
                            <Typography variant='h5' align='left' color='primary.contrastText' gutterBottom>Join GroupMe for details</Typography>
                            <Typography variant='body1' align='left' color='primary.contrastText'>Come meet us in the Watt Innovation Center lobby!</Typography>
                        </CardContent>
                    </Card>
                    <Card raised={true} sx={{
                        width: {
                            xs: '100%',
                            md: '33%'
                        },
                        height: '30vh',
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'secondary.main',
                        }
                    }}>
                        <CardActionArea href='https://app.groupme.com/join_group/88320776/zLlLAPVu' target='_blank' sx={{ height: '100%', width: '100%' }}>
                            <CardContent>
                                <Typography variant='h3' align='left' color='primary.contrastText'>Rush GroupMe</Typography>
                                <Typography variant='h5' align='left' color='primary.contrastText' gutterBottom>Click to join...</Typography>
                                <Typography variant='body1' align='left' color='primary.contrastText'>Quickest form of contact from us to you. Join to stay up to date with any rush changes.</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>
            </Box>
            <Box mt={3} mb={1}>
                <Typography align='left' variant='h5'>Prefer to Email Us Directly?</Typography>
            </Box>
            <Box mx={3}>
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
            </Box>
            <Box sx={{ height: '30vh' }} />
        </Container>
    )
}
