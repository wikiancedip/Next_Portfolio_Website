import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/contact.module.css'
import Form from './Form'

const Contact = () => {
    return <section id="contact" className={`${classes.contact}`}>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle='Contact me' />
                    <h3 className='mt-4 mb-4'>Contact with me</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Odit qui excepturi repellat,
                        laboriosam eveniet totam illo numquam tenetur,
                        tempore iusto aspernatur veniam iste quae architecto.</p>

                    <ul className={`${classes.contact__info__list}`}>
                        <li className={`${classes.contact__info__item}`}>
                            <span><i className="ri-map-pin-line"></i></span>
                            <p>Sodpur | Kolkata | India</p>
                        </li>
                        <li className={`${classes.contact__info__item}`}>
                            <span><i className="ri-mail-line"></i></span>
                            <p>dasdebarghya15@gmail.com</p>
                        </li>
                        <li className={`${classes.contact__info__item}`}>
                            <span><i className="ri-phone-line"></i></span>
                            <p>+91 7980699928</p>
                        </li>
                    </ul>

                    <div className={`${classes.social__links}`}>
                        <Link href='#'>
                            <i className="ri-facebook-line"></i>
                        </Link>
                        <Link href='#'>
                            <i class="ri-twitter-line"></i>
                        </Link>
                        <Link href='#'>
                            <i class="ri-github-line"></i>
                        </Link>
                        <Link href='#'>
                            <i className="ri-linkedin-line"></i>
                        </Link>
                        <Link href='#'>
                            <i className="ri-instagram-line"></i>
                        </Link>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <Form />
                </Col>
            </Row>
        </Container>
    </section>
}

export default Contact