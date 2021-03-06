import React from "react";
import Slider from "react-slick";
import { CgQuote } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import "./TestimonialArea.css"

export default function TestimonialArea() {
  const testimonials = [
    {
      text:
        "Yew was great to work with, was very quick and understood exactly what we needed. We will be using his services again when we need more work in this area.",
      source:
        "https://www.linkedin.com/posts/yewyewxd_see-how-i-can-get-your-project-done-on-upwork-activity-6766884031473815552-DN58",
    },
    {
      text:
        "Great developer! He is extremely passionate and knowledgeable about the work he does.",
      source:
        "https://www.linkedin.com/posts/yewyewxd_see-how-i-can-get-your-project-done-on-upwork-activity-6710509017812357120-i5Lo",
    },
    {
      text:
        "It was an absolute pleasure to be working with KangWei as he did what he had written in the proposal, which is make the front end pixel perfect and even implement some changes. Also, he was always very prompt and kind in his communications.",
      source:
        "https://www.linkedin.com/posts/yewyewxd_see-how-i-can-get-your-project-done-on-upwork-activity-6709339082209792000-RWFU",
    },

    {
      text:
        "Great Work!!! Very Fast!! Professional and Talented Work. Provided Exactly what I wanted 10 Stars!!",
      source:
        "https://www.linkedin.com/posts/yewyewxd_see-how-i-can-get-your-project-done-on-upwork-activity-6705346768080646144-_FFL",
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section id="testimonial" className="text-center py-5 position-relative">
      <div className="container my-sm-5 my-3">
        <h1 className="mb-0">Testimonial lala lisa</h1>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial py-5" data-aos="fade-in" key={index}>
              <p className="mb-3">
                <CgQuote className="position-relative quote-icon" />
                {testimonial.text}
              </p>
              <a
                href={testimonial.source}
                target="_blank"
                rel="noopener noreferrer"
                className="post-link mt-md-4 all-center"
              >
                <FiArrowRight className="mr-1" /> See post
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
