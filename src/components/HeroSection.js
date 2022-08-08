import { Paper } from '@mui/material'
import Banner from '../images/banner.png'
import React from 'react'


export default function HeroSection() {
    return (
        <Paper sx={{
            height: '90vh',
            backgroundImage: `url(${Banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
        </Paper>
    )
}
