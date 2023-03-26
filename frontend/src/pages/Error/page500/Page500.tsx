import {FC} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'


const ErrorPage500: FC = () => {
    return ( 
        <>
            <Container className="main-content mt-5 py-5 my-auto main-content">
                <Row className='py-5'>
                    <Col lg={12} className="m-auto text-center mt-3">
                        <h1 className="display-1 text-bolder text-dark">Error 500</h1>
                        <h2 className="text-dark">The page you are looking for is temporarily unavailable.</h2>
                        <p className="lead text-dark">We suggest you to go to the homepage while we solve this issue.</p>
                        <Button className="btn btn-success btn-outline-success mt-4">Go to Homepage</Button>
                        {/* <NavLink type="button" classname="btn btn-outline-dark mt-4">Go to Homepage</NavLink> */}
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default ErrorPage500;