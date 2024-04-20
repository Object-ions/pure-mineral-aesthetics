import React from 'react';
import { ReactComponent as StarFull } from '../assets/svg/star-full.svg';
import { ReactComponent as StarHalf } from '../assets/svg/star-half.svg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alexandra R.',
      rating: 5,
      review:
        "The quartz hydration facial was transformative – my skin hasn't felt this soft and smooth in years!",
    },
    {
      name: 'Michael B.',
      rating: 5,
      review:
        'Truly exceptional service and a calming ambiance. I felt rejuvenated after the amethyst treatment.',
    },
    {
      name: 'Samantha K.',
      rating: 5,
      review:
        'The jade contouring magic is my go-to. It’s the perfect pick-me-up for my skin and spirit.',
    },
    {
      name: 'Ethan W.',
      rating: 5,
      review:
        'Never have I felt more confident in my skin. The ruby revitalizing boost is a game-changer!',
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarFull key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.review}</p>
              <p className="testimonial-author">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
