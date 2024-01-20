import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap'
import './Services.css'


function Services() {
    const data = [

        {
            icon: "fa-solid fa-book-open-reader border-white",
            Head: " Front end",
            pars: "CSS, JavaScript,Bootstrap,HTML,Jquery,React or Angular, that's all course duration in 3 months with 2 live project.you should be cooperate us and submit assignment time to time."
        },
        {
            icon: "fa-solid fa-desktop  border-white",
            Head: "Backend",
            pars: "JAVA,Python, .Net, C,C++, that all duration course 6 month with 2 live project and you should be cooperate us and submit assignment time to time."
        },
        {
            icon: "fa-solid fa-handshake  border-white",
            Head: "Spoken",
            pars: "Mock interview  and English spoken, Group Disscussion Classes to improve your 'Fluency and Confidence' you should be cooperate us and compulsury  join class."
        }
    ];
    const Our = ({ demo }) => {
        return (
            <>

                <Col className='bg-gray me-5 p-4 rounded-5'>
                    <h1><i className={demo.icon}></i></h1>
                    <h3>{demo.Head}</h3>
                    <p>{demo.pars}</p>
                </Col>
            </>
        )
    }
    return (
        <>
            <div className='service bg-dark py-5'>
                <Container>
                    <div  className='pt-2  pb-5'>
                        <h1 className=''>Our Services</h1>
                        <p>We are providing all computer language course with 100% job gaurantee,
                            we will help to imporove your skills and to make <br /> a good devloper,
                            After joing course you will get video access to practice and we are providing fully practicle knowledge.
                            We <br /> provide interview calls up to you will not get job and also provide support to get a job.
                        </p>
                    </div>
                    <Row>
                        {
                            data.map((item, index) => {
                                return <Our demo={item} key={index} />
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Services