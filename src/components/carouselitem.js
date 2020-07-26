import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

export default function CarouselItem ({slide, image}) {
    if (slide === "1"){
        return (
            <div className="ci-container container-fluid" style={{padding: '0px', textAlign: 'center'}}>
                <img
                src={image}
                alt="Snow"/>
                <div className="carousel-btn">
                <p className="text-center">A BLOOD BAG SAVED MY LIFE,<br></br> WAS IT YOURS?</p>
                <Button>Donate Now</Button>
                </div>
            </div>
        );
    }
    else if (slide === "2"){
        return (
            <div className="ci-container container-fluid" style={{padding: '0px', textAlign: 'center'}}>
                <img
                src={image}
                alt="Snow"/>
                <div className="carousel-btn">
                <p className="text-center">WE FEEL, WE SERVE</p>
                <Button>Donate Now</Button>
                </div>
                
            </div>
        );
    }
    else {
        return (
            <div className="container-fluid" style={{padding: '0px'}}>
                <img
                src={image}
                width="100%"
                alt="Snow"/>              
            </div>
        );
    }
    
}