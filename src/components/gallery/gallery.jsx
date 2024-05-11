import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import MasonryLayout from "./ContentContainer/ContentContainer";

import "./gallery.scss";

const photos = [
  {
    id: 0,
    src: "https://i.ytimg.com/vi/Bmtd0ORO4qY/maxresdefault.jpg",
    alt: "photo0"
  },
  {
    id: 1,
    src: "https://i.ytimg.com/vi/h2ImSLdQ8rE/maxresdefault.jpg",
    alt: "photo1"
  },
  {
    id: 2,
    src:
      "http://www.crkserwis.pl/wp-content/uploads/2018/01/CRKserwis_strona_zdjecie_124763954.jpg",
    alt: "photo2"
  },
  {
    id: 3,
    src:
      "http://www.szukajfachowca.pl/images/rsgallery/display/1a3a261e993783d6.jpg.jpg",
    alt: "photo3"
  },
  {
    id: 4,
    src:
      "https://www.korotech.lt/cache/images_product_S_1_1050x1050/a65eac3ffd1ad679a260aac9aa33627d_57076211c9f71.jpg",
    alt: "photo4"
  },
  {
    id: 5,
    src: "https://i.ytimg.com/vi/hSdCp0Of3W0/maxresdefault.jpg",
    alt: "photo5"
  },
  {
    id: 6,
    src: "https://i.ytimg.com/vi/Ac0koVyVDpg/maxresdefault.jpg",
    alt: "photo6"
  },
  {
    id: 7,
    src: "https://pbs.twimg.com/media/DzWg-H0W0AEAFuY.jpg",
    alt: "photo7"
  },
  {
    id: 8,
    src: "https://i.ytimg.com/vi/yrEYPtb2D4w/maxresdefault.jpg",
    alt: "photo8"
  },
  {
    id: 9,
    src: "https://i.ytimg.com/vi/u4bcSmm_R00/maxresdefault.jpg",
    alt: "photo9"
  },
  {
    id: 10,
    src: "https://i.ytimg.com/vi/ZIFUSIMnS_0/maxresdefault.jpg",
    alt: "photo10"
  },
  {
    id: 11,
    src: "https://i.ytimg.com/vi/KaOj4JZD4CA/maxresdefault.jpg",
    alt: "photo11"
  },
  {
    id: 12,
    src:
      "https://cdn.webshopapp.com/shops/6603/files/288383751/sandbot-hydro-straalketel-100l.jpg",
    alt: "photo12"
  },
  {
    id: 13,
    src: "https://sandshot.pl/images/piaskowanie_korpusu_sandshot.jpg",
    alt: "photo13"
  },
  {
    id: 14,
    src: "https://pbs.twimg.com/media/DzWg77yXQAAlLDM.jpg",
    alt: "photo14"
  },
  {
    id: 15,
    src: "https://i.ytimg.com/vi/ywbLmPbqrkM/maxresdefault.jpg",
    alt: "photo15"
  },
  {
    id: 16,
    src:
      "https://www.vindgevelreiniging.be//afbeeldingen/show/content/788/1/gevel-zandstralen-wat-het-precies.png",
    alt: "photo15"
  },
  {
    id: 17,
    src: "https://i.ytimg.com/vi/sa-yti5O7Tw/maxresdefault.jpg",
    alt: "photo15"
  }
];

const Gallery = props => {
  useEffect(() => window.scrollTo(0, 0));

  const isLargeScreen = useMediaQuery({ query: "(min-device-width: 845px)" });
  const isMobileScreen = useMediaQuery({ query: "(max-width: 844px)" });

  return (
    <div className="main main--gallery">
      <h1 className="main__title">Galeria</h1>
      <hr />
      <div className="main__content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit cum
          dolorem ratione eligendi repellendus debitis sequi labore eos
          inventore cupiditate repellat, necessitatibus consequatur? Distinctio,
          iure!
        </p>
        <div className="content__imgContainer">
          {isMobileScreen && (
            <MasonryLayout columns={1} gap={10}>
              {photos.map(photo => {
                return (
                  <img
                    style={{ maxWidth: "300px" }}
                    src={photo.src}
                    key={photo.id}
                    alt={photo.alt}
                  ></img>
                );
              })}
            </MasonryLayout>
          )}
          {isLargeScreen && (
            <MasonryLayout columns={2} gap={10}>
              {photos.map(photo => {
                return (
                  <img
                    style={{ maxWidth: "400px" }}
                    src={photo.src}
                    key={photo.id}
                    alt={photo.alt}
                  ></img>
                );
              })}
            </MasonryLayout>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
