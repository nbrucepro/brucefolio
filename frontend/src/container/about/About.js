import React, { useState,useEffect } from "react";

import { AppWrap, MotionWrap } from "../../Wrapper";
import { motion, MotionConfig } from "framer-motion";
import "./About.scss";
import { client, urlFor } from "../../client";
const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query = '*[_type=="about"]';
    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="profiles">
        {about.map((item, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="profile-item"
            key={item.title + index}
          >
            <img src={urlFor(item.image)} alt={item.title} />
            <h2 className="bold-text" style={{ paddingTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ paddingTop: 20 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;
export default AppWrap(MotionWrap(About, "about"), "about", "whitebg");
// MotionConfig.apply(thisArg)

