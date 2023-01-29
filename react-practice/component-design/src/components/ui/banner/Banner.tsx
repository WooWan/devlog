import styles from "./Banner.module.css";
import React from "react";
import { User } from "../../../App";

type Props = {
  type: "success" | "error";
  // user: User;
  children: React.ReactNode;
};
export default function Banner({ type, children }: Props) {
  const backgroundColor =
    type === "success" ? "var(--color-success)" : "var(--color-error)";

  // Banner ui 를 담담하는 컴포넌트가 구체적인 로직에 대해서 알고 있어서 확장하기 힘든 컴포넌트가 되었음
  // if (!user || user.registrationStatus === "unverified") {
  //   return null;
  // }

  return (
    <div className={styles.banner} style={{ backgroundColor }}>
      {children}
    </div>
  );
}
