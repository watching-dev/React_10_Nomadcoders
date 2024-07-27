import Navigation from "../../components/navigation";
import styles from "../../styles/list.module.css";

export default function AboutUs() {
  return (
    <div>
      <h1 className={styles.h1}>About us</h1>
      <div className={styles.about}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer
      </div>
      <div className={styles.about}> We hope you enjoy your stay!</div>
    </div>
  );
}
