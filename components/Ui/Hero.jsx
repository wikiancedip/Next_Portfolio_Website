import React from 'react'
import SectionSubtitle from './SectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import Mee2img from '../../public/Mee2.jpg'
import Link from 'next/link'
import classes from '../../styles/hero.module.css'


const Hero = () => {
  return <section className={`${classes.hero}`}>
    <Container>
      <Row>



        {/* ==========Hero__Content======== */}
        <Col lg='6' md='6' >
          <div className={`${classes.hero__content}`}>
            <SectionSubtitle subtitle="Hello" />
            <h2 className='mt-3 mb-3'>I&apos;m Debarghya Das</h2>
            <h5 className='mb-4'>Jr. Front-End Developer</h5>
            <p>I am a Junior developer in Front-End part. I love to work in UI Designs, love to learn new things & dreams to becoming a Full Stack Developer!</p>
            <div className='mt-5'>
              <button className="primary__btn"><Link href='#'>Hire Me</Link></button>
              <button className="secondary__btn"><Link href='#'>Download Resume</Link></button>
            </div>
          </div>
        </Col>

        {/* ==========Hero__img======== */}
        <Col lg='6' md='6'>
          <div className={`${classes.hero__img} text-end`} >
            <Image alt='HeroImg' src={Mee2img} width='400' height='400' />
            <div className={`${classes.hero__skills}`}>
              <h6>Skills</h6>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
              <span>
                <i className="ri-bar-chart-line"></i>
              </span>
            </div>

            <div className={`${classes.hero__experience} d-flex aling-items-center gap-3`}>
              <span><i className="ri-lightbulb-flash-line"></i></span>
              <div className="bg-transparent">
                <h6>Experience</h6>
                <h5>1 Years</h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Hero
