import { AppBar, Button, Grid, Toolbar, Stack, Divider, Box } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'

export default function Navbar() {
    return (
        <AppBar style={{ backgroundColor: 'transparent' }}>
            <Toolbar>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Button variant='contained'>Home</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            direction='row'
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <Button variant='text'>Schedule</Button>
                            <Button variant='text'>People</Button>
                            <Button variant='Contained' sx={{ backgroundColor: 'primary.main' }}>Contact Us</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
