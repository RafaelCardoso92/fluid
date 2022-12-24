import styles from "../styles/Home.module.scss";
import Partners from "./components/partners/partners";
import Map from "./components/Map/map";
import SectionContainer from "./components/sectionContainer/sectionContainer";
import Slider from "./components/slider/slider";
import MidSection from "./components/midSection/midSection";
import TopSection from "./components/topSection/topSection";
import { dataText } from "./constants";

interface Props {
  data: any;
}
export default function Home({ data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.backgroundAboutUsText}>
          {data.dataText.Index.indexTitle}
        </div>
        <div className={styles.backgroundAboutUs}></div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentFloat}>
          <div className={styles.contentLeft}>
            <div className={styles.contentFloatTitle}>
              {data.dataText.Index.indexTitle2}
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.contentFloatText}>
              {data.dataText.Index.indexText}
            </div>
          </div>
        </div>
        <TopSection data={data.dataText.topSection} />
        <MidSection data={data.dataText.midSection} />
        <Slider data={data.dataText.slider} />
        <SectionContainer data={data.dataText.section} />
        <Map data={data.dataText.map} />
        <Partners data={data.dataText.partners} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: { dataText },
    },
    revalidate: 1,
  };
}
