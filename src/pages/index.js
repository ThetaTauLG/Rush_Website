import React from 'react';
import App from '../components/App'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Helmet } from 'react-helmet';


export default function Index() {
    return (
        <div>
            <Helmet>
                <title>Theta Tau Rush</title>
                <meta name='description' content="Clemson University's chapter of Theta Tau, Lamba Gamma's, rush info, schedule and contacts." />
            </Helmet>
            <App />
        </div>

    );
}