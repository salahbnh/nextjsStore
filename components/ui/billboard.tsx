'use client'
import React, { useState, useEffect } from "react";
import { Billboard as BillboardType } from "@/types";
import "./billboard.css";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = data.images || []; // Array of product images

  useEffect(() => {
    const imageCount = images.length;

    if (imageCount > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [images]);

  return (
    <div className="gallery">
      <div className="gallery__item">
        {images.length === 1 ? (
          <img
            src={images[0]?.url}
            alt=""
            className="gallery__image"
          />
        ) : (
          <img
            src={images[currentImageIndex]?.url}
            alt=""
            className="gallery__image"
          />
        )}
      </div>
    </div>
  );
};

export default Billboard;
