import React from "react";
import { useDispatch } from "react-redux";
import { setStrokeColor } from "./actions";

const COLORS = ["#000000", "#808080", "#c0c0c0", "#ffffff", "#800000"];

export const ColorPanel = () => {
  const dispatch = useDispatch();
  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  };
  return (
    <div className="window colors-panel" style={{ height: 200, width: 300 }}>
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body colors" style={{ height: 100, width: 150 }}>
        {COLORS.map((color: string) => (
          <div
            key={color}
            onClick={() => {
              onColorChange(color);
            }}
            className="color"
            style={{ backgroundColor: color, height: 20, width: 20 }}
          ></div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
