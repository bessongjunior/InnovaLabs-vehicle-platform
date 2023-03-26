import { FC } from "react";
import { Container, Col, Row, Card, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

// interface SignUpProps {
    
// }
 
// const SignUp: FC<SignUpProps> = () => {
    const SignUp: FC = () => {
    return ( 
        <>
            <Container className="mb-4   mt-0">
                <Row className="justify-content-center">
                    <Col xl={5} lg={6} md={7} className="mx-auto">
                        <Card className="mt-8 shadow-0">
                            <Card.Header className="card-header p-0 position-relative mt-n5 mx-3 z-index-2">
                                <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1 text-center py-4">
                                    <h4 className="font-weight-bolder text-white mt-1">Sign Up</h4>
                                    <p className="mb-1 text-sm text-white">Enter your credentials to Sign Up</p>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <form role="form">
                                    <div className="input-group input-group-static mb-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control" aria-label="Name" />
                                    </div>
                                    <div className="input-group input-group-static mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" aria-label="Email" />
                                    </div>
                                    <div className="input-group input-group-static mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" aria-label="Password" />
                                    </div>
                                    <div className="form-check text-start ps-0">
                                        <input className="form-check-input bg-dark border-dark" type="checkbox" value="" id="flexCheckDefault" checked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I agree the <a href="#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                                    </div>
                                    <p className="justify-content-center text-center mt-2">or</p>
                                    <Row className="mt-3">
                                        <Col className="col-6">
                                            <a href="#" className="btn btn-success w-100 ">Sign up with f</a>
                                        </Col>
                                        <Col className="col-6">
                                        <a href="#" className="btn btn-danger w-100 ">Sign up with g</a>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                            <Card.Footer className="card-footer text-center pt-0 px-lg-2 px-1">
                                <p className="mb-4 text-sm mx-auto">
                                    Already have an account?
                                    <a href="#" className="text-success text-gradient font-weight-bold ms-3">Sign In</a>
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default SignUp;