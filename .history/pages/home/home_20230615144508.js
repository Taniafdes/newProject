import { Carousel } from 'antd';
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
        <img style={contentStyle} />
      </div>
      <div>
        <img style={contentStyle}/>
      </div>
      <div>
        <img style={contentStyle}/>
      </div>
      <div>
        <img style={contentStyle}>4</img>
      </div>
    </Carousel>
  );
};
export default Home;