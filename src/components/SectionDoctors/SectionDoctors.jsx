import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'
import { doctors } from '../../data/doctors'
import DoctorCard from '../DoctorCard/DoctorCard'

const SectionDoctors = () => {
  return (
    <div className='py-5 bg-sec-blue'>
        <Container>
            <Title title="Doctors" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, culpa!" />
            <Row lg={4} md={2} xs={1} className='g-4 mt-4'>
              {
                doctors.map((element, index) => (
                  <Col key={index}>
                    <DoctorCard name={element.name} section={element.section} img={element.img} />
                  </Col>
                ))
              }
            </Row>
        </Container>
    </div>
  )
}

export default SectionDoctors