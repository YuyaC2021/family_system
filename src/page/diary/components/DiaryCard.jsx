import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DiaryCard = () => {
  return (
    <Card style={{ minWidth:"200px", width:"30%", maxWidth:"450px", margin:"10px"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/diary/1">
          <Button variant="primary">Go somewhere</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default DiaryCard;