"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import pursuing from "../../img/pursuing.png";
import tango from "../../img/tango.png";
import forest from "../../img/forest.png";
import innow from "../../img/innow.png";
import "./styles.scss";
import Image from "next/image";

const projectsIFinished = {
  project1: {
    link: "https://pursuingtheabundantlife.com/",
    img: pursuing,
  },
  project2: {
    link: "https://tangoleadershipcoaching.com/",
    img: tango,
  },
  project3: {
    link: "https://forrestcoach.com/",
    img: forest,
  },
  project4: {
    link: "https://www.growinnow.com/",
    img: innow,
  },
};

const ProjetosQueFiz = () => {
  return (
    <section id="projetos" className="projetosQueFiz">
      <div className="container container-flex">
        <article className="projetosQueFiz-text">
          <h2>
            Projetos que <span>fiz</span>
          </h2>
          <p>
            Destaquei alguns dos meus projetos mais
            <span>significativos e impactantes.</span>
          </p>
        </article>
        <article className="projetosQueFiz-cards">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {Object.keys(projectsIFinished).map((key) => {
              const project = projectsIFinished[key];

              return (
                <SwiperSlide key={key} className="projetosQueFiz-itens">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={323}
                      height={425}
                      src={project.img.src}
                      alt=""
                    />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </article>
      </div>
    </section>
  );
};

export default ProjetosQueFiz;
