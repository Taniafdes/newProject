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
        <img src='' style={contentStyle} 
      </div>
      <div>
        <img src='' style={contentStyle}/>
      </div>
      <div>
        <img src='' style={contentStyle}/>
      </div>
      <div>
        <img src='' style={contentStyle}/>
      </div>
    </Carousel>
  );
};
export default Home;