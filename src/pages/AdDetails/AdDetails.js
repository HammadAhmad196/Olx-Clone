import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row, ListGroup, Container } from "react-bootstrap";
import { listAdDetails } from "../../store/actions/adActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Slider from "../../components/Slider";
import Meta from "../../components/Meta/Meta";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AdDetails = ({ match, location }) => {
  const dispatch = useDispatch();

  const adDetails = useSelector((state) => state.adDetails);
  const { loading, error, ad } = adDetails;

  const redirectTo = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    dispatch(listAdDetails(match.params.id));
  }, [dispatch, match]);
  console.log(location);
  return (
    <>
      <Header></Header>
      <Link to="/" className="btn btn-info py-3 my-3 mx-2">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Meta title={ad.name} />
          <Row className="my-3">
            <Col md="8" sm="12" xs="12">
              <Slider pics={ad.images} />
            </Col>
            <Col md="8" sm="12" xs="12">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{ad.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>Price: Rs{ad.price}</ListGroup.Item>
                <ListGroup.Item>Description: {ad.description}</ListGroup.Item>
                <ListGroup.Item>Location: {ad.city}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
      <Footer></Footer>
    </>
  );
};

export default AdDetails;
