import { AppBar, Button, Toolbar, Stack } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'

export default function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <Button href='#home' variant='text' size='large' startIcon={<HomeIcon />} sx={{ color: 'primary.contrastText' }}>Home</Button>
                <Stack
                    direction='row'
                    spacing={1}
                    sx={{
                        marginLeft: 'auto'
                    }}
                >
                    <Button href='#schedule' variant='text' size='large' sx={{ color: 'primary.contrastText' }}>Schedule</Button>
                    <Button variant='text' size='large' sx={{ color: 'primary.contrastText' }}>People</Button>
                    <Button variant='text' size='large' sx={{ color: 'primary.contrastText' }}>Contact Us</Button>
                </Stack>
            </Toolbar>
        </AppBar>

    )
}
