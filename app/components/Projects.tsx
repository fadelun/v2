"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

// Corrected import statements by removing extra quotes around paths
// import bikeesPic from "public/assets/bikees.png";
import portfolioPic from "@/public/assets/fadelun-portfolio.png";
import countriesPic from "@/public/assets/rest-countries-api.jpg";
import tweetPic from "@/public/assets/tweet-generator.jpg";
import piscokPic from "@/public/assets/pesen-piscok.png";
import foodPalacePic from "@/public/assets/food-overview.png";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Pesen Piscok",
      url: "https://pesen-piscok.vercel.app/",
      desc: "A simple e-commerce platform designed to facilitate the ordering of piscok (chocolate banana). To make ordering easier, buyers simply need to click on the selected food without having to write it manually on WA. This is where I began to understand how React Redux Toolkit works.",
      repo: "",
      image: piscokPic,
    },
    {
      title: "Fadelun Personal Site",
      url: "https://fadelun-github-io.vercel.app/",
      desc: "my old version of personal website showcasing the projects, portfolio, and insights into his work and interests.",
      repo: "https://github.com/fadelun/fadelun.github.io",
      image: portfolioPic,
    },

    {
      title: "Rest Countries API",
      url: "https://rest-countries-api-fadelun.vercel.app/",
      desc: "An API service that provides detailed information about countries—such as population, area, and capital—to help developers integrate country data into their applications.",
      repo: "https://github.com/fadelun/rest-countries-api",
      image: countriesPic, // Replace with the actual image URL
    },
    {
      title: "Tweet Generator",
      url: "https://twitter-status-generator.vercel.app/",
      desc: "A web tool that lets you generate and customize mock Twitter status posts for creative or fun purposes.",
      repo: "https://github.com/fadelun/tweet-generator",
      image: tweetPic, // Replace with the actual image URL
    },
    {
      title: "Food Palace",
      url: "https://food-palace.vercel.app/",
      desc: "It is a website design that has been converted into code.",
      repo: "https://github.com/fadelun/food-palace",
      image: foodPalacePic, // Replace with the actual image URL
    },
    // {
    //   title: "Bikees",
    //   url: "https://bikees-psi.vercel.app/",
    //   desc: "A web application focused on cycling, offering features like route planning, biking statistics, or community interactions, all presented in a clean, interactive interface.",
    //   repo: "https://github.com/fadelun/bikees", // Replace with the actual repo URL if available
    //   image: bikeesPic, // Replace with an overview image URL
    // },
  ];

  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = tiltRef.current;

    if (node) {
      VanillaTilt.init(node, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        reverse: true,
      });
      // Optional cleanup
      return () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (node as any).vanillaTilt?.destroy();
      };
    }
  }, []);

  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 ">Projects</h2>

        <div className="flex mx-auto md:gap-y-12 flex-wrap justify-center md:justify-between text-warm-text">
          {projectList.map((project, i) => (
            <div
              key={i}
              ref={tiltRef}
              className="card mb-[10vw] md:mb-0 w-[25rem]  aspect-[16/9] bg-mung-beans"
              data-tilt
              data-tilt-reverse="true"
              data-tilt-max-glare="0.5"
              data-tilt-max="8"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="object-cover w-full h-full"
                  src={project.image}
                  alt="Project Screenshot"
                />
                {/* <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              > */}
                <div className="absolute inset-0 group  hover:bg-gradient-to-t from-slate-900 to-transparent flex items-end transition hover:duration-450 ease-in-out overflow-hidden">
                  <h2 className="text-blue-100 translate-y-6 group-hover:translate-y-0  text-xl font-bold transition hover:duration-500 ease-in-out  ">
                    {project.title}
                  </h2>
                </div>
              </Link>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
