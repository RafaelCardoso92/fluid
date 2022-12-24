import styles from "../styles/Home.module.scss";
import Partners from "./components/partners/partners";
import Map from "./components/Map/map";
import SectionContainer from "./components/sectionContainer/sectionContainer";
import Slider from "./components/slider/slider";
import MidSection from "./components/midSection/midSection";
import TopSection from "./components/topSection/topSection";
import { DataText } from "./constants";

interface Props {
  data: any;
}
export default function Home({ data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.backgroundAboutUsText}>
          {data.DataText.Index.indexTitle}
        </div>
        <div className={styles.backgroundAboutUs}></div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentFloat}>
          <div className={styles.contentLeft}>
            <div className={styles.contentFloatTitle}>
              {data.DataText.Index.indexTitle2}
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.contentFloatText}>
              {data.DataText.Index.indexText}
            </div>
          </div>
        </div>
        <TopSection data={data.DataText.topSection} />
        <MidSection data={data.DataText.midSection} />
        <Slider data={data.DataText.slider} />
        <SectionContainer data={data.DataText.section} />
        <Map data={data.DataText.map} />
        <Partners data={data.DataText.partners} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: { DataText },
    },
    revalidate: 1,
  };
}
