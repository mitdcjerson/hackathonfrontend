import { Card, Col, Container, Row } from 'react-bootstrap';
import check from "../assets/verified.svg";
import nodata from "../assets/no-data.svg";
import uncertain from "../assets/uncertain.svg";
import { FACTS, FAKE, UNCERTAIN } from "../constants";

const Status = (props) => {

    const displayStatImage = (status) => {
        if (status == FACTS) {
            return check;
        }
        else if (status == FAKE) {
            return nodata;
        }
        else if (status == UNCERTAIN) {
            return uncertain;
        }
    };

    const displayStatMessage = (status) => {
        if (status.status == FACTS) {
            return(
                <>
                    <Card.Text className='fs-5 fw-bold'>
                        {`I am `} 
                        <span className='fs-3 text-success'>
                            {status.result.toFixed(2)}%
                        </span>
                        {` confident`}
                    </Card.Text>
                    <Card.Text className='fs-5'>that this is a <div className='fs-4 fw-bold text-success d-inline'>Fact</div></Card.Text>
                </>
            );
        }
        else if (status.status == FAKE) {
            return(
                <>
                    <Card.Text className='fs-5 fw-bold'>
                        {`I am `} 
                        <span className='fs-3 text-danger'>
                            {status.result.toFixed(2)}%
                        </span>
                        {` confident`}
                    </Card.Text>
                    <Card.Text className='fs-5'>that this is <div className='fs-4 fw-bold text-danger d-inline'>Fake</div></Card.Text>
                </>
            );
        }
        else if (status.status == UNCERTAIN) {
            return(
                <>
                    <Card.Text className='fs-5 fw-bold'>
                        {`I am `} 
                        <span className='fs-3 text-warning'>
                            Uncertain
                        </span>
                    </Card.Text>
                    <Card.Text className='fs-5'>about this one.</Card.Text>
                </>
            );
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Card className="mt-5">
                        <Card.Body>
                        <Row>
                            <Col>
                                <img src={displayStatImage(props.stat.status)} style={{width: "100%"}}/>
                            </Col>
                            <Col className='my-auto text-center'>
                                {displayStatMessage(props.stat)}
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Status;