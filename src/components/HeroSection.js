import { Grid, Paper, Container, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@mui/system'
import React from 'react'

const HeroContainer = styled(Container)({
    position: 'relative',
    zIndex: 100,
    height: '100%',
});

export default function HeroSection() {
    return (
        <Paper sx={{
            height: '90vh',
        }}>

            <StaticImage src='../images/banner3.jpeg' style={{ height: '90vh', position: 'absolute' }} />
            <div style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '100%', position: 'absolute' }}></div>

            <HeroContainer maxWidth='lg'>
                <Grid container justifyContent='space-between' alignItems='center' sx={{ height: '100%' }}>
                    <Grid item>
                        <Typography variant='h3' component='h1'>Theta Tau Rush</Typography>
                    </Grid>
                </Grid>
            </HeroContainer>

        </Paper>
    )
}
