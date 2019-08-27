import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

export default () => (
        <div style={{textAlign: 'center'}}>
            <h2>Error: Not authorized.</h2>
            <Button>
                <Link to='/'>Back to home</Link>
            </Button>
        </div>
)