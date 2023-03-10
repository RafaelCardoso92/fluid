import styles from "./partners.module.scss";
import Image from "next/image";

import Cambria from "../../../images/Cambria.png";
import Citygate from "../../../images/Citygate.png";
import Hendy from "../../../images/Hendy.png";
import Vindis from "../../../images/Vindis.png";
import Superbike from "../../../images/SuperbikeFactory.png";
import Renault from "../../../images/Renault.png";
import Halliwell from "../../../images/HalliwellJones.png";
import Acorn from "../../../images/acorn.svg";
import Jct from "../../../images/jct600.png";

import BmwMotorrad from "../../../images/BMWMotorrad.png";
import Hyundai from "../../../images/Hyundai.svg";
import Harley from "../../../images/HarleyDavidson.png";
import Vauxall from "../../../images/VauxhallFinance.png";
import Santander from "../../../images/Santander.png";
import BMW from "../../../images/BMWFinancialServices.png";
import PSA from "../../../images/PSA.png";
import MG from "../../../images/MG.png";
import Mazda from "../../../images/Mazda.png";

interface Props {}
export default function Partners(props: Props) {
  const leftImages = [
    Cambria,
    Citygate,
    Hendy,
    Vindis,
    Superbike,
    Renault,
    Halliwell,
    Acorn,
    Jct,
  ];

  const rightImages = [
    BmwMotorrad,
    Hyundai,
    Harley,
    Vauxall,
    Santander,
    BMW,
    PSA,
    MG,
    Mazda,
  ];

  const partners = {
    title1: "dealer groups",
    title2: "manufacturers",
  };
  return (
    <div className={styles.partnersContainer}>
      <div className={styles.partnersLeftContainer}>
        <div className={styles.leftTitle}>{partners.title1}</div>
        <div className={styles.dealers}>
          {leftImages.map((leftImage, index) => (
            <div className={styles.leftImage} key={index}>
              <Image src={leftImage} alt={"leftimage" + index} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.partnersRightContainer}>
        <div className={styles.rightTitle}>{partners.title2}</div>
        <div className={styles.manufacturers}>
          {rightImages.map((rightImage, index) => (
            <div className={styles.rightImage} key={index}>
              <Image src={rightImage} alt={"rightimage" + index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
