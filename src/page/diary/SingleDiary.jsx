import { LinkContainer } from "react-router-bootstrap"
import { 
    Form,
    Button,
    Container,
    Row,
    Col,
} from "react-bootstrap"

const SingleDiary = ({status}) => {
    let form_disable = status == "show" ? true :false; 
    return (
        <div className="bg-primary pt-3">
            <div className="d-flex">
                <h3 className="me-auto">日記<small className="fs-6">{status == "show" ? "詳細" : "編集"}</small></h3>
                {
                    status == "show" ?
                    <LinkContainer className="mx-1" to="/diary/1/edit">
                        <Button variant="secondary">編集</Button>
                    </LinkContainer>:
                    <LinkContainer className="mx-1" to="/diary/1">
                        <Button variant="secondary">詳細</Button>
                    </LinkContainer>
                }
                <LinkContainer className="mx-1" to="/diary">
                    <Button variant="secondary">一覧</Button>
                </LinkContainer>
            </div>
            <Form>
                <Container>
                    <Row>
                        <Col md={6}>
                            image
                            {
                                status == "show" ?
                                null:
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Card Title</Form.Label>
                                    <Form.Control type="file" disabled={form_disable}/>
                                </Form.Group>
                            }
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Card Title</Form.Label>
                                <Form.Control type="text" disabled={form_disable}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>card text </Form.Label>
                                <Form.Control as="textarea" rows={3} disabled={form_disable}/>
                            </Form.Group>
                            {
                                status == "show" ?
                                null:
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            }
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}


export default SingleDiary