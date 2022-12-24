import styles from "./sectionContainer.module.scss";
import Section from "../section/section";
import Section1 from "../../../images/section1.png";
import Section2 from "../../../images/section2.png";
import Section3 from "../../../images/section3.png";
interface Props {
  data: any;
}
export default function SectionContainer(props: Props) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.section}>
        <Section
          image={Section1}
          title={props.data.section1.title}
          text={props.data.section1.text}
          buttonText="button"
        />
      </div>

      <div className={styles.section}>
        <Section
          image={Section2}
          title={props.data.section2.title}
          text={props.data.section2.text}
          buttonText="button"
        />
      </div>

      <div className={styles.section}>
        <Section
          image={Section3}
          title={props.data.section3.title}
          text={props.data.section3.text}
          buttonText="button"
        />
      </div>
    </div>
  );
}
