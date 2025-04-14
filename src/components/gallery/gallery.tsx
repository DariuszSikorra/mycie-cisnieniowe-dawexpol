import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import CleanImage1 from "../../assets/images/438051730_410006488537906_4884695560442651068_n.jpg";
import CleanImage2 from "../../assets/images/438060484_1185411879489410_207899968338312743_n.jpg";
import CleanImage3 from "../../assets/images/438060491_1609063503213558_7744701925935160426_n.jpg";
import CleanImage4 from "../../assets/images/438060492_384321827943391_885558111688982511_n.jpg";
import CleanImage5 from "../../assets/images/438060622_467043595762785_2579974809951675846_n.jpg";
import CleanImage6 from "../../assets/images/438060633_3795806693985358_6115460858852396502_n.jpg";
import CleanImage7 from "../../assets/images/438060681_1630114747781546_8667821565157744938_n.jpg";
import CleanImage8 from "../../assets/images/438060685_1451966218778169_8569693954748219793_n.jpg";
import CleanImage9 from "../../assets/images/438060687_980589537038805_7406244733074505547_n.jpg";
import CleanImage10 from "../../assets/images/438064964_319055604556980_7299680697779992278_n.jpg";
import CleanImage11 from "../../assets/images/438064978_1001987594929112_7955168384531912098_n.jpg";
import CleanImage12 from "../../assets/images/438065245_830624495098104_5201574114078653214_n.jpg";
import CleanImage13 from "../../assets/images/438065361_1164133088100601_5225630565215385335_n.jpg";
import CleanImage14 from "../../assets/images/438065471_1161485151956946_622579091884104419_n.jpg";
import CleanImage15 from "../../assets/images/438069772_1521544412098190_5904874607435704772_n.jpg";
import CleanImage16 from "../../assets/images/438069837_362144096850939_3395352718189863215_n.jpg";
import CleanImage17 from "../../assets/images/438083391_751793753773810_7651603430000061671_n.jpg";
import CleanImage18 from "../../assets/images/438083409_2437439776448248_8961723861601696533_n.jpg";
import CleanImage19 from "../../assets/images/438083589_797266728670893_3686482129943723973_n.jpg";
import CleanImage20 from "../../assets/images/438083709_930829892111355_5554545459993677140_n.jpg";
import CleanImage21 from "../../assets/images/438083744_427393653375513_1218000076017087565_n.jpg";
import CleanImage22 from "../../assets/images/438089729_817910876876242_5564391758149576460_n.jpg";
import CleanImage23 from "../../assets/images/438089822_1104436250852636_957264799924397053_n.jpg";
import CleanImage24 from "../../assets/images/438089913_974324327721806_9135182903837227813_n.jpg";
import CleanImage25 from "../../assets/images/438089940_959846852123532_7745369108235961850_n.jpg";
import CleanImage26 from "../../assets/images/438094931_261462940384337_3750743257061433692_n.jpg";
import CleanImage27 from "../../assets/images/438095032_473570405201295_6439156868784724567_n.jpg";
import CleanImage28 from "../../assets/images/438101950_424037143828345_288720434556140480_n.jpg";
import CleanImage29 from "../../assets/images/438115783_980840770416730_4075999874637711218_n.jpg";
import CleanImage30 from "../../assets/images/438124898_2587393961431814_550019216323379183_n.jpg";
import CleanImage31 from "../../assets/images/438124991_411559211641512_2172175257621272467_n.jpg";
import CleanImage32 from "../../assets/images/438125044_935833158553962_1945687870856661188_n.jpg";

import MasonryLayout from "./ContentContainer/ContentContainer";

import "./gallery.scss";

const photos = [
  {
    id: 0,
    src: CleanImage1,
    alt: "photo0",
  },
  {
    id: 1,
    src: CleanImage2,
    alt: "photo1",
  },
  {
    id: 2,
    src: CleanImage3,
    alt: "photo2",
  },
  {
    id: 3,
    src: CleanImage4,
    alt: "photo3",
  },
  {
    id: 4,
    src: CleanImage5,
    alt: "photo4",
  },
  {
    id: 5,
    src: CleanImage6,
    alt: "photo5",
  },
  {
    id: 6,
    src: CleanImage7,
    alt: "photo6",
  },
  {
    id: 7,
    src: CleanImage8,
    alt: "photo7",
  },
  {
    id: 8,
    src: CleanImage9,
    alt: "photo8",
  },
  {
    id: 9,
    src: CleanImage10,
    alt: "photo9",
  },
  {
    id: 10,
    src: CleanImage11,
    alt: "photo10",
  },
  {
    id: 11,
    src: CleanImage12,
    alt: "photo11",
  },
  {
    id: 12,
    src: CleanImage13,
    alt: "photo12",
  },
  {
    id: 13,
    src: CleanImage14,
    alt: "photo13",
  },
  {
    id: 14,
    src: CleanImage15,
    alt: "photo14",
  },
  {
    id: 15,
    src: CleanImage16,
    alt: "photo15",
  },
  {
    id: 16,
    src: CleanImage17,
    alt: "photo16",
  },
  {
    id: 17,
    src: CleanImage18,
    alt: "photo17",
  },
  {
    id: 18,
    src: CleanImage19,
    alt: "photo18",
  },
  {
    id: 19,
    src: CleanImage20,
    alt: "photo19",
  },
  {
    id: 20,
    src: CleanImage21,
    alt: "photo20",
  },
  {
    id: 21,
    src: CleanImage22,
    alt: "photo21",
  },
  {
    id: 22,
    src: CleanImage23,
    alt: "photo22",
  },
  {
    id: 23,
    src: CleanImage24,
    alt: "photo23",
  },
  {
    id: 24,
    src: CleanImage25,
    alt: "photo24",
  },
  {
    id: 25,
    src: CleanImage26,
    alt: "photo25",
  },
  {
    id: 26,
    src: CleanImage27,
    alt: "photo26",
  },
  {
    id: 27,
    src: CleanImage28,
    alt: "photo27",
  },
  {
    id: 28,
    src: CleanImage29,
    alt: "photo28",
  },
  {
    id: 29,
    src: CleanImage30,
    alt: "photo29",
  },
  {
    id: 30,
    src: CleanImage31,
    alt: "photo30",
  },
  {
    id: 31,
    src: CleanImage32,
    alt: "photo31",
  },
];

const Gallery = () => {
  useEffect(() => window.scrollTo(0, 0));

  const isLargeScreen = useMediaQuery({ query: "(min-device-width: 845px)" });
  const isMobileScreen = useMediaQuery({ query: "(max-width: 844px)" });

  return (
    <div className="main main--gallery">
      <h1 className="main__title" style={{ color: "black" }}>
        Galeria
      </h1>
      <hr />
      <div className="main__content">
        <div className="content__imgContainer">
          {isMobileScreen && (
            <MasonryLayout columns={1} gap={10}>
              {photos.map((photo) => {
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
              {photos.map((photo) => {
                return (
                  <img
                    loading="lazy"
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
