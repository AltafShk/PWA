import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

// 2 issues hain 
export default function SuccesStories () {
    return (
        <React.Fragment>
            <Container fluid >
                <Row>
                    <Col xs={{size: 12}} md={{size: 6}} style={{backgroundColor: '#e50000'}}>
                        <h1 className='publications-header'>
                            SUCCESS STORIES
                        </h1>
                    </Col>
                    <Col xs={{size: 12}} md={{size: 6}} style={{backgroundColor: '#000000'}}>
                        <p className='text-white'>yahaa img ayegi</p>
                    </Col>
                </Row>
            </Container>
            <Container style={{textAlign: 'center'}}>
                <Row className='mt-5'>
                    <Col xs='12' md='5'>
                        <p className='success-stories-name'>Amna</p>
                        <p className='success-stories-text'>Amna was diagnosed with Thalassemia Major at 3 months of age. She has been receiving all medical care required for her condition at PWA since she was very young. She receives primary schooling from KMA Girls Primary School and is adored by her peers and teachers alike. An only child, she is the apple of her parent’s eyes. However her disease has left her parents worried about the future.<br/><br/>
                        While chatting with us she was very lively and chatty. Her love for chocolates, nihari and Indian comedy shows was greatly emphasised. The child’s vibrancy and happy disposition had enraptured many staff members and department volunteers. It is unfortunate that this hereditary condition leaves her unable to participate in physically demanding play, yet Amna never once complained about it.<br/><br/>
                        Her parents belong to the memon community. They are from a simple household with her father earning a meagre income as a Private company employee. Concerning the multitude of services provided to her daughter he is content with the organisation and genuinely thanks the responsible committee for initiating this charitable work.<br/><br/>
                        We wish all the interested sponsors to join hands with us in this endeavour and support our cause in any way possible.<br/><br/> </p>
                    </Col>
                    <Col xs='12' md='7' className='success-stories-back'>
                        <img src={require('../../images/amna.jpg')} className='success-stories-img' />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs='12' md='7' className='success-stories-back'>
                        <img src={require('../../images/kamila.jpg')} className='success-stories-img' />
                    </Col>
                    <Col xs='12' md='5'>
                        <p className='success-stories-name'>Kamila</p>
                        <p className='success-stories-text'>Meet 18 year old Kamila. Residing in Baldia Town with her parents and 6 other siblings, she has been visiting PWA for the past 8 years.<br/><br/>
                        Unfortunately, thalassemia runs in her family as she and her cousin, Seema, both make trips every 14 days to PWA for their transfusion. Both are very grateful for each other’s company.<br/><br/>
                        Soft-spoken yet confident, Kamila does not let her ordeal break her spirit and we witnessed that, as she in the midst of a transfusion, proudly showed of her freshly applied Mehndi and told us how her bright coloured clothes and bangles were her mother’s doing. With a shy but bright smile, she opened up about her love for spicy food especially chicken and rice and how she loved going out in the rain.<br/><br/>
                        She also expressed her gratitude towards PWA as she knew her father who works with auto spare parts would not have been able to afford her treatment. Kamila is looking forward to a bright future and we, at PWA would love your help in keeping this hope in Kamila as well as the thousands of others like her who suffer from thalassemia.<br/><br/> </p>                        
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs='12' md='5'>
                        <p className='success-stories-name'>Haider Ali</p>
                        <p className='success-stories-text'>Haider is a shy seven year-old who can’t wait to grow up. Although he can barely speak when new people talk to him, he courageously pretends to be twenty when asked his age. A little scientist, he breaks apart his toys and then puts them back together. Other than his ‘scientific endeavours’ he is interested in playing with his younger sister, going to school and eating chips and chocolates.<br/><br/>
                        Haider was first introduced to PWA when he was around three years old. He had suffered a fracture and had come to Civil Hospital Karachi. His doctors referred him to PWA. Haider was the first in his family to be diagnosed with Thalassemia.<br/><br/>
                        Before Haider’s family discovered PWA they had to go to multiple institutes to arrange blood for him. When his grandmother talks about the doctors who treated Haider and told them about PWA she is all prayers and praise.<br/><br/>
                        Haider’s father is a labourer and his mother works as a housemaid. It is heartbreaking to see your child in pain but it must be worse to know that the medicine your child needs is beyond your financial means. The cost of Haider’s treatment seems an unconquerable mountain to both of his parents but with your help they can afford their child’s life.<br/><br/> </p>
                    </Col>
                    <Col xs='12' md='7' className='success-stories-back'>
                        <img src={require('../../images/hyder.jpg')} className='success-stories-img' />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs='12' md='7' className='success-stories-back'>
                        <img src={require('../../images/rabnawaz.jpg')} className='success-stories-img' />
                    </Col>
                    <Col xs='12' md='5'>
                        <p className='success-stories-name'>Rab Nawaz</p>
                        <p className='success-stories-text'>To picture Rabnawaz at PWA imagine a shy eight year old boy, undergoing blood transfusion, evidently unhappy, looking as though he is on the verge of crying, but desperately trying to control his tears plastering a forced smile in front of everyone. This is Rabnawaz, a brave little child and an aspiring hero.  He is a passionate, dedicated and patriotic young boy, who dreams to one day stand in the field and  serve in the Army.<br/><br/>
                        Disregarding the fact that he suffers from thalassemia, Rabnawaz goes to Baldiya school everyday near his home on foot by himself. He likes to study and is not dependent on anyone when it comes to his studies. He hasn’t told anyone in his school about his condition except for his class teacher because he doesn’t want to be treated differently by his class fellows. He is quiet and keeps to himself but he has an adventurous spirit that yearns to travel. He looks forward to visiting his village once every year where most his relatives are, especially his cousins whom he misses dearly.<br/><br/>
                        Amongst his five siblings he is the only one who suffers from Thalassemia. His father works tirelessly at a low income job as a security guard but still struggles to keep up with the daily expenses of his family. The medical expenses of Rabnawaz have been impossible to fight off in such dreary economical circumstances and for this reason, we hope that you will sponsor Rabnawaz and help him and his family. He is just a normal boy who wants to live a life where no one treats him differently just because he carries the burden of an incurable disease. Doesn’t he deserve to smile like all of us?<br/><br/> </p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs='12' md='5'>
                        <p className='success-stories-name'>Haris</p>
                        <p className='success-stories-text'>This is the story of a young man who is a victim of the life-threatening disease, thalassemia.<br/><br/>
                        Haris belongs to a working class family in which the entire financial burden rests upon his father’s shoulders. There were eight people in his household but tragedy struck them and Haris’s older brother lost his battle against thalassemia.<br/><br/>
                        Haris’s qualification go up till matric level but after starting his first year intermediate ,he lost his will to study due to deteriorating health.<br/><br/>
                        PWA wishes to get more sponsors so it can continuing helping children like Haris so that no one ends suffering the way his brother did.<br/><br/> </p>
                    </Col>
                    <Col xs='12' md='7' className='success-stories-back'>
                        <img src={require('../../images/haris.jpg')} className='success-stories-img' />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs='12' md='7' className='success-stories-back'>
                        <img src={require('../../images/rozi.jpg')} className='success-stories-img' />
                    </Col>
                    <Col xs='12' md='5'>
                        <p className='success-stories-name'>Rozi Khan</p>
                        <p className='success-stories-text'>Rozi is a pensive looking young man. When he finds something amusing he merely bows his head and smiles shyly. He is the youngest of thirteen siblings and lives with his parents and eldest brother. When asked about his daily routine Rozi’s heart wrenching reply was, “I spend my days getting injected with Desferol, and my nights sleeping”.<br/><br/>
                        Rozi isn’t the only child in his family to be diagnosed with this devastating illness. Rozi’s cousin, and niece are also thalassemic. He belongs to a family that can barely make ends meet, let alone afford to educate their children. The expenditure needed for his treatment it adds to the burden the family has to carry.<br/><br/>
                        Thalassemia is an incurable and debilitating disease. It leaves the sufferer unable to perform any physically demanding activity. Thus like many other thalassemia patients, Rozi is mostly homebound.<br/><br/>
                        Despite all the darkness of his disease Rozi’s eyes shine when he talks about his mother’s cooking. Generous sponsors like you have helped fund his treatment and kept the spark in him alive. We hope that people like you will continue in this kindness.<br/><br/> </p>
                    </Col>
                </Row>
                
            </Container>
        </React.Fragment>
    );
};