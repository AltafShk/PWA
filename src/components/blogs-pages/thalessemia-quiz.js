import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import BlogHeader from './blogHeader';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css'
import { Link } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const quiz =   {
    "quizTitle": "Thalassemia Quiz",
    "questions": [
      {
        "question": "What are the two major types of thalassemia?",
        "questionType": "text",
        "answers": [
          "Alpha and beta",
          "Omega",
          "Beta"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "CORRECT",
        "messageForIncorrectAnswer": "WRONG",
        "explanation": "Alpha thalassemia: a condition in which the body does not produce enough alpha globin (a component of hemoglobin). Beta thalassemia: a condition in which the body does not produce enough beta globin (another component of hemoglobin).",
        "point": "1"
      },
      {
        "question": "Thalassemia is most often treated with red blood cell transfusions.",
        "questionType": "text",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "CORRECT",
        "messageForIncorrectAnswer": "WRONG",
        "explanation": "The type of treatment a person receives depends on how severe the thalassemia is. The more severe the thalassemia, the less hemoglobin the body has, and the more severe the anemia may be. One way to treat anemia is to provide the body with more red blood cells to carry oxygen. This can be done through a blood transfusion, a safe, common procedure in which you receive blood through a small plastic tube inserted into one of your blood vessels.",
        "point": "1"
      },
      {
        "question": "Stem cell replacement offers a permanent cure for thalassemia.",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "CORRECT",
        "messageForIncorrectAnswer": "WRONG",
        "questionType": "text",
        "point": "1"
      },
      {
        "question": "Frequent blood transfusions can result in too much iron in the blood.",
        "questionType": "text",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "CORRECT",
        "messageForIncorrectAnswer": "WRONG",
        "explanation": "People with thalassemia are treated with blood transfusions. Frequent blood transfusions can result in too much iron in the blood. This is called iron overload. Because there is no natural way for the body to eliminate iron, the iron from transfused blood cells builds up and becomes toxic to tissues and organs, particularly the liver and heart. Iron overload can result in early death from organ failure.",
        "point": "1"
      },
      {
        "question": "Is there a cure for thalassemia?",
        "questionType": "text",
        "answers": [
          "Yes",
          "No"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "CORRECT",
        "messageForIncorrectAnswer": "WRONG",
        "point": "1"
      }
    ]
  }



export default function ThalessemiaQuiz () {

    const [isComplete, setIsComplete] = useState(false);


    const toggle = () => {
        setIsComplete(true);
      }


    const refresh = () => {
        window.location.reload();
    }


    return (
        <React.Fragment>
            <Container className = "quiz-container" fluid = {false}>                
                <Quiz onComplete = {toggle} quiz={quiz}/>

                {isComplete === true ? <Container>
                <Button onClick = {refresh} className = "home-btn mt-3">Retake the quiz</Button>
                </Container> : ""}
                
            </Container>


            

            <Container>
                    <hr
                    style={{
                        width: '100%',
                    }}/>

                    <p className = "imp-donor-bottom-txt"><FontAwesome className = ' fa-angle-right'
                                    name = 'angle-right'
                                    size = '2x' style = {{color:"#e0000FF"}}/> <p className = "txt-bottom" style = {{display: "inline-block"}}>YOU MIGHT ALSO LIKE</p></p>


                    <Row>
                        <Col xs = "12" md = "4">
                        <Link to = "/important-donor" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">Why is it important to be a donor?</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>

                        <Col xs = "12" md = "4">
                        <Link to = "/donate-blood" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">Who can donate blood?</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>

                        <Col xs = "12" md = "4">
                        <Link to = "/thalassemia" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">What is Thalassemia?</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>
                    </Row>

            </Container>

        </React.Fragment>
    );
}