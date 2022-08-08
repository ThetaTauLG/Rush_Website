import { AppBar, Button, Toolbar, Stack, Box } from '@mui/material'
import React from 'react'

export default function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <Button variant='text' size='large' sx={{ color: 'primary.contrastText' }}>Home</Button>
                <Stack
                    direction='row'
                    spacing={1}
                    sx={{
                        marginLeft: 'auto'
                    }}
                >
                    <Button variant='text' size='large' sx={{ color: 'primary.contrastText' }}>Schedule</Button>
                    <Button variant='text' size='large' sx={{ color: 'primary.contrastText' }}>People</Button>
                    <Button variant='text' size='large' sx={{ color: 'primary.contrastText' }}>Contact Us</Button>
                </Stack>
            </Toolbar>
        </AppBar>

    )
}
