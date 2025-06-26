import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import css from "./App.module.css";
import { useState } from "react";

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}
