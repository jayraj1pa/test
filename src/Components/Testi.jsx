import React from 'react'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';



function Testi() {


    const testimonials = [
        {
          quote:
            "Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures.",
          author: "Quresh Goga",
          company: "Shipcom Wireless",
          image: "https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp",
        },
        {
          quote:
            "Ombrulla and Green Palm collaborate on an AI ship inspection project, employing image and video analysis to detect damages and anomalies. We are highly satisfied with the project's outcomes and the benefits it brings.",
          author: "Manoj Menon",
          company: "Green Palm",
          image:
            "https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp",
        },
        {
          quote:
            "Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.",
          author: "Joseph",
          company: "Planet Fitness",
          image:
            "https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp",
        },
        {
          quote:
            "Ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.",
          author: "Tony Michael",
          company: "CEO, The Cotillion Hotels, New York, USA",
          image: "https://www.ombrulla.com/_astro/wild-leaf.85d7f76f_Z1vakWD.webp",
        },
        {
          quote:
            "We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.",
          author: "David Thomas",
          company: "Managing Director Best Western, Kansas, USA",
          image:
            "https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp",
        },
        {
          quote:
            "Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.",
          author: "James Joseph",
          company: "Managing Director, Terranz Dubai, UAE",
          image:
            "https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp",
        },
        {
          quote:
            "We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.",
          author: "Vinod MN",
          company: "Managing Director, AZEL IT Solutions",
          image: "https://www.ombrulla.com/_astro/azelit.c51d4d1e_ZFoIpv.webp",
        },
      ];



      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const slickDotsStyle = {
        top: 'auto',
        bottom: '-50px', // Adjust the value as needed
        fontSize: '20px', // Adjust the size of the slick dots
      };
    
      return (
        <Container fluid style={{ backgroundColor: "#172554", marginTop: "40px", paddingTop: "85px", paddingBottom: "100px" }}>
          <div className='mt-5' style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
            <div className='mb-2 me-2' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
            <h6 style={{ color: "white" }}>OUR TESTIMONIALS</h6>
          </div>
    
          <h1 className='mt-4' style={{ color: "white", marginRight: "10px", marginLeft: "auto", textAlign: "right" }}>What Customers Say About Us</h1>
    
          <Row className="justify-content-center mt-5">
            <Col xs={12} sm={10} md={10} lg={10}>
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-2">
                    <Card className="rounded-top custom-card">
                      {/* Adjust the height value in the CSS */}
                      <Card.Body className="px-4 py-4">
                        <div style={{ fontSize: '30px' }}>
                          <i className="fa-solid fa-quote-left text-primary"></i>
                        </div>
                        <Card.Text style={{ fontSize: "30px" }} className="pb-4 text-muted">{testimonial.quote}</Card.Text>
                      </Card.Body>
                      <Card.Footer style={{ backgroundColor: "#CBD5E1" }} className=" d-flex py-3">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="rounded-circle m-2"
                          style={{ width: '80px', height: '80px' }}
                        />
                        <div className="ms-2 mt-2">
                          <Card.Title>{testimonial.author}</Card.Title>
                          <Card.Subtitle className="text-primary">{testimonial.company}</Card.Subtitle>
                        </div>
                      </Card.Footer>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
    
          {/* Inline style for slick dots */}
          <style>
            {`.slick-dots { top: ${slickDotsStyle.top} !important; bottom: ${slickDotsStyle.bottom}; }`}
            {`.custom-card { height: 65vh !important; }`} {/* Adjusted the height value */}
          </style>
    
        </Container>
      );
    }
    
    export default Testi;