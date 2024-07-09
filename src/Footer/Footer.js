import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
import icon1 from "../icons/Organic Food.png"
import icon2 from "../icons/In Transit.png"
import icon3 from "../icons/Facebook Circled.png"
import icon4 from "../icons/TwitterX.png"
import icon5 from "../icons/Instagram.png"

export default function Footer() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row><img src={icon1} alt="organic food" className="organicFood"></img>100% Organic <p className="details1">We source our  products from certified organic farms and suppliers</p></Row>
                        <Row className="first">
                            <div>Need Help?</div>
                            <ul>
                                <li>Chat with us</li>
                                <li>Help Center</li>
                                <li>Contact Us</li>
                           </ul>
                        </Row>
                        <Row className="second">Join Us Now</Row>
                        <Row>
                            <Col><img src={icon3} alt="facebook"></img></Col>
                            <Col><img src={icon4} alt="twitter"></img></Col>
                            <Col><img src={icon5} alt="instagram"></img></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row><img src={icon2} alt="shipping" className="shipping"></img>Shipping
                        <div>
                            Fastst Delivery nationwide
                        </div>
                        </Row>
                        <Row>
                            <div>About us</div>
                            <div>At Nutify, we're passionate about providing the highest quality, 100% organic nuts and seeds to our customers. Our mission is to make healthy eating easy and accessible, without compromising on taste or quality.</div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}