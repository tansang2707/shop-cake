import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Icon } from "antd";
import { Container, Image } from "semantic-ui-react";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Search } = Input;
    return (
      <div className="footer">
        <div className="footer-top">
          <Container>
            <div className="footer-top-content">
              <Row gutter={24}>
                <Col xs={24} sm={12}>
                  <div className="footer-top-content-left">
                    <h4>ABOUT US</h4>
                    <p>
                      Te pri oblique ullamcorper, magna persequeris has eu. Mei
                      prompta dolores examad debet suavitate. Pri te vocibus
                      electram. Eu eleifend rationibus vis, at.
                    </p>
                    <p>240 CENTRAL PARK, LONDON, OR 10019</p>
                  </div>
                </Col>

                <Col xs={24} sm={12}>
                  <div className="footer-top-content-right">
                    <h4>SUBSCRIBE EMAIL</h4>
                    <p>
                      Te pri oblique ullamcorper, magna persequeris has eu. Mei
                      prompta dolores examad debet suavitate. Pri te vocibus
                      electram. Eu eleifend rationibus vis, at.
                    </p>
                    <Search
                      placeholder="type your email"
                      enterButton="SUBSCRIBE"
                      size="large"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row gutter={24}>
              <Col xs={24} sm={12} lg={6}>
                <div>
                  <h4>Payment accepted</h4>
                  <Image src="/img/thanhtoan.png" />
                </div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <div>
                  <h4>Working Time</h4>
                  <b>Monday - Friday</b>
                  <p>8:00 am - 8:30 pm</p>
                  <b>Satuday - Sunday</b>
                  <p>10:00 am - 16:30 pm</p>
                </div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <div className="footer-bottom--order">
                  <h4>Orders and returns</h4>
                  <ul>
                    <li>
                      <Link to="/">Order</Link>
                    </li>
                    <li>
                      <Link to="/">Shipping</Link>
                    </li>
                    <li>
                      <Link to="/">Policy Return Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Payments</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <div className="footer-bottom--contact">
                  <h4>contact us</h4>
                  <ul>
                    <li>
                      <Link to="/">
                        <Icon type="facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Icon type="google" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Icon type="twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Icon type="instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
