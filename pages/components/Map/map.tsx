import styles from "./map.module.scss";
import Image from "next/image";
import MapPin from "../../../images/mapPin.svg";
import MapPopup from "../mapPopup/MapPopup";
interface Props {}
export default function Map(props: Props) {
  const data = {
    title: "WHERE WE OPERATE",
    mapPin: {
      title1: "6 MENA Countries",
      title2: "20 European countries",
      title3: "UK & Ireland",
    },
    mapPopup: {
      title: "Country",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
  };
  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapTitle}>{data.title}</div>
      <div className={styles.mapContentContainer}>
        <div className={styles.mapContent}>
          <Image src={MapPin} alt="map pin" />
          <div className={styles.mapContentText}>{data.mapPin.title1}</div>
        </div>
        <div className={styles.mapContent}>
          <Image src={MapPin} alt="map pin" />
          <div className={styles.mapContentText}>{data.mapPin.title2}</div>
        </div>
        <div className={styles.mapContent}>
          <Image src={MapPin} alt="map pin" />
          <div className={styles.mapContentText}>{data.mapPin.title3}</div>
        </div>
      </div>
      <div className={styles.mapImage}>
        <div className={styles.magicBox1}></div>
        <div className={styles.magicBox2}>
          <div className={styles.box}>
            <MapPopup {...data.mapPopup} />
          </div>
        </div>
        <div className={styles.magicBox3}>
          <div className={styles.box}>
            <MapPopup {...data.mapPopup} />
          </div>
        </div>
        <div className={styles.magicBox4}>
          <div className={styles.box}>
            <MapPopup {...data.mapPopup} />
          </div>
        </div>
        <div className={styles.magicBox5}></div>
        <div className={styles.magicBox6}>
          <div className={styles.box}>
            <MapPopup {...data.mapPopup} />
          </div>
        </div>
      </div>
    </div>
  );
}
