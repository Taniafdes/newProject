import { Carousel } from 'antd';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div style={{width: '100%', height: '100%'}}>
        <Image src='/images/image1.jpg' />
        <Card.Body>
        <Card.Title>You did it, Tania</Card.Title>
        <Card.Text>
        Nice work completing your course. Now, discover the next course to boost your skills.
        </Card.Text>
      </Card.Body>
      </div>
      <div>
        <img src=''/>
        <Card.Body>
        <Card.Title>We missed you, Tania</Card.Title>
        <Card.Text>Get back on track and achieve your goals. 5–10 minutes a day will do.
        </Card.Text>
      </Card.Body>
      </div>
      <div>
        <img src='' />
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