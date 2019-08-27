import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

// import ContentContainer from '../../components/ContentContainer/ContentContainer.js';

// import errorImg from './images/satellite-dish.svg';

export default (props) => (
//    <ContentContainer>
        <div style={{textAlign: 'center'}}>
            {/*<img src={ errorImg } alt="" />*/}
            <h2>Error: There is no representation of the requested page for the currently logged in user.</h2>
            <Button onClick={() => props.logout()}>
                <Link to='/'>Back to home</Link>
            </Button>
        </div>
//    </ContentContainer>
)