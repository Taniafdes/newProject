import { Carousel } from 'antd';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <Image src='/images/image1.jpg' width={1500} height={600}/>
        <Card.Body>
        <Card.Title>You did it, Tania</Card.Title>
        <Card.Text>
        Nice work completing your course. Now, discover the next course to boost your skills.
        </Card.Text>
      </Card.Body>
      </div>
      <div>
       <Image src='/images/image2.jpg' width={1500} height={0} />
        <Card.Body>
        <Card.Title>We missed you, Tania</Card.Title>
        <Card.Text>Get back on track and achieve your goals. 5–10 minutes a day will do.
        </Card.Text>
      </Card.Body>
      </div>
      <div>
      <Image src='/images/image3.jpg' width={0} height={0} />
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