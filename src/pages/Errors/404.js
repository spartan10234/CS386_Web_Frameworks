import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

// import ContentContainer from '../../components/ContentContainer/ContentContainer.js';

// import errorImg from './images/satellite-dish.svg';

export default () => (
//    <ContentContainer>
        <div style={{textAlign: 'center'}}>
            {/*<img src={ errorImg } alt="" />*/}
            <h2>Error: Can’t find the page you’re looking for.</h2>
            <Button>
                <Link to='/'>Back to home</Link>
            </Button>
        </div>
//    </ContentContainer>
)