import React, {Component} from 'react';
import '../css/main.css';
import asientos from '../Img/Projects/reserva.png';
import whatsapp from '../Img/Projects/whatsapp.png';
import invitations from '../Img/Projects/registrationApp.png';
import bicilocas from '../Img/Projects/biciLocas.png';
import firtsportfolio from '../Img/Projects/portfolio.png';
import hackerapi from '../Img/Projects/hackerApi.png';
import lyft from '../Img/Projects/lyft.png';
import scoreboard from '../Img/Projects/scoreboard.png';
import routing from '../Img/Projects/routing.png';
import {Col, Grid, Row, ProgressBar, ControlLabel} from 'react-bootstrap';

export const Portfolio = ({title}) => {
    return (
        <div className="projects">
            <Grid >
            <Row>
                <Col sm={12}>
                    <h1 className="projects__title">Portfolio</h1>  
                </Col>
            </Row> 
            <Row>
                <Col sm={4}>
                    <div className="thumbnail">
                    <div>
                        <img src={asientos} alt="" className="" responsive/>
                    </div>
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="thumbnail">
                    <div>
                        <img src={whatsapp} alt="" className="" responsive/>
                    </div>
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="thumbnail">
                    <div>
                        <img src={invitations} alt="" className="" responsive/>
                    </div>
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <div className="thumbnail">
                        <img src="" />
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="thumbnail">
                        <img src="" />
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="thumbnail">
                        <img src="" />
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <div className="thumbnail">
                        <img src="" />
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="thumbnail">
                        <img src="" />
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="thumbnail">
                        <img src="" />
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className="thumbnail">
                        <img src="" />
                        <div className="caption">
                            <h3 className="dark-letter">Round Icons</h3>
                            <p className="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Grid>
        </div>
        
    );
}