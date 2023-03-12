import { 
  Button, 
  Form 
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// utils
import AuthFormItem from "../../../component/AuthFormItem";


const form_items = [
  {
    title : "メールアドレス",
    controlId : "formBasicEmail",
    type : "email",
    placeholder : "sample@gmail.com"
  },
  {
    title : "パスワード",
    controlId : "formBasicPassword",
    type : "password",
    placeholder : "0123"
  }
];

const Login = ({title}) => {
  console.log("login");
  return (
    <Form className="bg-light p-4 w-75 auth_container_form">
      <h3 className="text-center">{title}</h3>
      {
        form_items.map((itemObj, idx) => {
          return <AuthFormItem 
            key = {idx}
            title = {itemObj.title}
            controlId = {itemObj.controlId}
            type = {itemObj.type}
            placeholder = {itemObj.placeholder}
          />
        })
      }
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
      <LinkContainer to="/auth/register">
        <small>新しくアカウントを作る</small>
      </LinkContainer>
    </Form>
  )
}

export default Login;