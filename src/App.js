import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import bannerWide from './banner-wide.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  banner: {
    width: '100%',
  },
  donate:{
    marginTop: '5px',
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: blue,
  },
});

function ElevationScroll(props) {
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

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Free Seneca
              </Typography>
              <div>
                <form className={classes.donate} action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="hosted_button_id" value="BWCGG2W8CBJ46" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <img src={bannerWide} width="100%" className={classes.banner} alt="logo" />
        <Container>
          <Box my={2}>
            <p>Paragraph about Seneca here.  Basic details of why we are raising awareness. Some details about where the money goes when a person clicks "donate"? Temp text for filler: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna. Semper viverra nam libero justo. Nullam non nisi est sit amet facilisis magna etiam tempor. Magna ac placerat vestibulum lectus mauris ultrices eros in. Massa tincidunt dui ut ornare lectus sit amet. Porta non pulvinar neque laoreet suspendisse. Tincidunt lobortis feugiat vivamus at. Ultricies mi quis hendrerit dolor magna eget est. Senectus et netus et malesuada fames ac turpis egestas sed. Pellentesque massa placerat duis ultricies lacus sed turpis. </p>
            <h2>How to Help:</h2>
            <ul>
              <li><a href="www.freeseneca.org">Click here to open a prefilled and addressed e-mail to all Oregon representatives</a></li>
              <li>Contact <a href="https://www.oregon.gov/gov/Pages/share-your-opinion.aspx">The Office of Oregon Govenor Kate Brown</a></li>
              <li>Reach out to an <a href="https://www.oregonlegislature.gov/house/pages/representativesall.aspx">Oregon State Representative</a></li>
              <li>Write to your own representatives (<a href="https://democracy.io/">Democracy.io</a>)</li>
              <li>Donate!</li>
            </ul>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}