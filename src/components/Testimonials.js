import testimonialsImg from '../assets/jpg/testimonials.png';
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-image-wrapper">
          <img src={testimonialsImg} alt="testimonials" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
