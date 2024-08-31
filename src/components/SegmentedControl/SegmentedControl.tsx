"use client";
import { type ElementRef, type RefObject, memo, useEffect, useRef, useState } from "react";
import styles from "./SegmentedControl.module.css";

interface SegmentedControlProps {
	name: string;
	controlRef: RefObject<HTMLDivElement>;
	segments: {
		label: string;
		value: string;
		ref: RefObject<HTMLDivElement>;
	}[];
	callback: (value: string, index: number) => void;
	defaultIndex?: number;
}
/**
 * @name SegmentedControl
 * @description A segmented control component that allows the user to select a single option from a list of options.
 * @param {string} name - The name of the control.
 * @param {object} controlRef - A ref to the control container.
 * @param {array} segments - An array of objects that contain the label, value, and ref for each segment.
 * @param {function} callback - A callback function that is called when the user selects a segment.
 * @param {number} defaultIndex - The default index of the segment that is selected.
 * @returns {JSX.Element} - A JSX element that renders the SegmentedControl component.
 * @example
 * const [activeSeg, setActiveSeg] = useState<string | undefined>(undefined);
 * <SegmentedControl
 * name="segmented-control"
 * segments={[
 *  {
 *    label: 'Segment 1',
 *    value: 'segment-1',
 *    ref: useRef<HTMLDivElement>(null),
 *  },
 * {
 *    label: 'Segment 2',
 *    value: 'segment-2',
 *    ref: useRef<HTMLDivElement>(null),
 *  },
 * ]}
 * callback={(value, index) =>setActiveSeg(value, index)}
 * defaultIndex={0}
 * controlRef={useRef<HTMLDivElement>(null)}
 * />
 */
const SegmentedControl: React.FC<SegmentedControlProps> = ({ name, segments, callback, defaultIndex, controlRef }) => {
	const componentReady = useRef<ElementRef<"article">>(null);
	const [activeIndex, setActiveIndex] = useState<number | undefined>(defaultIndex);

	const onInputChange = (value: string, index: number) => {
		setActiveIndex(index);
		callback(value, index);
	};

	// Determine when the component is "ready"
	useEffect(() => {
		if (componentReady.current) {
			componentReady.current.classList.add(styles["ready"]);
		}
	}, []);

	// on defaultIndex change set activeIndex
	useEffect(() => {
		setActiveIndex(defaultIndex);
	}, [defaultIndex]);

	useEffect(() => {
		if (!controlRef?.current) return;
		if (activeIndex === undefined || activeIndex === null) {
			// remove highlight
			const { style } = controlRef?.current;
			style.setProperty("--highlight-width", `0px`);
			style.setProperty("--highlight-x-pos", `0px`);
			return;
		}
		const activeSegmentRef = segments[activeIndex].ref;
		if (!activeSegmentRef?.current) return;
		const { offsetWidth, offsetLeft } = activeSegmentRef.current;
		if (!controlRef?.current) return;
		const { style } = controlRef?.current;

		style.setProperty("--highlight-width", `${offsetWidth}px`);
		style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
	}, [activeIndex, callback, controlRef, segments]);

	return (
		<article data-label="SegmentedControl" className={styles["controls-container"]} ref={controlRef}>
			<div className={`${styles["controls"]}`}>
				{segments?.map((item, i) => (
					<div
						key={item.value}
						className={`${styles["segment"]} ${i === activeIndex ? styles["active"] : ""}`}
						ref={item.ref}>
						<input
							type="radio"
							value={item.value}
							id={item.label}
							name={name}
							onChange={() => onInputChange(item.value, i)}
							checked={i === activeIndex}
						/>
						<label htmlFor={item.label}>{item.label}</label>
					</div>
				))}
			</div>
		</article>
	);
};

SegmentedControl.displayName = "SegmentedControl"; // For React DevTools
export default memo(SegmentedControl);
