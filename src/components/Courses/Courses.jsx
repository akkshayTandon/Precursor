import { Coursedata } from "../../Data/Coursesdata";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Aos  from "aos";
import "aos/dist/aos.css";
Aos.init()

export default function Courses() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <>
      <div className="mt-24 px-5 flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-2xl font-bold border-b-2 border-precursor_theme_color">Our Courses</h1>
        <section className="text-gray-600 body-font flex flex-col justify-center items-center">
          <div className="container py-16 mx-auto ">
            <div className="flex flex-wrap gap-7 md:justify-center md:gap-16">

              {Coursedata.map((data, id) => {
                return (
                  <div className="p-0 md:w-1/3 xl:w-1/4" key={id} data-aos="fade-up">
                      <NavLink to={`${data.id}`}  style={{ textDecoration: 'none' }}>
                      <div className="course-card h-full border-2 border-precursor_theme_color border-opacity-60 rounded-lg overflow-hidden">
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
                  </NavLink>
                    </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}