import { aboutdata } from "../../Data/Aboutdata";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init()

export default function About() {
  useEffect(()=>{
    window.scrollTo(0,0)
}, []);

  return (
    <div className="mt-28 px-5 flex flex-col min-h-screen justify-center items-center">
      <figure data-aos="fade-down ">
        <img
          loading="lazy"
          src="img/misc/about_company.png"
          alt="about company"
          className="aspect-video object-contain"
        />
      </figure>
      <section className="py-7 md:px-24">
        <p className="py-3 text-xl font-semibold" >{aboutdata.introduction}</p>


        <div className="py-8" >
          <p className="flex justify-center items-center font-semibold">
            {aboutdata.courses_offered.intro}
          </p>
          <section className="text-gray-600 body-font mt-5">
            <div className="container px-5 mx-auto">
              <div className="flex justify-center flex-wrap gap-5">
                {
                  aboutdata.courses_offered.points.map((point, id) => {
                    return (
                      <div key={id} className="xl:w-1/5 lg:w-1/3 md:w-full w-full px-3 py-2 border-2 rounded-lg border-precursor_theme_color border-opacity-60 hover:shadow-lg flex flex-col justify-center items-start gap-2" data-aos="fade-up">
                        <img src={point.icon} alt="icon" className="h-7 object-contain" />
                        <span>{point.point_name}</span>
                        <h2 className="text-sm sm:text-sm text-gray-900 font-medium title-font mb-2"> {point.point_content}</h2>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>

        <div className="py-8">
          <p className="flex justify-center items-center font-semibold">
            {aboutdata.successfull_career.intro}:
          </p>
          <section className="text-gray-600 body-font mt-5">
            <div className="container px-5 mx-auto">
              <div className="flex justify-center flex-wrap gap-5">
                {
                  aboutdata.successfull_career.points.map((point, id) => {
                    return (
                      <div key={id} className="xl:w-1/5 lg:w-1/3 md:w-full w-full px-3 py-2 border-2 rounded-lg border-precursor_theme_color border-opacity-60 hover:shadow-lg flex justify-center items-center gap-4" data-aos="fade-up">
                        <img src={point.icon} alt="icon"  className="h-7 object-contain"/>
                        <h2 className="text-sm sm:text-sm text-gray-900 font-medium title-font mb-2">{point.content}</h2>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>
      </section>

      <hr className="bg-black my-4" />

      <div className="py-3 lg:flex lg:justify-center lg:items-center lg:ps-40">
        <figure className=" flex flex-col gap-7 justify-center items-center" data-aos="fade-up">
          <h1 className="font-semibold text-2xl">Founders:</h1>
          <img
            loading="lazy"
            src="/img/misc/founders.png"
            alt="founders"
            className="h-48 "
          />
        </figure>

        <section className="text-gray-600 body-font mt-5">
          <div className="container">
            <div className="flex justify-center flex-wrap gap-5">
              {
                aboutdata.founders.map((founder, id) => {
                  return (
                    <div key={id} className="xl:w-[60%] lg:w-1/2 md:w-1/3 sm:w-1/3 w-full border-2 rounded-lg border-precursor_theme_color border-opacity-60 hover:shadow-lg px-3 py-3 xl:flex xl:gap-2 " data-aos="fade-up">
                      <figure className="h-16">
                        <img src={founder.img} alt={founder.name} className="h-full  rounded-full" />
                      </figure>
                      <div>
                        <h2 className="text-sm sm:text-sm text-gray-900 font-medium title-font mb-2"><span className="font-bold">{founder.name}</span> {founder.exp}</h2>
                        <h2>{founder.mobile}</h2>
                        <h2>{founder.email}</h2>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
