import { Link } from "react-router-dom";
import { Homedata, speciality, gallery } from "../../Data/Homedata";
import Gallery from "./Gallery";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init()

export default function Home() {


  return (
    <div className="mt-16">
      <div className="md:flex md:gap-6 justify-center items-center">
        <div className="logo flex flex-col gap-2 justify-center items-center md:w-[45%] md:mt-10" data-aos="zoom-out">
          <img
            loading="lazy"
            src="/img/misc/home_img.jpg"
            alt="home image"
            className="p-0 md:w-[85%]"
          />
          <h1 className="text-3xl  font-bold">Precursor Info Solutions</h1>
          <h1 className="text-base font-semibold">
            <div className="type-effect-1">
              <h1 className="text-center"><i>Code Your Future: The Journey Begins Here </i></h1>
            </div>
          </h1>
        </div>
        <div className="mx-2 my-5 md:w-[55%]">
          <h1 className="text-2xl font-semibold lg:text-4xl">Our Specialities:</h1>
          <ul>
            {speciality.map((list) => {
              return (
                <li className="font-medium lg:text-xl" key={list.id}>
                  <span className="font-bold">-&gt;</span> {list.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="program-highlights flex flex-col justify-center items-center text-2xl m-5">
        <div className="m-3">
          <h1 className="underline">Program Highlights</h1>
        </div>

        <section className="text-gray-600 body-font flex flex-col justify-center items-center">
          <div className="container py-6 mx-auto ">
            <div className="flex flex-wrap gap-7 md:justify-center md:gap-16">
              {Homedata.map((data, id) => {
                return (
                  <div className="p-0 md:w-1/3 xl:w-1/4" data-aos="fade-up" key={id}>
                    <div className="course-card h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
            <button className=" md:block md:mr-4 items-center self-center bg-[#004C73] border-0 py-1 px-3 focus:outline-none text-white rounded text-base hover:text-base mt-4 md:mt-0">
              View All Courses
            </button>
          </Link>
        </section>
      </div>
      <hr />
      <div className="gallery my-3 sm:flex sm:flex-col sm:items-center">
        <div className="m-3">
          <h1 className="underline text-center text-2xl">Gallery</h1>
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