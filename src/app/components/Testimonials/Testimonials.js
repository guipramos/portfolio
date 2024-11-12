"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./styles.scss";
import Image from "next/image";
import avatar from "../../../../public/avatar.svg";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const testimonials = [
  {
    name: "Victor Carneiro",
    role: "UX Designer",
    image: avatar,
    rating: 5,
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company.",
  },
  {
    name: "Salim Ahmed",
    role: "UI Designer",
    image: avatar,
    rating: 5,
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company.",
  },
  {
    name: "Guy Hawkins",
    role: "UX Designer",
    image: avatar,
    rating: 5,
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company.",
  },
  {
    name: "Guy Hawkins",
    role: "UX Designer",
    image: avatar,
    rating: 5,
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company.",
  },
  {
    name: "Guy Hawkins",
    role: "UX Designer",
    image: avatar,
    rating: 5,
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonialsSection">
      <div className="container">
        <article className="testimonialsSection-text">
          <h2>Depoimentos</h2>
          <p>
            Depoimento de <span>alguns clientes</span>
          </p>
        </article>
        <div className="swipper-testimonial-container">
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowRoundForward color="#2405F2" size={"41"} />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowRoundBack color="#2405F2" size={"41"} />
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },
              480: {
                width: 480,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1024: {
                width: 1024,
                slidesPerView: 3,
              },
              1280: {
                width: 1280,
                slidesPerView: 3,
              },
              1440: {
                width: 1440,
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonialCard">
                  <div className="header">
                    <div className="header-flex">
                      <Image
                        width={40}
                        height={40}
                        src={testimonial.image}
                        alt={`${testimonial.name} profile`}
                      />
                      <div>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <div className="rating">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className="text">{testimonial.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
