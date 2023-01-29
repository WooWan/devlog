import React, { ButtonHTMLAttributes, ForwardedRef } from "react";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
const Button = (
  { children, ...delegated }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  console.log(delegated);
  return (
    <button ref={ref} className={styles.btn} {...delegated}>
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
