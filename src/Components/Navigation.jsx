import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CharacterIcon from '@material-ui/icons/DescriptionOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PicturesIcon from '@material-ui/icons/Instagram';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    background: {
        backgroundColor: theme.palette.primary.main
    },
    foreground: {
        color: "silver",
        "&.Mui-selected": {
            color: "white"
        }
    }
}));

export default function Navigation() {
    const classes = useStyles();
    // const [value, setValue] = React.useState(1);
    let navigate = useNavigate();

    const handleNavClick = (page) => {
        // setValue(page);
        switch (page) {
            case 0:
                //window.location.assign("/character")
                navigate(`/character`);
                break;
            case 1:
                //window.location.assign("/")
                navigate(`/`);
                break;
            case 2:
                //window.location.assign("/pictures")
                navigate(`/pictures`);
                break;
            default:
                break;
        }

    };
    return (
        <footer className={classes.root}>
            <BottomNavigation
                // value={value}
                onChange={(event, newValue) => {
                    handleNavClick(newValue);
                }}
                showLabels
                className={classes.background}
            >
                <BottomNavigationAction className={classes.foreground} label="Character" icon={<CharacterIcon />} />
                <BottomNavigationAction className={classes.foreground} label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction className={classes.foreground} label="Pictures" icon={<PicturesIcon />} />
            </BottomNavigation>
        </footer>
    );
}