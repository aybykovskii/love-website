import React from "react";
import moment from "moment";
import { useStyles } from "./styles";

let updateInterval: number | undefined = undefined;
export type TimerProps = {
  startTime: Date;
};
export const Timer: React.FC<TimerProps> = ({ startTime }) => {
  const classes = useStyles();

  const [periodMs, setPeriodMs] = React.useState<moment.Duration>(
    moment.duration(moment(Date.now()).diff(moment(startTime.getTime())))
  );

  const years = periodMs.years();
  const months = periodMs.months();
  const days = periodMs.days();
  const hours = periodMs.hours();
  const minutes = periodMs.minutes();

  React.useEffect(() => {
    if (updateInterval) {
      clearInterval(updateInterval);
    }
    updateInterval = (setInterval(() => {
      setPeriodMs(
        moment.duration(moment(Date.now()).diff(moment(startTime.getTime())))
      );
    }, 3e4) as any) as number;
    return () => {
      clearInterval(updateInterval);
    };
  }, [startTime]);

  function formatNumber(n: number) {
    if (n < 10) {
      return `0${n}`;
    }
    return n.toString();
  }

  function formatWords(
    num: number,
    firstWord: string,
    secondWord: string,
    thirdWord: string
  ) {
    if ((num < 10 || num > 20) && num % 10 == 1) {
      return firstWord;
    } else if ((num < 10 || num > 20) && num % 10 > 1 && num % 10 < 5) {
      return secondWord;
    } else {
      return thirdWord;
    }
  }

  return (
    <ul className={classes.timer}>
      {years > 0 ? (
        <li className={classes.timer_item}>
          <div className={classes.time}>{formatNumber(years)}</div>
          <div className={classes.word}>
            {formatWords(years, "год", "года", "лет")}
          </div>
        </li>
      ) : (
        ""
      )}
      {months > 0 ? (
        <li className={classes.timer_item}>
          <div className={classes.time}>{formatNumber(months)}</div>
          <div className={classes.word}>
            {formatWords(months, "месяц", "месяца", "месяцев")}
          </div>
        </li>
      ) : (
        ""
      )}
      {days > 0 ? (
        <li className={classes.timer_item}>
          <div className={classes.time}>{formatNumber(days)}</div>
          <div className={classes.word}>
            {formatWords(days, "день", "дня", "дней")}
          </div>
        </li>
      ) : (
        ""
      )}
      {hours > 0 ? (
        <li className={classes.timer_item}>
          <div className={classes.time}>{formatNumber(hours)}</div>
          <div className={classes.word}>
            {formatWords(hours, "час", "часа", "часов")}
          </div>
        </li>
      ) : (
        ""
      )}
      {minutes > 0 ? (
        <li className={classes.timer_item}>
          <div className={classes.time}>{formatNumber(minutes)}</div>
          <div className={classes.word}>
            {formatWords(minutes, "минуту", "минуты", "минут")}
          </div>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
