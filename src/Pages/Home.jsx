import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import bannerWide from '../banner-wide.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import MainContent from '../Components/MainContent';
import CollapsibleCard from '../Components/CollapsibleCard';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  actionCard: {
    padding: '8px',
  },
  banner: {
    width: '100%',
  },
  address: {
    width: 232,
    padding: 5
  },
  ul: {
    marginBlockStart: 0
  }
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <MainContent>
      <img src={bannerWide} width="100%" className={classes.banner} alt="logo" />
      <Container>
        <Box my={2}>
          <Typography variant="body1">This is Seneca Cayson.  He is currently serving a 70 month (5 years, 10 months) sentence in the Oregon Correctional System, while attempting to appeal his original conviction.  During the course of his incarceration, he has encountered a number of threats to his rights, health, and well being.  Below you will find details about his story, as well as some actions you can take to make a difference.  Together we can raise awareness of the unfair treatment of Oregon's inmates, and make a positive change.</Typography>
        </Box>
        <Box my={2}>
          <CollapsibleCard title="Legal Injustices:">
            <Typography component='ul' className={classes.ul}>
              <li>Coerced into waiving his rights to a speedy trial from the very beginning.</li>
              <li>“Jury of his peers” included no POC; mostly young white women in their early-mid twenties</li>
              <li>Jury was not unanimous at the time of his trial, but he was still found guilty (which was then allowed in the state of Oregon.)</li>
              <li>One of the jurors went to high school with Seneca’s younger brother and was not on good terms with him. His younger brother was in the courtroom during the trial and easily identified as being related to Seneca.</li>
              <li>One of the jurors came back late from a lunch break and saw Seneca as he was shackled and being led back to the courtroom which easily could have influenced her opinion of Seneca and titled him as a criminal.</li>
              <li>Judge refused to hear any statement from Seneca or his family at his sentencing.</li>
              <li>Seneca’s paid attorney made several mistakes during the trial which led to inadequate representation.</li>
              <li>Seneca was not convicted of a crime that typically qualifies for a maximum-security prison; however, he was placed at Oregon State Prison and he spent almost a year there. This limited his opportunities to participate in any sort of programs that may have helped him learn new skills or ways to cope. This also put him in a more dangerous population with very few inmates that were there for a similar crime. </li>
              <li>Seneca has been transferred to 4 prisons from the time of his sentencing in July 2019 through the present.</li>
              <li>Seneca has been denied the right to proper medical care on several occasions to include severe toothaches, illnesses that were never diagnosed or treated, high blood pressure, unidentified body rashes that went untreated and to this day, he has still not received an eye exam despite multiple attempts to get new prescription glasses due to constant headaches and blurred vision. </li>
              <li>His family has witnessed bruises, scratches and multiple unusual injuries which have never been investigated or treated.</li>
              <li>Seneca’s cells were covered in asbestos at OSP that was already well-know and deemed toxic and an unsafe living environment. </li>
              <li>Seneca has been denied vegetarian meals and has had major delays in getting those meals each time he is transferred. Most recently at Washington county jail, he went without vegetarian meals for 5 days which caused a total lack of the calories needed to sustain him. </li>
              <li>Seneca’s appointed appeals attorney didn’t start working on his case for an entire year which delayed all hopes of actually appealing his case. This was blamed on Covid, but this did affect his chances of appealing and applying for post-conviction relief. </li>
              <li>in September of 2020 during the Oregon fires Seneca was trapped along with almost 1,500 other inmates at OSP in Salem Oregon where the air quality was poor enough to evacuate. Seneca was never moved or protected from the smoke. Poor ventilation and no air conditioning in the prison which was built in 1851 caused major discomfort and was totally unbearable. </li>
            </Typography>
          </CollapsibleCard>
        </Box>
        <Box my={2}>
          <CollapsibleCard title="The Most Recent Events:">
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
          </CollapsibleCard>
        </Box>
        <Box my={2}>
          <Card >
            <CardContent className={classes.actionCard}>
              <Typography variant="h6" gutterBottom>How to Help:</Typography>
              <Typography component='ul' className={classes.ul}>
                <li><a href="mailto:Rep.TeresaAlonsoLeon@oregonlegislature.gov,Rep.DanielBonham@oregonlegislature.gov,Rep.shellyboshartdavis@oregonlegislature.gov,rep.vikkibreeseiverson@oregonlegislature.gov,Rep.JanelleBynum@oregonlegislature.gov,Rep.WlnsveyCampos@oregonlegislature.gov,Rep.JamiCate@oregonlegislature.gov,Rep.MaxineDexter@oregonlegislature.gov,Rep.PaulEvans@oregonlegislature.gov,Rep.JulieFahey@oregonlegislature.gov,Rep.JessicaGeorge@oregonlegislature.gov,Rep.DavidGomberg@oregonlegislature.gov,Rep.ChristineGoodwin@oregonlegislature.gov,Rep.DaciaGrayber@oregonlegislature.gov,Rep.CedricHayden@oregonlegislature.gov,Rep.KenHelm@oregonlegislature.gov,Rep.JamesHieb@oregonlegislature.gov,Rep.PaulHolvey@oregonlegislature.gov,Rep.ChrisHoy@oregonlegislature.gov,Rep.ZachHudson@oregonlegislature.gov,Rep.JasonKropf@oregonlegislature.gov,Rep.BobbyLevy@oregonlegislature.gov,Rep.RickLewis@oregonlegislature.gov,Rep.JohnLively@oregonlegislature.gov,Rep.PamMarsh@oregonlegislature.gov,Rep.SusanMclain@oregonlegislature.gov,Rep.MarkMeek@oregonlegislature.gov,Rep.RaquelMooreGreen@oregonlegislature.gov,Rep.LilyMorgan@oregonlegislature.gov,Rep.NancyNathanson@oregonlegislature.gov,Rep.TravisNelson@oregonlegislature.gov,Rep.courtneyneron@oregonlegislature.gov,Rep.RonNoble@oregonlegislature.gov,Rep.RobNosse@oregonlegislature.gov,Rep.MarkOwens@oregonlegislature.gov,Rep.KhanhPham@oregonlegislature.gov,Rep.KarinPower@oregonlegislature.gov,Rep.RachelPrusak@oregonlegislature.gov,Rep.DanRayfield@oregonlegislature.gov,Rep.JeffReardon@oregonlegislature.gov,Rep.EWernerReschke@oregonlegislature.gov,Rep.LisaReynolds@oregonlegislature.gov,Rep.RickiRuiz@oregonlegislature.gov,Rep.AndreaSalinas@oregonlegislature.gov,Rep.TawnaSanchez@oregonlegislature.gov,Rep.AnnaScharf@oregonlegislature.gov,Rep.SheriSchouten@oregonlegislature.gov,Rep.GregSmith@oregonlegislature.gov,Rep.BarbaraSmithWarner@oregonlegislature.gov,Rep.DavidBrockSmith@oregonlegislature.gov,Rep.NathanSosa@oregonlegislature.gov,Rep.DuaneStark@oregonlegislature.gov,Rep.AndreaValderrama@oregonlegislature.gov,Rep.kimwallan@oregonlegislature.gov,Rep.SuzanneWeber@oregonlegislature.gov,Rep.martywilde@oregonlegislature.gov,Rep.AnnaWilliams@oregonlegislature.gov,Rep.BradWitt@oregonlegislature.gov,Rep.BoomerWright@oregonlegislature.gov,Rep.JackZika@oregonlegislature.gov?subject=Conditions%20in%20Oregon%20Prisons&body=To%20the%20Honorable%20Representative%2C%0D%0A%0D%0AI%20am%20a%20constituent%20writing%20to%20request%20your%20interest%20and%20swift%20action%20to%20correct%20the%20extremely%20alarming%20conditions%20in%20Oregon%20Department%20of%20Corrections%20prisons.%20%20The%20issues%20are%20numerous%20and%20violate%20the%20standards%20required%20by%20the%20US%20Constitution.%20%20People%20are%20dying%2C%20people%20are%20being%20harmed%20physically%20and%20psychologically%20while%20incarcerated%20in%20Oregon%20prisons%20and%20county%20jails.%20%20I%20urge%20you%20to%20remember%20that%20inmates%20are%20human%20beings.%20They%20are%20people%20that%20have%20families%2C%20partners%2C%20and%20children%20that%20love%20them%20and%20value%20their%20lives.%20%20Some%20of%20the%20issues%20I%20am%20concerned%20with%20include%3A%0D%0A%0D%0A%20-%20The%20distressing%20number%20of%20people%20that%20die%20in%20custody%20%0D%0A%20-%20Cancer%20patients%20and%20those%20with%20serious%20chronic%20health%20conditions%20having%20treatments%20delayed%20or%20simply%20ignored%0D%0A%20-%20Lack%20of%20medication%20and%20treatment%20for%20mental%20health%20issues%0D%0A%20-%20The%20denial%20of%20basic%20medical%20care%20such%20as%20dental%20care%2C%20hearing%20and%20vision%20checkups%20and%20prescriptions%0D%0A%20-%20No%20access%20to%20showers%2C%20clean%20water%2C%20enough%20food%2C%20or%20clean%20laundry%20%0D%0A%20-%20Being%20housed%20in%20antiquated%20buildings%20with%20asbestos%20and%20deathly%20air%20ventilation%0D%0A%20-%20The%20use%20of%20long-term%20segregation%20as%20a%20means%20to%20attempt%20to%20quarantine%20%0D%0A%0D%0AThe%20ongoing%20pandemic%20has%20exacerbated%20and%20brought%20to%20light%20the%20problems%20that%20have%20been%20occurring%20for%20years.%20%20Over%20half%20of%20the%20total%20prison%20population%20in%20Oregon%20is%20medically%20vulnerable%20to%20Covid-19.%20%20The%20virus%20continues%20to%20be%20a%20daily%20threat%20to%20anyone%20working%20at%20or%20serving%20time%20in%20prison.%20%20There%20are%20numerous%20testimonies%20of%20negative%20individuals%20being%20held%20in%20close%20contact%20with%20those%20that%20have%20tested%20positive%20for%20Covid-19%2C%20general%20disorganization%20of%20procedures%20to%20keep%20areas%20clean%2C%20and%20patients%20receiving%20no%20medical%20treatment%20while%20suffering%20with%20symptoms.%20%0D%0A%0D%0AI%20respectfully%20ask%20you%20to%20investigate%20and%20correct%20these%20violations%20and%20hazardous%20conditions%20occurring%20at%20all%20Oregon%20Department%20of%20Corrections%20prisons%20and%20county%20jails.%20%0D%0APlease%20take%20a%20moment%20to%20visit%20freeseneca.org%20and%20learn%20about%20just%20one%20of%20those%20impacted%20by%20inhuman%20conditions.">Click here to open a prefilled and addressed e-mail to all Oregon representatives.</a></li>
                <li>Contact <a href="https://www.oregon.gov/gov/Pages/share-your-opinion.aspx">The Office of Oregon Governor Kate Brown</a></li>
                <li>Reach out to an <a href="https://www.oregonlegislature.gov/house/pages/representativesall.aspx">Oregon State Representative</a></li>
                <li>Write to your own representatives about prison conditions in Oregon (<a href="https://democracy.io/">Democracy.io</a>)</li>
                <li>
                  <div>Write to Seneca with your support:</div>
                  <Paper variant="outlined" square component="address" className={classes.address}>
                    <b>Seneca H. Cayson, #7875977</b><br />
                    WASHINGTON COUNTY JAIL<br />
                    215 SW ADAMS AVE MS 35<br />
                    HILLSBORO, OR 97123-3874<br />
                  </Paper>
                </li>
                <li>Donate! Your donation will help fund Seneca's legal appeal</li>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </MainContent>
  );
}