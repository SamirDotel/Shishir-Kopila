import React from 'react';
import img1 from '../images/gallery/img1.jpg';
import img2 from '../images/gallery/img2.jpg';
import img3 from '../images/gallery/img3.jpg';
import img4 from '../images/gallery/img4.jpg';
import img5 from '../images/gallery/img5.jpg';

const Gallery = () => {
    // Using curated Unsplash images to match the 5-image layout from the screenshot
    // 1: Tall vertical (left)
    // 2: Tall vertical (middle)
    // 3: Horizontal small (top right)
    // 4: Horizontal small (bottom right)
    // 5: Horizontal wide (bottom left)

    return (
        <section className="py-24 px-4 pb-32 bg-[#ffffff]" id="gallery">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <span className="font-body text-secondary text-[0.8rem] uppercase tracking-[4px] mb-2 block">Captured Moments</span>
                    <h2 className="font-script text-[4.5rem] relative inline-block text-primary leading-none">Our Memories</h2>
                </div>

                <div className="grid grid-cols-3 grid-rows-[250px_250px_350px] gap-[15px] max-w-[900px] mx-auto">

                    {/* Image 1: Tall left */}
                    <div className="col-[1/2] row-[1/3] rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] group">
                        <img
                            src={img1}
                            alt="Memory 1"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Image 2: Tall middle */}
                    <div className="col-[2/3] row-[1/3] rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] group">
                        <img
                            src={img2}
                            alt="Memory 2"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Image 3: Small top right */}
                    <div className="col-[3/4] row-[1/2] rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] group">
                        <img
                            src={img3}
                            alt="Memory 3"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Image 4: Small bottom right */}
                    <div className="col-[3/4] row-[2/3] rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] group">
                        <img
                            src={img4}
                            alt="Memory 4"
                            className="w-full h-full object-[center_30%] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Image 5: Wide bottom left spanning 2 cols */}
                    <div className="col-[1/3] row-[3/4] rounded-[15px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] group">
                        <img
                            src={img5}
                            alt="Memory 5"
                            className="w-full h-full object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Gallery;
