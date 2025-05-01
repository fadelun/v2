import Image from "next/image";
// import bikeesPic from "@/public/assets/bikees.png";
import portfolioPic from "@/public/assets/fadelun-portfolio.png";
import countriesPic from "@/public/assets/rest-countries-api.jpg";
import tweetPic from "@/public/assets/tweet-generator.jpg";
import piscokPic from "@/public/assets/pesen-piscok.png";
import foodPalacePic from "@/public/assets/food-overview.png";

export default function Projects() {
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

  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 ">Projects</h2>

        {projectList.map((project, i) => (
          <div
            key={i}
            className="flex items-center justify-center mb-10 py-12 px-4"
          >
            <div className="flex flex-col md:flex-row overflow-hidden hover:bg-warm-text group  hover:text-dark-2">
              {/* Bagian Kiri: Gambar Project */}
              <div className="md:w-1/2">
                <Image
                  className="object-cover w-full h-full"
                  src={project.image}
                  alt="Project Screenshot"
                />
              </div>
              {/* Bagian Kanan: Konten Project */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4 ">{project.title}</h2>
                <p className=" mb-6">{project.desc}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-6 py-3  hover:rotate-12 transition">
                      Live Demo
                    </button>
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-3  hover:rotate-12  transition">
                        Source Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
