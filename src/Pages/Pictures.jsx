import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import MainContent from '../Components/MainContent';

// const useStyles = makeStyles((theme) => ({
// }));

export default function Pictures(props) {
    // const classes = useStyles();

    return (
        <MainContent>
            <Container>
            <Box my={2}>Pics go here</Box>
            </Container>
        </MainContent>
    )
}