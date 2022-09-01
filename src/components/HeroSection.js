import React from 'react';
import { Grid, Paper, Container, Typography, Stack, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { StaticImage } from 'gatsby-plugin-image';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicIcon from '@mui/icons-material/Public';
import PetsIcon from '@mui/icons-material/Pets';
import Crest from '../images/crest.png';

export default function HeroSection() {
    return (
        <Paper sx={{
            height: '90vh',
            position: 'relative',
        }}>

            <StaticImage src='../images/banner.webp' style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', width: '100%', height: '100%', position: 'absolute' }}></div>

            <Container sx={{
                position: 'relative',
                zIndex: 100,
                height: '100%',
            }}>
                <Grid container justifyContent='space-between' alignItems='center' sx={{ height: '100%', width: '100%' }} >
                    <Grid item sm={8}>
                        <Typography variant='h2' component='h1' sx={{ color: 'white' }} gutterBottom>Welcome to the Theta Tau rush website!</Typography>
                        <Typography variant='h5' sx={{ color: 'white' }} gutterBottom>Here you'll find a quick about us, the rush schedule, elected officials for this semester, and ways to contact us with questions.</Typography>
                        <Typography variant='h6' sx={{ color: 'white' }}>Use the golden icons to access our socials and tigerQuest page.</Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction={{ xs: 'row', sm: 'column' }}>
                            <IconButton aria-label='instagram' href='https://www.instagram.com/clemsonthetatau/' target='_blank' color='secondary'>
                                <InstagramIcon sx={{ fontSize: 75 }} />
                            </IconButton>
                            <IconButton aria-label='website' href='https://thetatau-lg.weebly.com/' target='_blank' color='secondary'>
                                <PublicIcon sx={{ fontSize: 75 }} />
                            </IconButton>
                            <IconButton aria-label='tigerQuest' href='https://clemson.campuslabs.com/engage/organization/thetatau' target='_blank' color='secondary'>
                                <PetsIcon sx={{ fontSize: 75 }} />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}
