import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';



import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css'




function History(){

    
    
    return (
          <React.Fragment>
              <Container fluid={true} style = {{textAlign: "center"}}>
                    <Row>
                
                        <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                        
                         <p className = "our-hist-txt">OUR HISTORY</p>
                        </Col> 

                        <Col  md={{size: 6}} sm = {{size: 12}}>
                            <div>
                        <FontAwesome className = 'fa-quote-left'
                                    name = 'quote-left'
                                    size = '3x' style = {{color:"#e50000", float: 'left', marginTop: '15px'}}/>
                            </div>   
                         <p className = 'hist-quote'> <br/> <br/> <br/>Never doubt that a small group of thoughtful , committed citizens can change the world. Indeed, it is the only thing that ever has.</p>
                         <FontAwesome className = 'fa-quote-right'
                                    name = 'quote-right'
                                    size = '3x' style = {{color:"#e50000", float: 'right'}}/>
                        <p className = 'text-left hist-author'> <br/> <br/>Margaret Mead</p>
                        </Col> 
                
                    </Row>
            </Container>
          </React.Fragment>

        );
}
 
export default History;