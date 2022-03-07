import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const [brands, setBrands] = useState([]);
    const handleClick = index => {
        setCurrentIndex(index);
    };
    useEffect(() => {
        const query = '*[_types=="testimonial"]';
        const brandsQuery = '*[_types=="brands"]';
        client.fetch(query).then(data => {
            setTestimonials(data);
        })
        client.fetch(brandsQuery).then(data => {
            setBrands(data);
        });
    },[]);
    return (
      <>
        {testimonials.length && (
          <>
            <div className="testimonial-item flex">
              <img src={urlFor(testimonials[currentIndex].image)} />
              <div className="testimonial-content">
                <p className="p-text">{testimonials[currentIndex].content}</p>
                <div>
                  <h4 className="bold-text">
                    {testimonials[currentIndex].name}
                  </h4>
                  <h5 className="p-text">
                    {testimonials[currentIndex].company}
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-btn">
              <div
                className="flex"
                onClick={() => {
                  handleClick();
                }}
              >
                <HiChevronLeft />
              </div>
              <div
                className="flex"
                onClick={() => {
                  handleClick();
                }}
              >
                <HiChevronRight />
              </div>
            </div>
          </>
        )}
        <div className="testimonial-brands flex">
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </>
    );
};

// export default Testimonial;
export default AppWrap(MotionWrap(Testimonial, "testimonial"), "testimonial", "whitebg");