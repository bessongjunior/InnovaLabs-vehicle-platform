import { Container, Row, Col, Card } from "react-bootstrap";
const ResetRequest = () => {
    return ( 
        <>
            <Container className="mb-4 main-content mt-0">
                <Row className="justify-content-center">
                    <Col xl={5} lg={6} md={7} className="mx-auto">
                        <Card className="mt-8 shadow-0">
                            <Card.Header className="card-header p-0 position-relative mt-n5 mx-3 z-index-2">
                                <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1 text-center py-4">
                                    <h4 className="font-weight-bolder text-white mt-1">Reset Password Request</h4>
                                    <p className="mb-1 text-sm text-white">Enter your email then submit</p>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <div className="text-start my-3">
                                    <p>We will send you an email confirmation link via mail.</p>
                                    <p>Please endeavor to validate before an hour time.</p>
                                </div>
                                <form role="form" className="text-start">
                                    <div className="input-group input-group-static mb-4">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="john@email.com" />
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
 
export default ResetRequest;
// 