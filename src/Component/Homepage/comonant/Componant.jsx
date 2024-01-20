import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Componant.css'

function Componant() {
  const data = [{
    icon:"fa-brands fa-php fs-1 ",
    title:"PHP",
    subtitle:"course duration 3 month"
  },
  {
    icon:"fa-brands fa-java fs-1 ",
    title:"Java",
    subtitle:"course duration 3 month"
  },
  {
    icon:"fa-brands fa-python fs-1 ",
    title:"Python",
    subtitle:"course duration 3 month"
  },
  {
    icon:"fa-brands fa-node-js fs-1 ",
    title:"Java Script",
    subtitle:"course duration 1 month"
  },
  {
    icon:"fa-brands fa-css3-alt fs-1 ",
    title:"CSS",
    subtitle:"course duration 1 month"
  }];


  const Column = ({demo})=>{
    return (
      <>
        <Col className='text-center p-5  shadow my-3 mx-2 border rounded mt-5 mb-5 bg '>
          <div className="icon-box py-4 px-1 mx-4 mb-3 text-blue fw-bold lg  ">
            <i class={demo.icon}></i>
          </div>
          <h2 className='text-red fs-3 text-shadow title'>{demo.title}</h2>
          <p className='text-blue '>{demo.subtitle}</p>
        </Col>
      </>
    )
  }

  return (
    <div>
      
      <Container >
        <Row>
          {
            data.map((item, index) => {
              return <Column demo={item} key={index} />
            })
          }

        </Row>
      </Container>
    </div>
  )
}

export default Componant