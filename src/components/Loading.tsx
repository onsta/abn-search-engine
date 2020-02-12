import React from "react";
import { range } from "ramda";

interface Props {
  repeat?: number;
}
export const Loading = ({ repeat }: Props) => {
  const times = repeat || 1;

  return (
    <React.Fragment>
      {range(0, times).map((i: number) => {
        return (
          <div className="my-1" key={i}>
            <div className="p-16 leading-normal bg-gray-400 border border-gray-400 rounded"></div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
