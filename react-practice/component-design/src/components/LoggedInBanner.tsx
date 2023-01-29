import Banner from "./ui/banner/Banner";
import { User } from "../App";
import React from "react";

type Props = {
  type: "success" | "error";
  user: User;
  children: React.ReactNode;
};

export function LoggedInBanner({ type, user, children }: Props) {
  if (!user || user.registrationStatus === "unverified") {
    return null;
  }

  return <Banner type={type}>{children}</Banner>;
}
