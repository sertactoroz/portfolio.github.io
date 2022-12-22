import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="580" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my mentor says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/referans2.png"
                    width="70"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Ömer Raşid Ekmekçi</h6>
                    <h6>Senior Frontend Engineer</h6>
                  </div>
                </div>

                <p>Kral! </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/referans1.png"
                    width="70"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Hürkan Doğan</h6>
                    <h6>Senior Frontend Engineer</h6>
                  </div>
                </div>

                <p> Adam GİBİ adam</p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/referans3.png"
                    width="70"
                    height="50"
                    className=" rounded-2"
                  />
                  <div>
                    <h6>Mahmut Tuncer</h6>
                    <h6>Türkücü</h6>
                  </div>
                </div>
                <p>Tanımam etmem.</p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
