import React, { useState } from 'react';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        guests: '1',
        attending: 'yes',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your response! (Demo)");
    };

    return (
        <section className="py-24 px-4 bg-[#1e080f] text-text-light" id="rsvp">
            <div className="max-w-[800px] mx-auto px-4">
                <div className="text-center mb-12 reveal">
                    <span className="font-body text-bg-light text-sm uppercase tracking-[4px] mb-2 block">Are You Attending?</span>
                    <h2 className="font-script text-[5.5rem] text-secondary mt-[-10px] mb-0 leading-none">RSVP</h2>
                </div>

                <div className="bg-white p-8 md:p-14 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] text-text-dark relative">
                    <p className="text-center mb-10 text-base text-[#555] leading-[1.8]">We would love to know if you can make it! Please RSVP by<br /><b>December 15th, 2025</b>.</p>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Name Field (Full Width) */}
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="name" className="block mb-3 font-medium text-sm text-[#333]">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-4 px-5 rounded-lg border border-[#e0e0e0] text-base font-body bg-[#fafafa] outline-none transition-colors duration-300 focus:border-primary"
                                placeholder="Jane Doe"
                            />
                        </div>

                        {/* Guests Field */}
                        <div>
                            <label htmlFor="guests" className="block mb-3 font-medium text-sm text-[#333]">Number of Guests</label>
                            <select
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full py-4 px-5 rounded-lg border border-[#e0e0e0] text-base font-body bg-[#fafafa] outline-none cursor-pointer appearance-none focus:border-primary transition-colors duration-300"
                            >
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5+ People</option>
                            </select>
                        </div>

                        {/* Attending Field */}
                        <div>
                            <p className="block mb-3 font-medium text-sm text-[#333]">Will you be attending?</p>
                            <div className="flex gap-4 items-center h-[53px]">
                                <label className="flex items-center gap-2 cursor-pointer text-[0.95rem] text-[#555]">
                                    <input type="radio" name="attending" value="yes" checked={formData.attending === 'yes'} onChange={handleChange} className="accent-primary w-[18px] h-[18px]" />
                                    <span>Yes, I will be there!</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-[0.95rem] text-[#555]">
                                    <input type="radio" name="attending" value="no" checked={formData.attending === 'no'} onChange={handleChange} className="accent-primary w-[18px] h-[18px]" />
                                    <span>Sorry, I can't make it.</span>
                                </label>
                            </div>
                        </div>

                        {/* Message Field (Full Width) */}
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="message" className="block mb-3 font-medium text-sm text-[#333]">Message for the couple (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full py-4 px-5 rounded-lg border border-[#e0e0e0] text-base font-body bg-[#fafafa] outline-none resize-y transition-colors duration-300 focus:border-primary"
                                placeholder="Leave us a wish..."
                            ></textarea>
                        </div>

                        {/* Submit Button (Full Width) */}
                        <div className="col-span-1 md:col-span-2 text-center mt-4">
                            <button type="submit" className="inline-block w-full sm:w-auto py-4 px-12 rounded-full font-heading text-[0.9rem] font-semibold no-underline uppercase tracking-[2px] transition-all duration-300 border-none cursor-pointer bg-gradient-to-br from-[#d4af37] to-[#ecd078] text-white shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:bg-gradient-to-tl hover:-translate-y-[2px]">Send RSVP</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RSVP;
