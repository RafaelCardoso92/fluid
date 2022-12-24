import styles from "./map.module.scss";
import Image from "next/image";
import MapPin from "../../../images/mapPin.svg";
import MapPopup from "../mapPopup/MapPopup";
interface Props {
  data: {
    title: string;
    mapPin: {
      title1: string;
      title2: string;
      title3: string;
    };
    mapPopup: {
      text: string;
      title: string;
    };
  };
}
export default function Map(props: Props) {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapTitle}>{props.data.title}</div>
      <div className={styles.mapContentContainer}>
        <div className={styles.mapContent}>
          <Image src={MapPin} alt="map pin" />
          <div className={styles.mapContentText}>
            {props.data.mapPin.title1}
          </div>
        </div>
        <div className={styles.mapContent}>
          <Image src={MapPin} alt="map pin" />
          <div className={styles.mapContentText}>
            {props.data.mapPin.title2}
          </div>
        </div>
        <div className={styles.mapContent}>
          <Image src={MapPin} alt="map pin" />
          <div className={styles.mapContentText}>
            {props.data.mapPin.title3}
          </div>
        </div>
      </div>
      <div className={styles.mapImage}>
        <div className={styles.magicBox1}></div>
        <div className={styles.magicBox2}>
          <div className={styles.box}>
            <MapPopup {...props.data.mapPopup} />
          </div>
        </div>
        <div className={styles.magicBox3}>
          <div className={styles.box}>
            <MapPopup {...props.data.mapPopup} />
          </div>
        </div>
        <div className={styles.magicBox4}>
          <div className={styles.box}>
            <MapPopup {...props.data.mapPopup} />
          </div>
        </div>
        <div className={styles.magicBox5}></div>
        <div className={styles.magicBox6}>
          <div className={styles.box}>
            <MapPopup {...props.data.mapPopup} />
          </div>
        </div>
      </div>
    </div>
  );
}
