import React, { useEffect, useState, useRef } from 'react';
import styles from "@/styles/range.module.css"

const RangeSlider = ({ data }) => {
    const [sliderValue, setSliderValue] = useState(data);
    const [highlightWidth, setHighlightWidth] = useState(0);

    useEffect(() => {
        updateSlider();
    }, [sliderValue]);

    const updateSlider = () => {
        let sliderValuePercentage = sliderValue;
        let sliderWidth = document.getElementById('range_slider_1').offsetWidth;
        let rangeSliderValueElement = document.getElementById("range-slider-1-value");

        setHighlightWidth((sliderWidth * sliderValuePercentage) / 100);
        rangeSliderValueElement.innerHTML = `${sliderValuePercentage}%`;
    };

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const handleWindowResize = () => {
        updateSlider();
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className='flex items-center space-x-12 text-sm font-bold'>

            <div className={styles.range_slider_container}>
                <div className={styles.range_track}></div>
                <div id="range-slider-1-track-highlight" className={`${styles.range_track} ${styles.track_highlight}`}
                    style={{ width: `${highlightWidth}px` }}></div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    className={`${styles.slider} ${styles.range_slider_1}`}
                    id="range_slider_1"
                    onChange={handleSliderChange}
                />
            </div>
            <label htmlFor="range_slider_1">
                <span id="range-slider-1-value">{sliderValue}</span>
            </label>
        </div>
    );
};

export default RangeSlider;

