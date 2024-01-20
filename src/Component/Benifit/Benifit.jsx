import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import './Benifit.css'

function Benifit() {
    const data = [

        {
            icon: "fa-solid fa-circle-check px-3 text-primary fs-10",
            title: "100% Project Based Learning",
            para: "We builsd more than 2 real world major projects in each language and don't worry that the poject dev.."
        },
        {
            icon: "fa-solid fa-circle-check px-3 text-primary fs-10",
            title: "Live Call Supports",
            para: "After joining our course you will get lot of codding problems because our course is 100% project based.."
        },
        {
            icon: "fa-solid fa-circle-check px-3 text-primary fs-10",
            title: "High Chance of Selection",
            para: "If you will do hard works, And you will be follow our instruction, High chance of selection..."
        },
        {
            icon: "fa-solid fa-circle-check px-3 text-primary fs-10",
            title: "Video Access Timing ",
            para: " You can access our videos 24*7 life time,Once you complete your registration.."
        },
    ]




    return (
        <div className='bg-yellow'>
            <Container  >
                <div >
                    <Row  >
                        <h1 className='py-4 px-3 mt-2'>Benifits of learning from</h1>
                        <Col className=''>
                            {
                                data.map((item, index) => {
                                    return (
                                        <ul className='list-unstyled d-flex justify-content'>
                                            <li><i className={item.icon}></i></li>
                                            <li> <h4> {item.title}</h4>
                                                <p className='fw-bold pr-5'>{item.para}</p></li>,
                                        </ul>
                                    )
                                })
                            }
                        </Col>
                        <Col>
                            <div className='mx-5 my-5  '>
                                <img src="co.jpg" alt="codder" width="450px" className='mx-5 rounded-circle hover' />
                            </div>
                        </Col>



                    </Row>
                </div>

            </Container>
        </div>
    )
}


export default Benifit