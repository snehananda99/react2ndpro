import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './Client.css'

function Client() {

    const data = [{
        imge: "Kumar Nishant.jpg",
        para: "Expert in java and front end join our courses amdmake your self confident on coding and get your job",

        title: "KumarNishant"
    },
    {
        imge: "java-sanjay.jpg",
        para: "Expert in Python And front end join our courses amdmake your self confident on coding and get your job",
        title: "Sanjay Navale"
    },
    {
        imge: "Prashant Kumar.jpeg",
        para: " All CNC Problrm issues solver join our courses amdmake your self confident on coding and get your job.",
        title: "Prashant Kumar"
    }
    ]

    const Expert = ({ demo }) => {
        return (
            <>
                <Col className=' text-center m-4 rounded-5 bg-gray'>
                    <img src={demo.imge} alt="img" width="100px" height="100px" className='align-item-center my-4 rounded-circle bg-dark' />
                    <div className=' info p-4'><p>{demo.para}</p></div>
                    <h3 className='pb-5'>{demo.title}</h3>

                </Col>
            </>
        )
    }
    return (
        <div>

            <Container className='text-center align-item-center'>
                <Row className='p-5'>
                    <div >
                        <h1 className='text-success'>Trainers</h1>
                        <p className="p-3 fs-5">Boost your Knowlege and Skills and credibility by join our experts webinar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum quod voluptas veritatis obcaecati eaque suscipit, doloremque voluptates. Odit ipsa facilis asperiores pariatur a culpa vitae iusto nostrum. Corrupti, dolores.</p>
                    </div>

                    {
                        data.map((item, index) => {
                            return <Expert demo={item} key={index} />
                        })
                    }

                </Row>
            </Container>
        </div>
    )
}

export default Client