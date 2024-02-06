import { useParams } from "react-router-dom"
import { Coursedata } from "../../Data/Coursesdata.js";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init()

export default function Course() {
    const params = useParams();
    const { id } = params;
    const [course, setCourse] = useState({});

    const c = Coursedata.filter((course) => {
        return course.id.toLowerCase() === id.toLowerCase();
    });

    useEffect(() => {
        setCourse(c[0]);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="mt-24 px-3 flex flex-col min-h-screen justify-center align-center gap-2" data-aos="fade-down">
                <h1 className="text-2xl flex justify-center items-center  py-3 font-bold">{course.heading}</h1>
                <figure >
                    <img src={course.imageSrc} alt="image src" className="lg:h-48 md:h-36 w-full object-center aspect-video object-contain" />
                </figure>
                <p className="font-semibold py-3 flex justify-center items-center">
                    {course.content}
                </p>

                {
                    Coursedata.map((data, id) => {
                        if (data.id === course.id) {
                            return (
                                <section key={id} className="text-gray-600 body-font my-5">
                                    <div className="container px-5 mx-auto">
                                        <div className="flex justify-center flex-wrap gap-5">
                                            {
                                                data.modules_covered.map((module, id) => {
                                                    return (
                                                        <div key={id} className="md:w-1/4 sm:w-1/3 w-full px-3 py-2 border-2 rounded-lg border-precursor_theme_color border-opacity-60 hover:shadow-lg flex justify-center items-center" data-aos="fade-up">
                                                            <h2 className="text-sm sm:text-sm text-gray-900 font-medium title-font mb-2">{module}</h2>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </section>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}