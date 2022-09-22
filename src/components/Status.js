import { Card, Col, Container, Row } from 'react-bootstrap';
import check from "../assets/verified.svg";
import nodata from "../assets/no-data.svg";
import uncertain from "../assets/no-data.svg";

const Status = (props) => {

    const displayStatImage = (status) => {
        if (status == "FACT") {
            return check;
        }
        else if (status == "FAKE") {
            return nodata;
        }
        else if (status == "UNCERTAIN") {
            return uncertain;
        }
    };

    const displayStatMessage = (status) => {
        if (status == "FACT") {
            return(
                <>
                    <Card.Title>Status: <div className='fw-bold text-success d-inline'>Fact</div></Card.Title>
                    <Card.Text className='fs-1 fw-bold text-success'>
                        59%
                    </Card.Text>
                </>
            );
        }
        else if (status == "FAKE") {
            return(
                <>
                    <Card.Title>Status: <div className='fw-bold text-danger d-inline'>Fake</div></Card.Title>
                    <Card.Text className='fs-1 fw-bold text-danger'>
                        59%
                    </Card.Text>
                </>
            );
        }
        else if (status == "UNCERTAIN") {
            return(
                <>
                    <Card.Title>Status: <div className='fw-bold text-warning d-inline'>Uncertain</div></Card.Title>
                    <Card.Text className='fs-1 fw-bold text-warning'>
                        59%
                    </Card.Text>
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
                                <img src={displayStatImage(props.stat)} style={{width: "100%"}}/>
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