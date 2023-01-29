import React from "react";
import styles from "./Slider.module.css";

type Props = {
  label: string;
};

function Slider({ label, ...delegated }: Props) {
  const id = React.useId();
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input {...delegated} type="range" id={id} className={styles.slider} />
    </div>
  );
}

export default Slider;
