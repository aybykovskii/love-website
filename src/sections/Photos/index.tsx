import React from "react";

import { useStyles } from "./styles";
import { Slider, Title } from "@components";

export type PhotosProps = {};
export const Photos: React.FC<PhotosProps> = () => {
  const classes = useStyles();
  return (
    <section className={classes["section-1"]}>
      <Title subtitle="Пара снимков из нашей жизни">Наши фотографии</Title>
      <Slider
        images={[
          <div className={classes.photo + " " + classes.red}></div>,
          <div className={classes.photo + " " + classes.green}></div>,
          <div className={classes.photo + " " + classes.red}></div>,
          <div className={classes.photo + " " + classes.green}></div>,
          <div className={classes.photo + " " + classes.red}></div>,
          <div className={classes.photo + " " + classes.green}></div>,
          <div className={classes.photo + " " + classes.red}></div>,
        ]}
      />
    </section>
  );
};
