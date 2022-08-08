import { Grid, Paper, Container, Typography, Stack, IconButton } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Instagram } from '@mui/icons-material'

export default function HeroSection() {
    return (
        <Paper sx={{
            height: '90vh',
        }}>

            <StaticImage src='../images/banner3.jpeg' style={{ height: '90vh', position: 'absolute' }} />
            <div style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '100%', position: 'absolute' }}></div>

            <Container maxWidth='lg' sx={{
                position: 'relative',
                zIndex: 100,
                height: '100%',
            }}>
                <Grid container justifyContent='space-between' alignItems='center' sx={{ height: '100%' }}>
                    <Grid item>
                        <Typography variant='h3' component='h1' sx={{ color: 'white' }}>Theta Tau Rush</Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction='column'>
                            <IconButton color='white' size='large'>
                                <Instagram />
                            </IconButton>
                            <IconButton color='white' size='large'>
                                <Instagram />
                            </IconButton>
                            <IconButton color='white' size='large'>
                                <Instagram />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

        </Paper>
    )
}
