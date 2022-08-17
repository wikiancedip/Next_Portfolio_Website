import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import classes from './footer.module.css'
import Link from 'next/link'

const NAV__LINK = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#portfolio',
        display: 'Portfolio'
    },
    {
        path: '#contact',
        display: 'Contact'
    }
]


const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer>
            <Container>
                <Row>
                    {/* ========Footer__Top========= */}

                    <Col lg='6' className={`${classes.footer__top}`}>
                        <div className={`${classes.nav__menu}`}>
                            {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </Col>

                    <Col lg='6' className={`${classes.footer__top}`}>
                        <div className={`${classes.footer__creator}`}>
                            <h6>Created by Debarghya</h6>
                        </div>
                    </Col>
                        {/* ========Footer_bottom======== */}
                        <Col lg='12'>
                            <div className={`${classes.footer__copyright}`}>
                                <p>&copy; Copyright {year} - Developed by Debarghya Das. All rights reserved.</p>
                            </div>
                        </Col>


                </Row>
            </Container>
        </footer>
    )
}
export default Footer