import React from "react";
import { Title, Timer } from "@components";
import { useStyles } from "./styles";

export const TimerSec = () => {
  const classes = useStyles();

  return (
    <section className={classes.section_2}>
      <Title subtitle="lorem ipsum dolor">Lorem, ipsum dolor.</Title>
      <Timer startTime={new Date(2019, 9, 17, 21, 51)} />
    </section>
  );
};
