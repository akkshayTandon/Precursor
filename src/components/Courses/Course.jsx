import { useParams } from "react-router-dom"
import { Coursedata } from "../../Data/Coursesdata.js";
import { useState, useEffect } from "react";
import Aos  from "aos";
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
            <div className="mt-24 px-3 flex flex-col justify-center gap-2" data-aos="fade-down">
                <h1 className="text-2xl flex justify-center items-center  py-3 font-bold">{course.heading}</h1>
                <figure >
                    <img src={course.imageSrc} alt="image src" className="lg:h-48 md:h-36 w-full object-center aspect-video object-contain" />
                </figure>
                <p className="font-semibold py-3">
                    {course.content}
                </p>
                {
                    Coursedata.map((data, id) => {
                       if(data.id === course.id) {
                          return  (
                                <div className="py-3 flex flex-col flex-wrap" key={id}>
                                    {
                                        data.modules_covered.map((module, id) => {
                                            return <li className="font-semibold" key={id}>{module}</li>
                                        })
                                    }
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}