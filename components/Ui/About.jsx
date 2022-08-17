import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import classes from '../../styles/about.module.css'
import SectionSubtitle from './SectionSubtitle'
import Image from 'next/image'


import img1 from '../../public/img1.jpeg'
import img2 from '../../public/img2.jpeg'
import img3 from '../../public/img3.jpeg'
import img4 from '../../public/img4.jpg'


const About = () => {
    return <section id="about">
        <Container>
            <Row>
                <Col lg='6' className={`${classes.about__content}`}>
                    <SectionSubtitle subtitle='About Me' />
                    <h3 className='mt-4'>I&apos;m here</h3>
                    <h4 className='mb-4'>to help your next project</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis reprehenderit aliquid, at suscipit expedita similique non ea pariatur!
                        Placeat, fugit? Architecto harum error natus repellendus tenetur,
                        incidunt repudiandae voluptas voluptatibus totam, maxime vel recusandae autem ut. Aliquid quia modi earum?</p>
                    <div className="d-flex align-items-center gap-5">
                        <div>
                            <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal mb-0'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                Problem Solving
                            </h6>
                            <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal mb-0'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                Search A Lot
                            </h6>
                        </div>

                        <div>
                            <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal mb-0'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                Creative Idea
                            </h6>
                            <h6 className='d-flex align-items-center gap-2 mt-3 fw-normal mb-0'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                High Quality
                            </h6>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="primary__btn"><Link href='#portfolio'>My Portfolio</Link></button>
                        <button className="secondary__btn"><Link href='#My_Cv'>Download CV</Link></button>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className={` ${classes.about__img__gallery} d-flex gap-4 jutify-content-end`}>
                        <div className='d-flex flex-column mb-3'>
                            <div className={`${classes.about__img} ${classes.about__img__box}`}>
                                <Image src={img4} alt='about-img'/>
                            </div>
                            <div className={`${classes.about__img} ${classes.about__img__box}`}>
                                <Image src={img2} alt='about-img'/>
                            </div>
                        </div>

                        <div className='d-flex flex-column mb-3'>
                            <div className={`${classes.about__img} ${classes.about__img__box}`}>
                                <Image src={img3} alt='about-img'/>
                            </div>
                            <div className={`${classes.about__img} ${classes.about__img__box}`}>
                                <Image src={img1} alt='about-img'/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default About
