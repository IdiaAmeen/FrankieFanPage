import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const images = [
    "kRMvZHp.jpg",
    "LulpVAn.jpg",
    "nTvcloH.jpg",
    "z3P4D1V.jpg",
    "6dJIpEn.jpg",
    "bdfNx12.png",
    "FXqqHJS.jpg",
    "GXNnHmD.jpg",
    "a3q8qmT.jpg",
    "wJ5fs0h.jpg",
    // "IqIZ6Vp.jpg",
    // "eiWdOD5.jpg",
    // "jcHZ0hx.jpg",
    // "HegPLNM.png",
    "qQ0Opoz.png",
    "2Ef2opu.jpg",
    "tZRgAhD.jpg",
    "uzdrWAk.jpg",
  ];

  const buildURL = (imagePath) => `https://i.imgur.com/${imagePath}`;
  return (
    <div className="gallery">
      {images.map((image) => (
        <div className="box">
          <img
            // sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
            src={buildURL(image)}
            imgixParams={{
              fit: "crop",
              fm: "jpg",
            }}
            width={600}
            height={600}
            // marginTop={35}
          />{" "}
        </div>
      ))}
    </div>
  );
}
