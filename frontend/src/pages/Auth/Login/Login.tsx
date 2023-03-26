import { FC, useState } from 'react'
import { Container, Col, Row, Card, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
// @import 'bootstrap/'

// interface SignInProps {

// }

// const SignIn: FunctionComponent<SignInProps> = () => {

const SignIn: FC = () => {

    return (
        <>
            <Container className="mb-4 main-content mt-0">
                <Row className="justify-content-center">
                    <Col xl={5} lg={6} md={7} className="mx-auto">
                        <Card className="mt-8 shadow-0">
                            <Card.Header className="card-header p-0 position-relative mt-n5 mx-3 z-index-2">
                                <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1 text-center py-4">
                                    <h4 className="font-weight-bolder text-white mt-1">Sign In</h4>
                                    <p className="mb-1 text-sm text-white">Enter your email and password to Sign In</p>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <form role="form" className="text-start">
                                    <div className="input-group input-group-static mb-4">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="john@email.com" />
                                    </div>
                                    <div className="input-group input-group-static mb-4">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="•••••••••••••" />
                                    </div>
                                    <div className="form-check form-switch d-flex align-items-center mb-3">
                                        <input className="form-check-input" type="checkbox" id="rememberMe"  w-100  />
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember me</label>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn bg-gradient-dark w-100 mt-3 mb-0">Sign in</button>
                                    </div>
                                    <p className="text-sm mt-3 mb-0">Password or email forgotten? <a href="#" className="text-dark font-weight-bolder me-1 mx-3">Reset Password</a></p>
                                </form>
                            </Card.Body>
                            <Card.Footer className="card-footer text-center pt-0 px-lg-2 px-1">
                                <p className="mb-4 text-sm mx-auto">
                                    Don't have an account?
                                    <a href="#" className="text-success text-gradient font-weight-bold ms-3">Sign up</a>
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SignIn;
