"use client";
import React, { useState, useEffect, useCallback, memo, ElementRef, useRef } from "react";
import CardWithShadow from "@/components/CardWithShadow";
import CheckBox from "@/components/CheckBox";
import SegmentedControl from "@/components/SegmentedControl";
import CardHovered from "@/components/CardHovered/CardHovered";

interface RenderAllProps {}
const RenderAll: React.FC<RenderAllProps> = ({}: RenderAllProps) => {
	const [selectedValue1, setSelectedValue1] = useState("complete");
	const [selectedValue2, setSelectedValue2] = useState("second");
	const [checked, setChecked] = useState(true);

	const controlLeftRef = useRef<ElementRef<"div">>(null);
	const week1Ref = useRef<ElementRef<"div">>(null);
	const week2Ref = useRef<ElementRef<"div">>(null);
	const week3Ref = useRef<ElementRef<"div">>(null);

	return (
		<>
			<h1 className={"gradient-text-shine"}>React TypeScript Modern UI Elements</h1>
			<CardWithShadow>
				<h2>IOS Checkbox</h2>
				<CheckBox
					isOn={checked}
					handleToggle={() => setChecked(!checked)}
					onColor="#34C759"
					offColor="rgba(120, 120, 128, 0.16)"
				/>
			</CardWithShadow>

			<h1 className="txtGrad">IOS Segmented Control</h1>
			<SegmentedControl
				name="group-2"
				callback={(val) => setSelectedValue2(val)}
				controlRef={controlLeftRef}
				defaultIndex={1}
				segments={[
					{
						label: "Week 1",
						value: "first",
						ref: week1Ref,
					},
					{
						label: "Week 2",
						value: "second",
						ref: week2Ref,
					},
					{
						label: "Week 3",
						value: "third",
						ref: week3Ref,
					},
				]}
			/>
			<p className="selected-item">Selected: {selectedValue2}</p>
			<CardHovered>
				<header className="space-y-3 relative z-10 p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.60)_0%,_rgba(24,_24,_27,_0.00)_100%)]">
					<h3 className="text-zinc-100 font-semibold">Beautifully designed</h3>
					<p className="text-zinc-300">
						Float UI allows you build beautiful and modern websites regardless of your design skills.
					</p>
				</header>
				<main className={"flex flex-col"}></main>
			</CardHovered>
		</>
	);
};

RenderAll.displayName = "RenderAll"; // valuable for debugging with React DevTools
export default memo(RenderAll);
