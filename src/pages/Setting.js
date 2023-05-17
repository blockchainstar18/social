import { store } from "../Store";
import { useEffect } from "react";

export const Settings = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("Settings");
  });
  return <div className="text-black"></div>;
};
