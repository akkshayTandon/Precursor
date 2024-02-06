import { speciality } from "../../Data/Homedata";
export default function Speciality() {
    return (

        <section className="text-gray-600 body-font mt-2 mb-20">
            <h1 className="text-center py-7 text-3xl font-bold">Our Specialities</h1>
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap justify-center gap-5">
                    {
                        speciality.map((list) => {
                            return (
                                
                                <div key={list.id} className="xl:w-1/4 lg:w-1/4 md:w-full w-full px-3 py-2 border-2  rounded-lg border-precursor_theme_color border-opacity-60 shadow-xl hover:shadow-2xl flex gap-4 justify-center items-center" data-aos="fade-up">
                                   <img src={list.icon} alt="icon" className="h-5" />
                                    <h2 className="text-sm sm:text-sm text-gray-900 font-medium title-font mb-2">{list.content}</h2>
                                </div>
                          
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}