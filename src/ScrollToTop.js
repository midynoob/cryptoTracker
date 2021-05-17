import React from 'react';
import { useEffect, useState } from "react";
import './scrollButton.css';

import "./fade.css";
import Fade from "./Fade";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset > 500) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
          <Fade show={isVisible}>
              <div className="btn" onClick={scrollToTop}>
                  <i className="fas fa-arrow-up"></i>
              </div>
          </Fade>
            {/* {isVisible && (
                
                
            )} */}
        </div>
    )
}

export default ScrollToTop;