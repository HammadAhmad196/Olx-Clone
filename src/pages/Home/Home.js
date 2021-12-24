import React, { useEffect } from "react";
import Ad from "../../components/Ad/Ad";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/Message/Message";
import { listAds, listAdsNext } from "../../store/actions/adActions";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

const Home = () => {

  const dispatch = useDispatch();
  const adsList = useSelector((state) => state.adsList);
  const { loading, error, ads } = adsList;

  useEffect(() => {
    dispatch(listAds());
  }, [dispatch]);

  // const handleLoadMore = () => {
  //   dispatch(listAdsNext())
  // }

  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varaint="danger">{error}</Message>
      ) : (
        <>
          <Container fluid className="banner"></Container>
          <Container>
            <Row>
              {(ads || []).map(ad => (
                <Col className="mt-3" sm={12} md={6} lg={4} xl={3} key={ad.id}>
                  <Ad ad={ad} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
