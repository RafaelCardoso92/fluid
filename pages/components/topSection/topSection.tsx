import styles from "./topSection.module.scss";

interface Props {
  data: {
    iframe: {
      src: string;
      title: string;
    };
    text1: string;
    text2: string;
    title: string;
    topText: string;
    videoCaption: string;
  };
}
export default function TopSection(props: Props) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentTop}>{props.data.topText}</div>
      <div className={styles.contentWrap}>
        <div className={styles.contentLeft}>
          <div className={styles.verticalWrap}>
            <div className={styles.contentVideo}>
              <iframe
                width="100%"
                height="100%"
                src={props.data.iframe.src}
                title={props.data.iframe.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className={styles.contentCaption}>
              <span>{props.data.videoCaption}</span>
            </div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.verticalWrap}>
            <div className={styles.contentFloatTitle}>{props.data.title}</div>
            <div className={styles.contentFloatText}>{props.data.text1}</div>
            <div className={styles.contentFloatText}>{props.data.text2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
