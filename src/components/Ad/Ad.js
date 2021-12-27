import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// import Header from "../Header/Header";

const Ad = ({ ad }) => {
  // const dispatch = useDispatch();

  return (
    <>
      {/* <Header /> */}
      <Link to={`/ad/${ad.id}`} style={{ textDecoration: "none" }}>
        <Card className="cardCon rounded">
          <Col className="mx-auto">
            <Card.Img id="pic" src={ad.images[0]} fluid />
          </Col>
          <Card.Body>
            <Card.Text as="div" className="mt-1">
              <Row>
                <Col md={10}>
                  <h6>
                    <strong>{ad.name}</strong>
                  </h6>
                  <p> RS{ad.price} </p>
                  <p> Location {ad.city} </p>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Ad;
