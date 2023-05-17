import { store } from "../Store";
import { useEffect } from "react";

export const Integraions = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("Integrations");
  });
  return <div className="text-black"></div>;
};
