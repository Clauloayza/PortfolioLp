import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../css/main.css';

export const Portfolio = () => {
    return (
        <section className="contact text-center">
            <Col md={12} lg={12} sm={12} xs={12}>
                <div className="photoContact">
                    <Col mdOffset={6} md={6} xs={12} sm={12} lg={6} lgOffset={6}>
                        <h1 className="titleContact">Contáctame</h1>
                        <form className="formContact">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Correo"/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Asunto"/>
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    placeholder="Message"
                                    id=""/>
                            </div>
                           
                        </form>
                    </Col>
                </div>
            </Col>
        </section>
    );
}