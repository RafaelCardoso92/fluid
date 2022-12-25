import styles from "../styles/Home.module.scss";
import Partners from "./components/partners/partners";
import Map from "./components/Map/map";
import SectionContainer from "./components/sectionContainer/sectionContainer";
import Slider from "./components/slider/slider";
import MidSection from "./components/midSection/midSection";
import TopSection from "./components/topSection/topSection";

export default function Home() {
  const DataText = {
    Index: {
      indexTitle: "about us",
      indexTitle2: "Lorem Ipsum",
      indexText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.backgroundAboutUsText}>
          {DataText.Index.indexTitle}
        </div>
        <div className={styles.backgroundAboutUs}></div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentFloat}>
          <div className={styles.contentLeft}>
            <div className={styles.contentFloatTitle}>
              {DataText.Index.indexTitle2}
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.contentFloatText}>
              {DataText.Index.indexText}
            </div>
          </div>
        </div>
        <TopSection />
        <MidSection />
        <Slider />
        <SectionContainer />
        <Map />
        <Partners />
      </div>
    </div>
  );
}
