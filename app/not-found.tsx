import { Metadata } from "next";
import styles from "../styles/error.module.css";

export const metadata: Metadata = {
  title: "Not Found by learning how to dynamic dynamic",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/55555-Jyeon/startNext/assets/134191817/d9eb75ea-5935-4a1f-8596-16169263dc89" />
      <p>Oops! Page not found!</p>
    </div>
  );
}
