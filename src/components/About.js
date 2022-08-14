import { Container, Typography, Box, Grid } from '@mui/material';
import * as React from 'react';

export default function About() {

    return (
        <Container>
            <Box my={2}>
                <Grid container alignItems='center' justifyContent='center' spacing={2}>
                    <Grid item>
                        <Typography variant='h3'>About Us</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='center' variant='h6' color='primary.main'>Important Note:</Typography>
                        <Box mx={3} mb={3}>
                            <Typography align='center' varaint='body2' color='primary.main' gutterBottom>
                                Theta Tau is a co-ed fraternity. Some verbiage (e.g. fraternity, fraternal, brotherhood) may indicate a traditional fraternity, but should be intepretted as inclusive of all genders.
                            </Typography>
                        </Box>
                        <Typography varaint='body1' gutterBottom>
                            Theta Tau is the oldest, largest, and foremost fraternity for engineers. Since its founding at the University of Minnesota in 1904, over 40,000 have been initiated over the years. With emphasis on quality and a strong fraternal bond, the Fraternity has chapters only at ABET accredited schools.
                        </Typography>
                        <Typography variant='h5'>Purpose</Typography>
                        <Box mx={3}>
                            <Typography varaint='body1' gutterBottom>
                                The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship.
                            </Typography>
                        </Box>
                        <Typography variant='h5'>Core Values</Typography>
                        <Box mx={3}>
                            <Typography varaint='body1'>- Honest & Ethical</Typography>
                            <Typography varaint='body1'>- Dependable & Trustworthy</Typography>
                            <Typography varaint='body1'>- Respectful of Ourselves and Each Other</Typography>
                            <Typography varaint='body1'>- Generous of Time, Talent, & Treasure for Each Other, Theta Tau, and our Community</Typography>
                            <Typography varaint='body1' gutterBottom>- Proud that we are the oldest, largest, and foremost Fraternity for Engineers</Typography>
                        </Box>
                        <Typography variant='h5'>Guiding Principles</Typography>
                        <Box mx={3}>
                            <Typography varaint='body1' >- Culture of brotherhood, lifelong relationships, and connection</Typography>
                            <Typography varaint='body1' >- Mutual respect and professionalism</Typography>
                            <Typography varaint='body1' >- Balance of social, service, and professional activities</Typography>
                            <Typography varaint='body1' gutterBottom>- Diversity of engineering disciplines and demographics</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}
