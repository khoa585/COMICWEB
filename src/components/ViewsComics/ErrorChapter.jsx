import React, { useState } from 'react';
import Header from '../Header/Header'
import { Container, Row } from 'react-bootstrap'
function ErrorChapter (){
    return (
        <div>
            <Header/>
            <Container>
                <h1>Chapter Không Có</h1>
            </Container>
        </div>
    )
}
export default ErrorChapter ;