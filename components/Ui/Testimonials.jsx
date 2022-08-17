import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import Image from 'next/image'
import network from '../../public/connect.png'
import Slider from "react-slick";
import classes from '../../styles/testimonials.module.css'

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true
    };

    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6' className={`${classes.testimomial__img}`}>
                    <Image alt='network-img' src={network} width='700' height='420' />
                </Col>


                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle='Testimonials' />
                    <h4 className='mt-4 mb-5'>What my client says</h4>
                    <Slider {...settings}>
                        <div className={`${classes.testimonials__item}`}>
                            <div className={`${classes.testimonial__client}`}>
                                <Image alt='client-img'
                                    src='/Mee2.jpg'
                                    width='50'
                                    height='50'
                                    className='rounded-5' />
                                <div>
                                    <h6>Jhon Doe</h6>
                                    <h6>Software Engineer</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda laudantium veniam eligendi ipsum.
                                Saepe sint, neque repudiandae  itaque facilis aut necessitatibus asperiores eveniet
                                cupiditate minus ducimus dignissimos perferendis quidem amet molestias, facere tempore, quis doloribus!</p>
                        </div>


                        <div className={`${classes.testimonials__item}`}>
                            <div className={`${classes.testimonial__client}`}>
                                <Image alt='client-img'
                                    src='/Mee2.jpg'
                                    width='50'
                                    height='50'
                                    className='rounded-5' />
                                <div>
                                    <h6>Henry Nicolas</h6>
                                    <h6>Backend Engineer</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda laudantium veniam eligendi ipsum.
                                Saepe sint, neque repudiandae  itaque facilis aut necessitatibus asperiores eveniet
                                cupiditate minus ducimus dignissimos perferendis quidem amet molestias, facere tempore, quis doloribus!</p>
                        </div>


                        <div className={`${classes.testimonials__item}`}>
                            <div className={`${classes.testimonial__client}`}>
                                <Image alt='client-img'
                                    src='/Mee2.jpg'
                                    width='50'
                                    height='50'
                                    className='rounded-5' />
                                <div>
                                    <h6>Sarah Taylor</h6>
                                    <h6>Web Developer</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda laudantium veniam eligendi ipsum.
                                Saepe sint, neque repudiandae  itaque facilis aut necessitatibus asperiores eveniet
                                cupiditate minus ducimus dignissimos perferendis quidem amet molestias, facere tempore, quis doloribus!</p>
                        </div>

                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Testimonials
