import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContex";

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext() must be in the GlobalContexProvayder()",
    );
  }
  return context;
}
