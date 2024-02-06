import { Link } from "react-router-dom";
import { Homedata, gallery } from "../../Data/Homedata";
import Gallery from "./Gallery";
import Aos from "aos";
import "aos/dist/aos.css";
import Speciality from "./Speciality";
Aos.init()

export default function Home() {


  return (
    <div className="mt-16 flex flex-col min-h-screen">


      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="/img/misc/home_img.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-precursor_theme_color">Precursor Info Solutions
              <br className="hidden lg:inline-block" />
              <div className="type-effect-1">
                <h3 className="text-center text-base text-black"><i>Code Your Future: The Journey Begins Here </i></h3>
              </div>
            </h1>
            <p className="mb-8 leading-relaxed">Precursor Info Solutions is more than just a training institute; it's a launchpad for aspiring developers and coders. They equip students with the skills and knowledge needed to thrive in the ever-evolving world of technology, specifically focusing on industrial training.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-precursor_theme_color border-0 py-2 px-6 focus:outline-none hover:bg-[#77cbdb] rounded text-lg">Apply Now!</button>

            </div>
          </div>
        </div>
      </section>

      <Speciality/>


      <div className="program-highlights flex flex-col justify-center items-center text-2xl m-5">
        <div className="m-3">
          <h1 className="font-semibold py-1 border-b-2 border-precursor_theme_color">Program Highlights</h1>
        </div>

        <section className="text-gray-600 body-font flex flex-col justify-center items-center">
          <div className="container py-6 mx-auto ">
            <div className="flex flex-wrap gap-7 md:justify-center md:gap-16">
              {Homedata.map((data, id) => {
                return (
                  <div className="p-0 md:w-1/3 xl:w-1/4" data-aos="fade-up" key={id}>
                    <div className="course-card h-full border-2 border-precursor_theme_color border-opacity-60 rounded-lg overflow-hidden shadow-xl ">
                      <img
                        loading="lazy"
                        className="lg:h-48 md:h-36 w-full object-center aspect-video object-contain p-4"
                        src={data.imageSrc}
                        alt={data.heading}
                      />

                      <div className="p-2">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {data.heading}
                        </h1>

                        <p className="text-base mb-5">{data.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Link to="/courses">
            <button className=" md:block md:mr-4 items-center self-center bg-precursor_theme_color border-0 py-1 px-3 focus:outline-none text-white rounded text-base hover:text-base mt-4 md:mt-0">
              View All Courses
            </button>
          </Link>
        </section>
      </div>
      <hr />
      <div className="gallery my-3 flex flex-col items-center ">
        <div className="m-3">
          <h1 className="border-b-2 border-precursor_theme_color text-center text-2xl">Gallery</h1>
        </div>
        <Gallery autoSlide={true} >
          {
            gallery.map((g) => (
              <img src={g.img} key={g.id} className="" />
            ))
          }
        </Gallery>
      </div>
    </div>
  );
}