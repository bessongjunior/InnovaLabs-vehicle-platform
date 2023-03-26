import { FC } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// interface ResetPasswordProps {
    
// }
 
// const ResetPassword: FunctionComponent<ResetPasswordProps> = () => {
    const ResetPassword: FC = () => {
    return ( 
        <>
            <Container className="mb-4 main-content mt-0">
                <Row className="justify-content-center">
                    <Col xl={5} lg={6} md={7} className="mx-auto">
                        <Card className="mt-8 shadow-0">
                            <Card.Header className="card-header p-0 position-relative mt-n5 mx-3 z-index-2">
                                <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1 text-center py-4">
                                    <h4 className="font-weight-bolder text-white mt-1">Reset Password</h4>
                                    <p className="mb-1 text-sm text-white">Enter your new password then submit</p>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body">
                                {/* <div className="text-start my-2">
                                    <p>By entering this password, Rememberits will be</p>
                                    <p>your recent password to Sign In here!</p>
                                </div> */}
                                <form role="form" className="text-start mt-2">
                                    <div className="input-group input-group-static mb-4">
                                        {/* <label className="form-label">New Password</label> */}
                                        <label>Corfirm New Password</label>
                                        <input type="password" className="form-control" aria-label="Password" />
                                    </div>
                                    <div className="input-group input-group-static mb-4">
                                        {/* <label className="form-label">Corfirm New Password</label> */}
                                        <label>Corfirm New Password</label>
                                        <input type="password" className="form-control" aria-label="Password" />
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn bg-gradient-dark w-100 mt-3 mb-0">Submit</button>
                                    </div>
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
 
export default ResetPassword;