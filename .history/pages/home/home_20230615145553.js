import { Carousel } from 'antd';
import { Card } from 'react-bootstrap';
const contentStyle = {
  margin: 0,
  height: '540px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src='' style={contentStyle} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>/>
      </div>
      <div>
        <img src='' style={contentStyle}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>/>
      </div>
      <div>
        <img src='' style={contentStyle}/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>/>
      </div>
      <div>
        <img src='' style={contentStyle}/>
      </div>
    </Carousel>
  );
};
export default Home;