import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/services.module.css'
import ServicesItem from './ServicesItem'

const Services = () => {
  return <section id="services">
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className={`${classes.services__container}`}>
            <div>
              <ServicesItem title='Web Development' icon='ri-apps-line' />
              <ServicesItem title='DevOps Solutions' icon='ri-computer-line' />
            </div>
            <ServicesItem title='Front-End Development' icon='ri-code-s-slash-line' />
          </div>
        </Col>

        <Col lg='6' md='6' className={`${classes.service__title}`}>
          <SectionSubtitle subtitle='What I do' />
          <h3 className='mb-0 mt-4'>Better Design,</h3>
          <h3 className='mb-4'>Better User Experience</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse eius facilis magni labore cum beatae animi praesentium omnis,
            minus optio eveniet? Rem hic necessitatibus praesentium maxime.
            Sunt sit incidunt dolores, provident enim quibusdam minus eaque similique aliquam. Facere, error dolore?</p>
        </Col>
      </Row>
    </Container>

  </section>
}

export default Services
