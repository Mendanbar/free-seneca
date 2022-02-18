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
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: '8px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "1.5rem"
  },
  banner: {
    width: '100%',
  },
  donate: {
    marginTop: '5px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: blue,
  },
  typography: {
    fontSize: '14px'
  }
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
            <Typography variant="body1">This is Seneca Cayson.  He is currently serving a 70 month (5 years, 10 months) sentence in the Oregon Correctional System, while attempting to appeal his original conviction.  During the course of his incarceration, he has encountered a number of threats to his rights, health, and well being.  Below you will find details about his story, as well as some actions you can take to make a difference.  Together we can raise awareness of the unfair treatment of Oregon's inmates, and make a positive change.</Typography>
          </Box>
          <Box my={2}>
            <Card>
              <CardActions disableSpacing>
                <Typography variant="h3" >More of Seneca's Story:</Typography>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Seneca was incarcerated at Warner Creek Correctional Facility in Lakeview Washington for approximately 7 months in which he began college courses in health and fitness and had completed 2 of his 5 modules to earn his degree. He currently has a GPA of 3.8 and was looking forward to completing this so he could begin their legal assistant/paralegal course. He applied for a job in the legal library at Warner Creek which is a very difficult position to obtain. He was interviewed for this position and selected for it. He worked 40+ hours each week. He was assisting multiple other inmates on their cases and providing the proper documentation and instructions as needed. </Typography>
                  <Typography paragraph>
                    Suddenly on January 24th 2022 he was abruptly instructed to pack all of his belongings because he was being transferred. When he asked where to and why they gave him no explanation. They told him he had 2 hours to get it packed and to throw out all of his food items and toiletries. He asked what was going to happen to the items he was packing up and he was told his family could come pick them up within 24 hours, or they would be “hot boxed” which means thrown away. He explained that his family lives more than 9 hours away and he was told “sorry this is happening, I’m just doing my job” after his family called and spoke to the prison officials, they were told they could pay for shipping which would cost approximately $300. They were very concerned because they knew that once his belongings were brought out, there would be no way they’d allow them to be returned to him. These items were very expensive and had been collected over the past 2.5 years. All of his belongings were taken from his electronics, to his personal items including photos of his family and all of his books. His college books were included and even his shoes and underwear. Luckily Seneca’s family was able to obtain a lawyer to call and plea to the prison officials to hold his belongings for at least 45 days even though we have no idea which prison he will be sent to next.
                  </Typography>
                  <Typography paragraph>
                    The following day Seneca was given a Covid test which was negative. He was then transferred to a jail in Klamath Falls and re-charged with the crimes that he was not convicted of unanimously. This was due the Supreme Court ruling that the non-unanimous verdicts violated the sixth amendment in 2020, and they overturned a 1972 decision by a prior court that upheld non-unanimous juries that involved a person convicted in Oregon. He was put in a small cell without a toilet, just a hole in the floor that they told him he could use the bathroom in. The next day he was transferred to Washington County jail in Hillsboro Oregon and he was immediately put into isolation for a projected period of 14 days. He tested for Covid at that time, but they told him this is the protocol due to the transport. He was not fed any vegetarian meals for more than 5 straight days even though he put the request in right away. His family called and begged for them to feed him so he’d have enough food to survive, but they were told he needed to request it in written form which he did over and over.
                  </Typography>
                  <Typography paragraph>
                    On the 6th day there, Seneca started feeling severe pain in his head and his spine. He tried to deal with it for the entire day but by that evening he was unable to tolerate it any longer and he begged for medical attention. The guard told him he’d have to wait until the morning, but Seneca continued asking. He was eventually sent to the medical staff area and was monitored for high blood pressure. His blood pressure was elevated but the staff told him it wasn’t high enough to be deemed dangerous so he could return to the cell. He also had a fever. Seneca begged to be tested for Covid as he’d never experienced pain like this before. Hesitantly she tested him. She sent him back to the cell and told him she’d be back in 15 minutes if the rapid test was positive, otherwise he should assume that it was negative. Seneca suffered all night long. He was unable to sleep and he said he’d never been through anything more painful in his life. In the morning, the medical staff did come back and let him know that he was positive for Covid. He requested aspirin or something to help him with his pain and fever. He was given some after a couple more hours. For the next several days he suffered.
                  </Typography>
                  <Typography paragraph>
                    His mother called the jail the following day and asked to speak to the medical staff so they could determine what their protocol is for medical care when an inmate has Covid. She spoke to Deputy Santiago. Deputy Santiago said “He’s only going to be let out for a shower twice per week and he has to test negative for 2 weeks before they let him out of quarantine” His mother said “I am asking for what treatment regimen they give them, not their rules” She was immediately placed on hold and transferred to the medical staff. She spoke to someone there named Audra. His mother asked her what kind of care they will provide him with because he did test positive. Audra laughed and said “the normal treatment for covid” His mother asked what that was and she put her on hold. She came back several minutes later and said “we treat the symptoms” His mother than asked how often they take his temperature? She said 3 times per day and we walk by every hour to make sure they’re still breathing” His mother was mortified to hear her taking this so lightly as so many people have been unable to breathe when they have Covid. She asked her to please put herself in her shoes and as a mother how that must sound. Audra then abruptly placed her on hold again. She was then transferred to a medical technician named Amanda. Amanda said “The protocol for how we help inmates with Covid is that the inmate has to request medical before any assistance is given. They will come and assist him and provide care depending on his symptoms. We are in the middle of a bad Covid outbreak at the jail and almost all of our staff and inmates have it” His mother asked for details on what kind of care they will provide, but Amanda said she can’t give any detailed information. She said the best thing he can do is request medical from the deputy that is in there and then thoroughly explain what symptoms he has to the medical staff in order to get treatment.
                  </Typography>
                  <Typography paragraph>
                    From then on Seneca would ask for some pain reliever if he was awake when the deputies would walk by, but he was only able to do that a few times. Seneca slowly recovered and was then told he’d have to restart his isolation period for an additional 14 days. He had no communication with anyone besides his family when he was able to make calls on a tablet they provided him. He had no reading materials or anything to keep his mind busy until his family was able to send some books in. Seneca declined quickly mentally and his family was extremely worried about him. In total Seneca spent 24 days in isolation. He was only allowed 3 showers during that time. He was transferred to a populated pod on February 15th and as of today (February 17th 2022) he has not been let out of the cell there or allowed to have a shower.
                  </Typography>
                  <Typography paragraph>
                    In summary, Seneca was removed out of a healthy environment where he was thriving and sent to a county jail in the middle of a Covid outbreak. He got Covid after being housed in the area of the jail where the other inmates with Covid were being held. He was transferred with no court date scheduled and no end in sight. His lawyer did get a court date scheduled which occurred earlier today but they didn’t bring Seneca to the courtroom. He was on video (which could have easily been done from Warner Creek and would have mitigated this entire ordeal.) His next court date is scheduled on February 28th 2022. His family is still extremely worried about him and they feel helpless on what they could possibly do at this time to help him through this.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
          <Box my={2}>
            <Card >
              <CardContent className={classes.card}>
                <Typography variant="h3" gutterBottom>How to Help:</Typography>
                <ul>
                  <li><a href="www.freeseneca.org">Click here to open a prefilled and addressed e-mail to all Oregon representatives</a></li>
                  <li>Contact <a href="https://www.oregon.gov/gov/Pages/share-your-opinion.aspx">The Office of Oregon Govenor Kate Brown</a></li>
                  <li>Reach out to an <a href="https://www.oregonlegislature.gov/house/pages/representativesall.aspx">Oregon State Representative</a></li>
                  <li>Write to your own representatives (<a href="https://democracy.io/">Democracy.io</a>)</li>
                  <li>Donate! Proceeds go to Seneca's legal appeal fund</li>
                </ul>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}