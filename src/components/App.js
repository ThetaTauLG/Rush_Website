import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './Navbar';

function ElevateBar(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevateBar.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#8B0000'
        },
        secondary: {
            main: '#FFCC33'
        },
        background: {
            default: '#EDEAB5'
        }
    }
})

export default function App(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <ElevateBar {...props}>
                    <Navbar />
                </ElevateBar>
                <Container>
                    <Box>
                        <Typography variant='h1'>Words</Typography>
                    </Box>
                </Container>
            </Container>
        </ThemeProvider>

    );
}
