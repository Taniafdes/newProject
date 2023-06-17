import { Carousel } from 'antd';
import { Card } from 'react-bootstrap';
import Imag
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
        <Card.Title>You did it, Tania</Card.Title>
        <Card.Text>
        Nice work completing your course. Now, discover the next course to boost your skills.
        </Card.Text>
      </Card.Body>
      </div>
      <div>
        <img src='' style={contentStyle}/>
        <Card.Body>
        <Card.Title>We missed you, Tania</Card.Title>
        <Card.Text>Get back on track and achieve your goals. 5–10 minutes a day will do.
        </Card.Text>
      </Card.Body>
      </div>
      <div>
        <img src='' style={contentStyle}/>
        <Card.Body>
        <Card.Title>Skills for your future</Card.Title>
        <Card.Text>Expand your potential with a course for as little as ₹529. Sale ends June 16.
        </Card.Text>
      </Card.Body>
      </div>
    </Carousel>
  );
};
export default Home;