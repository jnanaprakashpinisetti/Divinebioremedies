import React, {useEffect} from 'react';

import Carousal from '../Carousal';
import Card from '../Card';
import Choose from '../Choose';
import HowToProcess from '../HowToProcess';
import SendMessage from '../SendMessage';
import EnquiryForm from '../EnquiryForm';
import ReactGA from 'react-ga';
import Watsapp from '../Watsapp';
import { Helmet } from 'react-helmet';

const Home = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <>
        <Helmet>
            <title>Divine Bio Remedies | www.divinebioremedies.com</title>
            <meta name='' content=''/>
        </Helmet>
        <Watsapp/>
            <Carousal />
            <Card />
            <Choose />
            {/* <HowToProcess /> */}
            {/* <SendMessage /> */}
            <EnquiryForm />

        </>
    );
}

export default Home;
