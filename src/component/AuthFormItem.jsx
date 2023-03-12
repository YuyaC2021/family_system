import { 
    Form 
} from "react-bootstrap";

const AuthFormItem = ({title, type, placeholder="", controlId}) => {
    console.log("form item");
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{title}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

export default AuthFormItem;