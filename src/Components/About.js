import React, {Component} from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../css/main.css';
import photo from '../img/';
import resume from '../Archive/CV.pdf'

export const About = () => {
    return (
        <section className="about">
        <Col md={6} sm={12} xsHidden lg={6}>
            {/* <Col md={6} sm={12}> */}
                <div>
                    <img src={photo} alt="me" className="photo"/>
                </div>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
            {/* <Col md={6} sm={12}> */}
                <div className="description">
                    <h1 className="title text-center">Sobre mi</h1>
                    <p>Soy Front-end Developer gracias a la oportunidad que obtuve cursando estudios de programación en el bootcamp que ofrece <a target="_blank" href="http://www.laboratoria.la/"> Laboratoria</a>. En el transcurso del programa he logrado aprender HTML, CSS, JS y REACT.
                    Hace un tiempo culmine mi carrera universitaria de Marketing, obteniendo una formación integral, logrando canalizar en el presente mis capacidades y habilidades, innatas y adquiridas, para lograr alcanzar las metas propuestas en el sector tecnológico. Con Laboratoria he logrado descubrir mi verdadera pasión hacia la programación, diseño y organización de proyectos en equipo. Soy consciente del mundo de oportunidades a la que actualmente las mujeres podemos acceder, equilibrando nuestras oportunidades con nuestras capacidades, y quiero ser parte del gran cambio que este mundo ofrece a nuestra sociedad
                    </p>
                    <div className="icons text-center">
                        <span className="fa-stack fa-lg">
                            <a target="_blank" href="https://www.facebook.com/">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x fa-inverse" aria-hidden="true"></i>
                            </a>
                        </span>
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://www.linkedin.com/in//">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-linkedin fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a> 
                        </span>
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://www.instagram.com//">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-instagram fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a>
                        </span>
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://github.com/">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a> 
                        </span>
                    </div>
                    <div className="resume text-center">
                    <a target="_blank" href={resume} download className="linkCV">Mi CV</a>
                </div>
                </div>
            </Col>
        </section>
    );
}