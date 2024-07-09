import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css"
import icon1 from "../icons/Customer.png";
import icon3 from "../icons/Favorite.png";
import icon4 from "../icons/Shopping Cart.png";
import icon2 from "../icons/Hazelnut.png";
import { useNavigate } from 'react-router-dom';

 
export default function Header() {

    const navigate = useNavigate();

            const handleimageClick = () => {
            navigate('./CheckoutPage/Checkout');
        }

    return(
        <div>
            <Container>
                <Row className="Row1">
                    <Col className="nutifyIcon"><img src={icon2} alt="Nutify icon"></img><span className="nutify">Nutify</span></Col>
                    <Col className="search">
                        <button>search products</button>
                    </Col>
                    <Col className="call">call us 24/7 +2348167208978</Col>
                    <Col><img src={icon1} alt="Customer" className="icon1"></img></Col>
                    <Col><img src={icon3} alt="Favourite" className="icon2"></img></Col>
                    <Col>
                    <img src={icon4} alt="Shopping cart" className="icon3" onClick={handleimageClick}></img>
                    </Col>
                </Row>
                <Row className="Row2">
                    <Col>Home</Col>
                    <Col>contact us</Col>
                    <Col>Pricing</Col>
                </Row>
            </Container>
    </div>
    )
}