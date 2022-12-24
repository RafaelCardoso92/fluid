import styles from "./midSection.module.scss";
import Image from "next/image";
import Button from "../button/button";
import Mask from "../../../images/Mask.png";
interface Props {
  data: {
    text: string;
    title: string;
  };
}
export default function MidSection(props: Props) {
  return (
    <div className={styles.midContainer}>
      <div className={styles.contentLeft}>
        <div className={styles.midContentImage}>
          <Image src={Mask} alt="GardX logo" />
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.midContent}>
          <div className={styles.midContentTitle}>{props.data.title}</div>
          <div className={styles.midContentText}>{props.data.text}</div>
          <div className={styles.midButton}>
            <Button variant="primary" text="button" />
          </div>
        </div>
      </div>
    </div>
  );
}
