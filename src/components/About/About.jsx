import { aboutdata } from "../../Data/Aboutdata";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init()

export default function About() {
  return (
    <>
      <div className="mt-28 px-5 flex flex-col justify-center items-center">
        <figure data-aos="fade-down ">
          <img
            loading="lazy"
            src="img/misc/about_company.png"
            alt="about company"
            className="aspect-video object-contain"
          />
        </figure>
        <section className="py-4 md:px-24">
          <p className="py-3 text-xl font-semibold" >{aboutdata.introduction}</p>
          <div className="py-3">
            <ul className="font-semibold">
              {aboutdata.courses_offered.intro}

              {aboutdata.courses_offered.points.map((point, id) => {
                return (
                  <li key={id}>
                    <span className="font-bold">{point.point_name}:</span>{" "}
                    {point.point_content}
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="py-3" data-aos="fade-up">
            <ul className="font-semibold">
              {aboutdata.successfull_career.intro}:
              {aboutdata.successfull_career.points.map((point, id) => {
                return (
                  <li key={id} className="font-normal">
                    -&gt;{point}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

          <hr className="bg-black my-4" />

          <div className="py-3 md:flex md:flex-col md:items-center md:justify-center">
            <figure className=" flex flex-col gap-7 justify-center items-center" data-aos="fade-up">
                <h1 className="font-semibold text-2xl">Founders:</h1>
              <img
                loading="lazy"
                src="/img/misc/founders.png"
                alt="founders"
                className="h-48"
              />
            </figure>
            <div className="flex flex-col gap-5 mt-4 md:flex-row md:gap-10 md:justify-center md:items-center" >
              <div data-aos="fade-up">
                <p>
                  <img
                    src="/img/founders/Swasti_Agrawal.png"
                    alt="Swasti Aggarwal"
                    className="h-14 rounded-full"
                  />
                  <span className="font-semibold">Dr. Swasti Agrawal</span>{" "}
                  having 22 years of experience in Computer and IT industry
                </p>
                <p>Mobile: 9415591794</p>
                <p>Email: precursorlko@gmail.com</p>
              </div>
              
              <div data-aos="fade-up">
                <p>
                  <img
                    src="/img/founders/Manoj_Kumar.png"
                    alt="Swasti Aggarwal"
                    className="h-14 rounded-full"
                  />
                  <span className="font-semibold">Mr. Manoj Kumar</span> having
                  23 years of experience in Computer Hardware, Networking &
                  Cloud Domain.
                </p>
                <p>Mobile: 9984538899</p>
                <p>Email: precursorlko@gmail.com</p>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}
