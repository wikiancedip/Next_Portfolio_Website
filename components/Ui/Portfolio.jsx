import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/portfolio.module.css'

const Portfolio = () => {
  return <section id="portfolio">
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <SectionSubtitle subtitle=' My Portfolio'/>
                <h4 className='mt-4'>Some of my distinguished works</h4>
                <h5 className='mb-4'>I&apos;ll update it shortly</h5>
            </Col>

            <Col lg='6' md='6'>
                <div className={`${classes.tab__btns} text-end`}>
                    <button className={`${classes.tab__btn__active} secondary__btn text-white`}>Web Application</button> 
                    <button className="secondary__btn text-white">Web Design</button>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Portfolio
