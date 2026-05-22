"use client";

import { useId, useState } from "react";

type ImageCompareSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export function ImageCompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: ImageCompareSliderProps) {
  const [position, setPosition] = useState(50);
  const sliderId = useId();

  return (
    <div className="compare-slider">
      <div className="compare-slider__images">
        <span className="compare-slider__badge compare-slider__badge--before">Before</span>
        <span className="compare-slider__badge compare-slider__badge--after">After</span>

        <img src={beforeSrc} alt={beforeAlt} className="compare-slider__image" />
        <div className="compare-slider__after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <img src={afterSrc} alt={afterAlt} className="compare-slider__image" />
        </div>

        <div className="compare-slider__divider" style={{ left: `${position}%` }}>
          <button type="button" className="compare-slider__handle" aria-hidden="true" tabIndex={-1}>
            <span className="compare-slider__chevron">{"\u2039"}</span>
            <span className="compare-slider__chevron">{"\u203A"}</span>
          </button>
        </div>

        <input
          id={sliderId}
          className="compare-slider__range"
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Compare before and after image"
        />
      </div>
      <label htmlFor={sliderId} className="compare-slider__label">Slide to compare raw images</label>
    </div>
  );
}
