import { RxGlobe } from "react-icons/rx";
import projectOne from "../../assets/banner/projectImgOne.jpg";
import projectTwo from "../../assets/banner/projectTwo.jpg";
import projectThree from "../../assets/banner/projectThree.jpg";
import { PiFilesFill } from "react-icons/pi";
import { NavLink } from "react-router";

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Lead Marketing",
      description: `Lead Marketing Inc. is a full-service marketing and
      communications agency serving worldwide from Canada. This is the
      global venture of Lead Bangladesh Ltd., a full-service marketing
      agency with 10 years of experience.`,
      image: projectOne,
      technologies: [
        "Javascript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Swiper JS",
      ],
      liveSite: "https://leadmarketingglobal.com/",
      projectDetails: "#",
    },
    {
      id: 2,
      title: "Aschii",
      description: `Aschii is a full parcel delivery service in Bangladesh. We provide fast, secure, and reliable doorstep delivery for businesses and individuals. With real-time tracking and dedicated customer support, we make deliveries simple and stress-free.`,
      image: projectTwo,
      technologies: [
        "TanStack Query",
        "Javascript",
        "React Router",
        "Tailwind CSS",
      ],
      liveSite: "https://aschii.com/",
      projectDetails: "#",
    },
    {
      id: 3,
      title: "Guider",
      description: `Guider connects travelers with knowledgeable local guides for personalized tours. Explore hidden gems and cultural experiences with experts who know the area best. Make every trip memorable with insider tips, stories, and seamless guidance.`,
      image: projectThree,
      technologies: [
        "Swiper JS",
        "Javascript",
        "React",
        "React Router",
        "Tailwind CSS",
      ],
      liveSite: "https://guider.shahadad.com/",
      projectDetails: "#",
    },
    {
      id: 4,
      title: "Lead Bangladesh",
      description: `Lead Bangladesh is a full-service marketing and
      communications agency serving worldwide from Canada. This is the
      global venture of Lead Bangladesh Ltd., a full-service marketing
      agency with 10 years of experience.`,
      image: projectOne,
      technologies: [
        "Javascript",
        "React",
        "React Router",
        "Tailwind CSS",
        "Swiper JS",
      ],
      liveSite: "https://leadmarketingglobal.com/",
      projectDetails: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto select-none pb-20 pt-16">
      <section className="grid grid-cols-2 gap-12">
        {/* <div className="bg-gray-100 p-5 rounded-2xl">
          <div>
            <img src={projectOne} alt="" className="rounded-xl" />
          </div>
          <div className="py-5">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Lead Marketing
              </h3>
              <p className="leading-5 py-2">
                Lead Marketing Inc. is a full-service marketing and
                communications agency serving worldwide from Canada. This is the
                global venture of Lead Bangladesh Ltd., a full-service marketing
                agency with 10 years of experience.
              </p>
            </div>
            <div className="pt-4">
              <h5 className="text-sm text-gray-800 w-1/4 text-center border-2 border-gray-800 bg-white px-2 py-2 rounded-sm">
                Technology Used
              </h5>
              <ul className="flex w-full justify-between pt-4 text-wrap">
                <li className="bg-gray-800 text-white px-4 py-2 rounded-sm cursor-pointer">
                  Javascript
                </li>
                <li className="bg-gray-800 text-white px-4 py-2 rounded-sm cursor-pointer">
                  React
                </li>
                <li className="bg-gray-800 text-white px-4 py-2 rounded-sm cursor-pointer">
                  React Router
                </li>
                <li className="bg-gray-800 text-white px-4 py-2 rounded-sm cursor-pointer">
                  Tailwind CSS
                </li>
                <li className="bg-gray-800 text-white px-4 py-2 rounded-sm cursor-pointer">
                  Swiper JS
                </li>
              </ul>
            </div>
            <div className="pt-8 flex justify-center gap-5">
              <NavLink to={"https://leadmarketingglobal.com/"} target="_blank">
                <button className="text-gray-800 text-center border-2 border-gray-800 bg-white px-10 py-2 rounded-xl text-lg cursor-pointer">
                  <span className="flex items-center justify-center gap-2">
                    <RxGlobe className="text-xl" />
                    Live Site
                  </span>
                </button>
              </NavLink>
              <button className="text-gray-800 text-center border-2 border-gray-800 bg-white px-10 py-2 rounded-xl text-lg cursor-pointer">
                <span className="flex items-center justify-center gap-2">
                  <PiFilesFill className="text-xl" />
                  Project Details
                </span>
              </button>
            </div>
          </div>
        </div> */}
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-100 p-5 rounded-2xl">
            <div>
              <NavLink to={project.liveSite} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl"
                />
              </NavLink>
            </div>
            <div className="py-5">
              <h3 className="text-lg font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="leading-5 py-2">{project.description}</p>

              <div className="pt-4">
                <h5 className="text-sm text-gray-800 w-1/4 text-center border-2 border-gray-800 bg-white px-2 py-2 rounded-sm">
                  Technology Used
                </h5>
                <ul className="flex w-full justify-between pt-4 text-wrap">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-800 text-white px-4 py-2 rounded-sm cursor-pointer"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 flex justify-center gap-5">
                <NavLink
                  to={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-gray-800 text-center border-2 border-gray-800 bg-white px-8 py-2 rounded-full cursor-pointer">
                    <span className="flex items-center justify-center gap-2">
                      <RxGlobe className="text-xl" />
                      Live Site
                    </span>
                  </button>
                </NavLink>
                {/* <NavLink to={project.projectDetails}>
                  <button className="text-gray-800 text-center border-2 border-gray-800 bg-white px-8 py-2 rounded-full cursor-pointer">
                    <span className="flex items-center justify-center gap-2">
                      <PiFilesFill className="text-xl" />
                      Project Details
                    </span>
                  </button>
                </NavLink> */}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectShowcase;
