import React from "react";

import { useStyles } from "./styles";
import { IconArrowLeft, IconArrowRight } from "./svgs";

export type SliderProps = {
  images?: React.ReactElement[];
  slidesToScroll?: number;
  slidesToShow?: number;
  transitionTime?: number;
};
export const Slider: React.FC<SliderProps> = ({
  images = [],
  slidesToScroll: _slidesToScroll = 1,
  slidesToShow = 1,
  transitionTime = 0.4,
}) => {
  const classes = useStyles();

  const [active, setActive] = React.useState<number>(0);
  const [sliderWidth, setSliderWidth] = React.useState<number>(0);
  const [position, setPosition] = React.useState<number>(0);
  const [slidesToScroll, setSlidesToScroll] = React.useState<number>(1);

  const slideWidth = sliderWidth / slidesToShow;

  React.useEffect(() => {
    setSliderWidth(
      document.getElementById(classes["slider"])?.clientWidth || 0
    );
    window.onresize = () => {
      setSliderWidth(
        document.getElementById(classes["slider"])?.clientWidth || 0
      );
    };
  }, []);

  function onDotClick(key: number) {
    let from = Math.abs(position) / slideWidth;
    let to = key;

    if (from < to) {
      setPosition(position - (to - from) * slideWidth);
    } else {
      setPosition(position + (from - to) * slideWidth);
    }
    setActive(key);
    setSlidesToScroll(Math.abs(to - from));
  }

  function onLeftBtnClick() {
    if (active === 0) {
      return;
    }
    setActive(active - _slidesToScroll);
    setPosition(position + slideWidth * _slidesToScroll);
    setSlidesToScroll(_slidesToScroll);
  }

  function onRightBtnClick() {
    if (active === images.length - 1) {
      return;
    }
    setActive(active + _slidesToScroll);
    setPosition(position - slideWidth * _slidesToScroll);
    setSlidesToScroll(_slidesToScroll);
  }

  return (
    <>
      <div className={classes["slider-wrapper"]}>
        <button
          className={classes["slider-wrapper_item"]}
          onClick={onLeftBtnClick}
        >
          <IconArrowLeft />
        </button>
        <div id={classes["slider"]} className={classes["slider"]}>
          <div
            className={classes["slider_slider-track"]}
            style={{
              transform: `translateX(${position}px)`,
              transition: `${transitionTime * slidesToScroll}s`,
            }}
          >
            {images.map((img, key) =>
              React.cloneElement(img, {
                ...img.props,
                style: { ...img.props.style, minWidth: slideWidth },
                key,
              })
            )}
          </div>
        </div>
        <button
          className={classes["slider-wrapper_item"]}
          onClick={onRightBtnClick}
        >
          <IconArrowRight />
        </button>
      </div>
      <ul className={classes["dots-nav-wrapper"]}>
        {images.map((_, key) => (
          <li
            key={key}
            className={
              classes["dots-nav-wrapper_item"] +
              (key === active ? ` ${classes.active}` : "")
            }
            onClick={() => onDotClick(key)}
          />
        ))}
      </ul>
    </>
  );
};
