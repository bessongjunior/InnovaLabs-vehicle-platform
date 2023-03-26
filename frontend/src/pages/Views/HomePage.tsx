import { FC } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap'


const HomePage: FC = () => {
    return (
        <>
            {/* carousel start */}
            {/* carousel end */}

            {/* pricing start */}
            <Container className="">
                {/* pricing plan tab to select pricing plan start */}
                <Row className="mb-5">
                    <Col lg={4} md={6} className="col-7 mx-auto text-center">
                        <div className="nav-wrapper mt-5 position-relative z-index-2">
                            <ul className="nav nav-pills nav-fill flex-row p-1" id="tabs-pricing" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link mb-0 active" id="tabs-iconpricing-tab-1" data-bs-toggle="tab" href="#monthly" role="tab" aria-controls="monthly" aria-selected="true">
                                        Monthly
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mb-0" id="tabs-iconpricing-tab-2" data-bs-toggle="tab" href="#annual" role="tab" aria-controls="annual" aria-selected="false">
                                        Annual
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                {/* pricing plan tab end */}
                <div className="tab-content tab-space">
                    <div className="tab-pane active" id="monthly">
                        <Row className="row">
                            <Col lg={4} className="mb-lg-0 mb-4">
                                <Card className="shadow-lg">
                                    <span className="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">Starter</span>
                                    <Card.Header className="text-center pt-4 pb-3">
                                        <h1 className="font-weight-bold mt-2">
                                            <small className="text-lg align-top me-1">$</small>59<small className="text-lg">/mo</small>
                                        </h1>
                                    </Card.Header>
                                    <Card.Body className="text-lg-start text-center pt-0">
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">2 team members</span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">20GB Cloud storage </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Integration help </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">remove</i>
                                            <span className="ps-3">Sketch Files </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">remove</i>
                                            <span className="ps-3">API Access </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">remove</i>
                                            <span className="ps-3">Complete documentation </span>
                                        </div>
                                        <a href="javascript:;" className="btn btn-icon bg-gradient-dark d-lg-block mt-3 mb-0">
                                            Join
                                            <i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} className="mb-lg-0 mb-4">
                                <div className="card bg-gradient-dark shadow-lg">
                                    <span className="badge rounded-pill bg-primary w-30 mt-n2 mx-auto">Premium</span>
                                    <div className="card-header text-center pt-4 pb-3 bg-transparent">
                                        <h1 className="font-weight-bold mt-2 text-white">
                                            <small className="text-lg align-top me-1">$</small>89<small className="text-lg">/mo</small>
                                        </h1>
                                    </div>
                                    <div className="card-body text-lg-start text-center pt-0">
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">10 team members</span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">40GB Cloud storage </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">Integration help </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">Sketch Files </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">remove</i>
                                            <span className="ps-3 text-white">API Access </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">remove</i>
                                            <span className="ps-3 text-white">Complete documentation </span>
                                        </div>
                                        <a href="javascript:;" className="btn btn-icon bg-gradient-primary d-lg-block mt-3 mb-0">
                                            Try Premium
                                            <i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="mb-lg-0 mb-4">
                                <div className="card shadow-lg">
                                    <span className="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">Enterprise</span>
                                    <div className="card-header text-center pt-4 pb-3">
                                        <h1 className="font-weight-bold mt-2">
                                            <small className="text-lg align-top me-1">$</small>99<small className="text-lg">/mo</small>
                                        </h1>
                                    </div>
                                    <div className="card-body text-lg-start text-center pt-0">
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Unlimited team members</span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">100GB Cloud storage </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Integration help </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Sketch Files </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">API Access </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Complete documentation </span>
                                        </div>
                                        <a href="javascript:;" className="btn btn-icon bg-gradient-dark d-lg-block mt-3 mb-0">
                                            Join
                                            <i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="tab-pane" id="annual">
                        <Row className="">
                            <Col lg={4} className="mb-lg-0 mb-4">
                                <div className="card shadow-lg">
                                    <span className="badge rounded-pill bg-light text-dark w-30 mx-auto">Starter</span>
                                    <div className="card-header text-center pt-4 pb-3">
                                        <h1 className="font-weight-bold mt-2">
                                            <small className="text-lg align-top me-1">$</small>119<small className="text-lg">/mo</small>
                                        </h1>
                                    </div>
                                    <div className="card-body text-lg-start text-center pt-0">
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">2 team members</span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">20GB Cloud storage </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">remove</i>
                                            <span className="ps-3">Integration help </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">remove</i>
                                            <span className="ps-3">Sketch Files </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">remove</i>
                                            <span className="ps-3">API Access </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">remove</i>
                                            <span className="ps-3">Complete documentation </span>
                                        </div>
                                        <a href="javascript:;" className="btn btn-icon bg-gradient-dark d-lg-block mt-3 mb-0">
                                            Join
                                            <i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="col-lg-4 mb-lg-0 mb-4">
                                <div className="card bg-gradient-dark shadow-lg">
                                    <span className="badge rounded-pill bg-primary w-30 mx-auto">Premium</span>
                                    <div className="card-header text-center pt-4 pb-3 bg-transparent">
                                        <h1 className="font-weight-bold mt-2 text-white">
                                            <small className="text-lg align-top me-1">$</small>159<small className="text-lg">/mo</small>
                                        </h1>
                                    </div>
                                    <div className="card-body text-lg-start text-center pt-0">
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">10 team members</span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">40GB Cloud storage </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">Integration help </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">done</i>
                                            <span className="ps-3 text-white">Sketch Files </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">remove</i>
                                            <span className="ps-3 text-white">API Access </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto text-white">remove</i>
                                            <span className="ps-3 text-white">Complete documentation </span>
                                        </div>
                                        <a href="javascript:;" className="btn btn-icon bg-gradient-primary d-lg-block mt-3 mb-0">
                                            Try Premium
                                            <i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="col-lg-4 mb-lg-0 mb-4">
                                <div className="card shadow-lg">
                                    <span className="badge rounded-pill bg-light text-dark w-30 mx-auto">Enterprise</span>
                                    <div className="card-header text-center pt-4 pb-3">
                                        <h1 className="font-weight-bold mt-2">
                                            <small className="text-lg align-top me-1">$</small>399<small className="text-lg">/mo</small>
                                        </h1>
                                    </div>
                                    <div className="card-body text-lg-start text-center pt-0">
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Unlimited team members</span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">100GB Cloud storage </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Integration help </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Sketch Files </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">API Access </span>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <i className="material-icons my-auto">done</i>
                                            <span className="ps-3">Complete documentation </span>
                                        </div>
                                        <a href="javascript:;" className="btn btn-icon bg-gradient-dark d-lg-block mt-3 mb-0">
                                            Join
                                            <i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            {/* pricing end */}

            {/* Product start */}
            {/* product end */}

            {/* Deal of the day */}
            {/* end deal of the day */}

            {/* testimonies */}
            {/* end testtimonies */}

            {/* partners start */}
            {/* end partners  */}
        </>
    );
}

export default HomePage;