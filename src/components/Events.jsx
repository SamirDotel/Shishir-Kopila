import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
    const eventDetails = [
        {
            title: "The Sacred Union",
            date: "Wednesday, 27th Falgun 2082",
            time: "11:00 AM Onwards",
            venue: "Golden Palace, RadheRadhe, Bhaktapur"
        },
        {
            title: "Grand Celebration",
            date: "Friday, 29th Falgun 2082",
            time: "02:00 PM Onwards",
            venue: "Svetah Bhawan, Raniban, Kathmandu"
        }
    ];

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-bg-light via-white to-bg-light pb-32" id="events">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <span className="font-body text-secondary text-sm uppercase tracking-[4px] mb-2 block">Join Us</span>
                    <h2 className="font-script text-[3.5rem] md:text-[4.5rem] relative inline-block text-primary leading-none">Wedding Events</h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {eventDetails.map((event, index) => (
                        <div key={index} className="flex-1 max-w-[450px] mx-auto w-full bg-white rounded-[15px] p-8 md:p-12 md:px-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative reveal">

                            {/* Top accent gold line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-secondary rounded-b-[4px]"></div>

                            <h3 className="font-script text-5xl mb-10 text-primary">{event.title}</h3>

                            <ul className="list-none p-0 mx-auto text-left inline-block w-full max-w-[300px]">
                                <li className="flex items-center gap-4 mb-6">
                                    <div className="bg-bg-light p-3 rounded-full text-primary shrink-0">
                                        <Calendar size={18} />
                                    </div>
                                    <span className="text-[#555] text-[0.95rem]">{event.date}</span>
                                </li>
                                <li className="flex items-center gap-4 mb-6">
                                    <div className="bg-bg-light p-3 rounded-full text-primary shrink-0">
                                        <Clock size={18} />
                                    </div>
                                    <span className="text-[#555] text-[0.95rem]">{event.time}</span>
                                </li>
                                <li className="flex items-center gap-4 mb-6">
                                    <div className="bg-bg-light p-3 rounded-full text-primary shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="text-[#555] text-[0.95rem]">{event.venue}</span>
                                </li>
                            </ul>

                            <div className="mt-10">
                                <a href="#" className="inline-block py-3 px-8 rounded-full font-heading text-sm font-semibold no-underline uppercase tracking-[2px] transition-all duration-300 border-none cursor-pointer bg-gradient-to-br from-[#d4af37] to-[#ecd078] text-white shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:bg-gradient-to-tl hover:-translate-y-[2px]">View on Map</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
