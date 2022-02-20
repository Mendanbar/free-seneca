import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import MainContent from '../Components/MainContent';
import CollapsibleCard from '../Components/CollapsibleCard';

// const useStyles = makeStyles((theme) => ({
// }));

export default function Character(props) {
    // const classes = useStyles();

    return (
        <MainContent>
            <Container>
                <Box my={2}>
                    <Typography variant="body1">The following are character letters written by friends and family of Seneca prior to his sentencing.</Typography>
                </Box>
                <Box my={2}><CollapsibleCard title="Alexa Moncrief">
                    <p>I'm writing to give a character witness on behalf of Seneca Honjuay Isaiah Cayson. I've known Seneca his whole life. I've watched him grow into the honorable young man he is today. He is a sensitive and sweet soul. He's always been empathetic beyond his years.  I'm proud to call him my nephew but I would classify our relationship as close as a brother/sister, especially in recent years.</p>
                    <p>Seneca lived with me and my family for over a year and during that time he held down a job at the local grocery store.  He made a lot of friends in town and helped out my neighbors and anyone in need. He would take odd jobs, not because he needed to but because he wanted to be helpful. He helped me a lot with household chores and would often babysit my two kids. Both of my kids have special needs and he was so patient and would do everything for them including learning how to handle medical needs.</p>
                    <p>Seneca got a job offer at US bank and would earn more income when he found out about a warrant in Oregon. He tried to do the right thing; to go clear up whatever misunderstanding it could have been. He was living and working in Washington State for over a year when this just came out of nowhere. He's not a threat to anyone or anything! His only goal in life was to provide for his son and be a father to him.</p>
                    <p>Martha has always used their son as a bargaining chip in their relationship.  What they need is support to facilitate how they can equally share time in parenting him. Seneca belongs at home where he's able to provide a loving home for his son.  Of the few times I've seen Seneca with his son, he's so loving and patient with him. He loves him beyond measure. He makes sure every need is met and just relishes every moment with him, playing with toys, singing and laughing with him. Memories like these are what they need more of; it's what Seneca lives for.  He is not interested in pursuing a romantic relationship with Martha; he just wants the opportunity to be a father to his son.</p>
                    <p>I'm begging and pleading with you, if there is anything you can do to release him, please, he belongs at home. He is a hard worker and a loving father and he deserves to come home.</p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Danielle Weissenborn">
                    <p>I have known Seneca Cayson for two years as a good friend and neighbor of our family before we relocated to Murrieta, CA from Vashon Island, WA where we initially met. I was very surprised to hear about this case against him and am troubled by the situation as it is not the person I have grown to know.</p>
                    <p>My first encounter with Seneca involved deep discussion about meditation and yoga as a life practice and our friendship continued on over time with discussions about books and music. His knowledge and authenticity as a human has always been on display as genuinely kind hearted and I've never felt unsafe in his presence. In fact I have 3 children of my own and he has been around my children and spent time engaging with them in positive ways through art and play. It is for this reason that I happily write this letter of character for Seneca regarding this matter.</p>
                    <p>Seneca has always been an asset to the small community on Vashon Island and he volunteered his time and efforts into helping others when in need. His kindness and eagerness to engage with others in thoughtful ways was remarkable. Whether though his work in the local grocery store or volunteering for yard work for locals, he was someone who always stood out to me and others in the community.</p>
                    <p>It is my sincere hope that the court recognizes truly what an upstanding person Seneca is and takes this letter into consideration during the sentencing decision. Despite the current case, I still consider Seneca a man of his word, a loyal human and valuable member of our society.</p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Ian Moncrief">
                    <p>I'd like to submit my own experience as testimony to the character of Seneca Cayson. I've known Seneca for a large portion of his life (~13 years).  In that time, I've seen him grow from a sensitive but unsure child, to an incredibly gifted (and successful) fashion model; to the quiet introspective man he is today.</p>
                    <p>It's taken me a long time to write this letter because it's hard to narrow down the very most critical points, and it's scary to think about just how much hangs in the balance based on his sentencing.  But more than anything I just miss my friend, and it's hard to come to terms with the idea of him not being in my family's life for years.  I'll try to be as succinct as possible, though, and stick to the reasons I think he should be given leniency in this case.</p>
                    <p>As I said, I've known Seneca for a long time.  But I really got to wax philosophical with him after he moved in with our family, and subsequently with my mother-in-law (his grandmother) on Vashon Island.  When he came to us, he was distraught.  He and Martha had a son, and he was trying to figure out how to make things work.  I got the impression that he really loved Martha despite their disagreements, and he wanted to find some way to make a family work.  He spoke of getting a job, and maybe even going to school to learn a trade, all so he could provide some stability to his son.  I think he knew it wouldn't work out with Martha, but he loved her still... saying things like "You don't get to choose who you love".  He would often play with my kids.  He'd read to them, make believe, show them magic tricks.  He'd even intently listen to my (probably terrible) advice on how to be a father.  He had no idea how to be a father to Atlas, but he wanted so badly to learn and provide.</p>
                    <p>When he returned to Vashon after the incident that would eventually see him convicted, he was very different.  The love struck idealism was gone, and replaced by a quiet determination.  He told me that he went to see Atlas that evening, and Martha would not allow it (they had arranged it in advance).  Instead she got in the car and they drove.  An argument ensued and he ultimately dropped her back at home... having missed seeing his son for Christmas.  I think that was the end of any hope he had for a relationship with Martha. He worked hard at his grocery store job after that in the hopes that he could rent or even buy his own place.  He seemed determined to prove to whoever was watching that he was capable of being a stable parent for his son.</p>
                    <p>He asked me to teach him what I know about computer programming, and I happily gave him some lessons.  In general, the year between the incident and when he was ultimately taken into custody was filled with a drive to be a better provider.  He applied to a job at US Bank in order to try to establish a real career.  It was then that he found out that there was a warrant for his arrest.  For that reason, he lost the job.  He was heartbroken.  We all tried to reassure him that we'd work together to find a way through this, but I think he needed to find closure that he could only find by accelerating the process.  He caught a flight to Portland and turned himself in to the police... I think hoping to clear up the misunderstanding.  He took his first lawyer's advice to waive his right to a speedy trial.  He did his best to let the system work properly and reveal the truth:  That he had a heated argument with the mother of his beloved son, and then drove her home.  I won't get into how the system failed Seneca in this case.  I'll just say this: I have no doubt that Seneca only wanted the best for his son, and I think he knows (based on what I saw for a full year after the incident) that it means he and Martha are not meant to be.  But I also think he still wants to be the best Dad that he can to Atlas.  I also think that Atlas would be better off if Seneca had some place in his life.  I know for a fact that there will be a hole in mine until the day that he is released, and my own kids miss him terribly.  I suspect that the other letters you will receive will tell a similar story.</p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Jacinda Thomas">
                    <p>It is a genuine honor to write this letter in favor of Seneca Cayson. It hurt my heart to hear of him being tried and possibly looking at a long time spent in prison because I know Seneca’s heart is not the heart of someone that would intentionally harm anyone.  </p>
                    <p>I have known Seneca literally since the day he was born.  I’ve known his family for 20+ years and I have nothing but GOOD to say about them. Seneca’s parents have raised their kids to be respectful, caring people. I’ve ALWAYS known Seneca to be a loving, caring, genuine human being. I know that in life people can make mistakes, I understand that. But I truly believe in my heart that he is NOT someone who would cause harm to someone or someone that belongs behind bars where his freedom is lost. I know he loves his son, his family…It would be a pure tragedy for his little boy to spend a huge chunk of his life, or any time at all, without the genuine love and presence of his own father.</p>
                    <p>I’m asking you to please look within your heart to find lenience and favor when determining what action to take regarding Seneca. Thank you so much for taking the time to read this letter. </p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Jessica Howsden">
                    <p>I am writing you in hopes you allow me to briefly describe the kind of person Seneca Honjuay Isaiah Cayson is. I have had the pleasure of knowing Seneca for over 6 years and we are friends, but I consider Seneca to be an extension of my family. For all of the time I have known Seneca, I have known him to be a person of respect, integrity, intelligence and a positive member of our community. Seneca has long been considered a leader amongst his peers and is very well liked. Seneca is an honorable young man who has a long positive life ahead of him which will greatly be disturbed by an extended amount of time in prison. </p>
                    <p>I can only imagine how difficult of a decision this would be when you don’t actually have the chance to get to know the person in front of you. I hope that this letter, and the countless other letters you are sure to receive, help you to understand the man that Seneca is and can be. As I’m sure you know, Seneca is important to so many people that will be gravely impacted if he is taken away from us. I ask you to please consider all of these factors when making your difficult decision. </p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Keith Stern-Pirlot">
                    <p>I met Seneca when he moved into his aunt’s house next door.  During the course of my interactions with him, of which there where many, I came to discover a thoughtful and compassionate person with a warm and kindly demeanor. He had a keen interest in self-development and spirituality and we discussed matters ranging from the nature of loving kindness to the principles of right action. At one time he touched upon some events from his past that he recounted with regret, but filled with optimism and a desire to do right, countered those with what he would do forthwith.</p>
                    <p>I imagined him as someone who had suffered in life and although had made some bad choices, had a great potential for bringing goodness into the world. He made a very strong impression upon me as this kind of person, the kind of person who changes things for the better, and not just for his own being but for those around him.</p>
                    <p>When I encountered him at his place of work, he was always filled with a positive energy that radiated beneficence, and from witnessing the way others responded to him, I know that I’m not alone in this understanding of him.</p>
                    <p>I can’t imagine how punishing him would serve him or society in any beneficial way. He’s a contemplative person who I’m sure has adequately punished himself.  Please consider that he is a good person with a good heart and that it is in society’s interest to nurture him not enact vengeance upon him.  </p>
                    <p>Thank you for any consideration bestowed upon him; I know that he’s worthy of this.</p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Matt Goodwin">
                    <p>I am writing to you on behalf of Seneca Cayson, a close friend of mine for the past 5 years. Throughout our friendship, myself and my family both know him to be one of the nicest and most genuine people we have met. Seneca is a kind humble guy who is at peace with just about everybody. He was definitely made out to be something he wasn’t in this case. </p>
                    <p>Every time we would be together he would be showing photos of his kid and talking about how much he misses him, regardless of a situation. Atlas's mother never allowed for him to see his son at any time of the day. I please ask you to be lenient and just when sentencing.</p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Robdu Hailu">
                    <p>I’m writing in regards Seneca Cayson. He has been put through a trial and judgement that he doesn’t deserve. I’ve known Seneca in a very intimate and personal way and I know him to have a very pure, giving soul but he has been through a lot of trauma in his life starting at a very young age. </p>
                    <p>He has been put through a system that designed to agent him with a jury that said he was guilty when the story was inconsistent. Seneca’s number one priority and the thing that was most important to him was his son Atlas's safety and just being a good father. </p>
                    <p>I truly don’t believe Seneca is capable of doing what he was convicted of. He wants nothing but to be happy and be with his son. Please don’t take this man’s life by placing him in a cage that will torture him. I truly believe he will come out in a bad mental state. I think about this every day and how he’s in jail for something I know was set up. Please hear my plea and his family’s plea to lesson his sentence he doesn’t deserve this at all.</p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Sara Khalid">
                    <p>I have had the privilege of knowing Seneca Cayson. Him and I were very close friends from
                        freshman year -until now. We would always tell people we were brother and sister, that was my
                        twin flame. When we met I felt that I finally met someone that understood me. We spent so
                        much time together creating, that’s what always kept us together, our expansive mindsets and
                        creative abilities. During this time in 2016, Seneca and I were both starting our creative paths.
                        My passion for photos and his passion for modeling meshed well and we began shooting content
                        together. Not much longer after, Seneca became very recognized for his modeling. Aside from
                        his bold style, and being an amazing model, he was what you would call, a “ creative genius”.
                        People looked up to him, I looked up to him. He became a young legend in our town. Everyone
                        wanted to shoot him. More than that, his personality is what separated him from all the rest,
                        Seneca is a light, he was the voice of encouragement to those who needed it. He instilled a
                        confidence in the people around him that made him even more amazing. As a creative, Seneca
                        was the leading one. Everyone knew he would blow up and were so excited for him.</p>
                    <p>As a father, Seneca carried a caring energy that I only ever saw in few people. His son, Atlas, is
                        quite literally his world. He goes out of his way to make time for him, he is so happy to be a dad.
                        Though he was unable to see his son due to his sons mother, he cherished those times with him
                        even more. Everyday that he would be granted permission to see his son he would call me with
                        the most excited voice, he loved spending time with his son. With everything going on now,
                        those moments with his son are what keep him going. He wants more than anything to be with
                        him again, and I pray that you will all see that he is wrongly accused.</p>
                    <p>Seneca is the oldest of 3, and his two younger brothers look up to him more than anything. He
                        encouraged them to be themselves, to be authentic to who they were. He would care for them
                        and spend so much time with them. They inspired him to be the greatest version of themselves.
                        Without their big brother in their life, they grow devastated and hurt. They still do not believe
                        this is real, and neither do I. I just found out about his time in jail in the last few days and had I
                        known earlier I would have written this letter earlier. Seneca is innocent, he means no harm, and
                        is such an impactful and important part of society. He has everything to give the world, too much
                        to give to himself. This is not his time, he is bigger and greater than a cell. I pray that you feel
                        my words enough to see that Seneca is wrongly accused, that he is not to blame.</p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Timothy Blanchard">
                    <p>I am writing to speak about Seneca’s impression on me. I had the pleasure of meeting Seneca through the creative community in Portland. We spent time together producing media content and it made an impression and in that process I was able to have a glimpse into who he is as a person. </p>
                    <p>Seneca always brings a special energy into any space he enters. He is a smart, curious and a hard working young man. He is always motivated to challenge himself and others, pushing everyone beyond their boundaries and showing them a part of themselves they may have never discovered.  </p>
                    <p>Seneca deserves to have a life that is fulfilling and he is the type of person that will do all the work needed to make that happen. Though I never got to meet his son, Atlas, I knew that he cared about him from how often he would bring him up in conversation. Seneca really loves him. </p>
                    <p>I hope this can help guide whatever decision is made and that the court can see through this situation. Seneca is a bright, young man that is ready to take on his life. </p>
                </CollapsibleCard></Box>
                <Box my={2}><CollapsibleCard title="Timothy Lee">
                    <p>My name is Timothy Lee and proud to offer my recommendation of Seneca Cayson Jr. to whom I
                        have personally known for 22 years as my grandson.</p>
                    <p>My name is Timothy and I am a manager in the entertainment industry. I represent 2x Grammy
                        award winning recording artist and 6x Grammy nominee Ann Nesby. Ms. Nesby also is my wife of
                        25 years and my life companion of 35 years. We have 10 children between us as we are a blended
                        family. Along our journey we've had the blessed opportunity to be involved in numerous young up
                        and coming producers/songwriters lives offering spiritual guidance, life lessons and moral support.
                        We have had the blessed opportunity to become surrogate parents of Seneca Cayson Sr. who was
                        one of the young producer/songwriters that happened to loss his mother at an early age and a father
                        that was not present in his life. We became Surrogate parents to Seneca Cayson Sr. and have known
                        Seneca Cayson Jr. from the day of his birth. Seneca Cayson Jr. was the apple of both Seneca Sr. and
                        his Mother Erica's eye from birth. As Seneca Jr. got older and he welcomed his two younger sibling
                        brothers, he became the Big Brother that we all wish we had. He looked out for his brothers, was
                        attentive to them and taught them all he was taught. He has always been a person of great character
                        and a helping and loving spirit. In life we all have made mistakes and I don't believe jail time or the
                        penal system is the answer in this case. Mental health is a real issue that many Americans face and I
                        believe with the proper involvement of Doctors and psychoanalyst Seneca Jr. can and will remain a
                        productive citizen and one that will be able to contribute to his son's rearing and also to his
                        community. My recommendation would be that Seneca Jr. be given an opportunity to address his
                        issues as it pertains to mental health as I believe that incarceration is not the answer for him.</p>
                </CollapsibleCard></Box>
            </Container>
        </MainContent>
    )
}