import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        paddingBottom: 56
    }
});

export default function MainContent(props) {
    const {children} = props
    const classes = useStyles();

    return (
        <div className={classes.root}>{children}</div>
    );
}