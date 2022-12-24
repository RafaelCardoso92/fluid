import styles from "./slider.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
interface Props {
  data: {
    sliderData: [
      {
        date: string;
        text: string;
      }
    ];
    title1: string;
    title2: string;
  };
}

export default function Slider(props: Props) {
  const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
  };
  const items = props.data.sliderData.map((sliderData, index) => (
    <div className={styles.data} key={index} data-value={index}>
      <div className={styles.dataDate}>{sliderData.date}</div>
      <div className={styles.dataText}>{sliderData.text}</div>
    </div>
  ));
  const renderNextButton = () => {
    return <div className={styles.Rightbutton} />;
  };

  const renderPrevButton = () => {
    return <div className={styles.Leftbutton} />;
  };
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.contentSliderTitle}>{props.data.title1}</div>
      <div className={styles.contentSliderTitle}>{props.data.title2}</div>
      <hr />
      <div className={styles.contentSlider}>
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          responsive={responsive}
          controlsStrategy="responsive"
          keyboardNavigation={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
}
