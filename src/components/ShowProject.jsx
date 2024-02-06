import styles from "./ShowProject.module.css";
import ReactDOM from "react-dom";

export default function ShowProject({ image, CloseImage }) {
  const BackDrop = () => (
    <div className={styles.backdrop} onClick={CloseImage} />
  );
  const OverLay = () => (
    <div className={styles.modal}>
      <img className={styles.header} src={image} />
    </div>
  );
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <OverLay />,
        document.getElementById("overlay-root"),
      )}
    </>
  );
}
