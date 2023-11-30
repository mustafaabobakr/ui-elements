"use client";
import { memo } from "react";
import Typography from "../Typography";

interface IndeterminateCheckboxProps {
	label: string;
	value: string;
	checked: boolean;
	indeterminate: boolean;
	onChange: (value: string, checked: boolean) => void;
}
/**
 * @description - the Checkbox component takes a checked prop that determines whether the checkbox is checked or not,
 * @param label - the label prop is used to display the label of the checkbox.
 * @param value - the value prop is used to set the value of the checkbox.
 * @param checked - the checked prop is used to determine whether the checkbox is checked or not.
 * @param indeterminate - the indeterminate prop is used to determine whether the checkbox is in an indeterminate state or not.
 * @param onChange - is called with the new value of the checkbox when it is clicked.
 *
 * The ref prop is used to set the indeterminate property of the input element to the value of the indeterminate prop.
 * This allows the checkbox to be in an indeterminate state when the indeterminate prop is true.

 */
const IndeterminateCheckbox: React.FC<IndeterminateCheckboxProps> = ({
	label,
	value,
	checked,
	indeterminate,
	onChange,
}: IndeterminateCheckboxProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newChecked = event.target.checked;
		onChange(value, newChecked);
	};

	return (
		<label
			className={
				"inline-flex items-center gap-1 h-[var(--language-Selector-language-box-height)] cursor-pointer hover:bg-gray-100 px-2 rounded-md"
			}>
			<input
				type="checkbox"
				className={"outline-none focus:outline-none cursor-pointer"}
				checked={checked}
				onChange={handleChange}
				ref={(el) => el && (el.indeterminate = indeterminate)}
			/>
			<Typography tag={"span"} variant={"bodySm"}>
				{label}
			</Typography>
		</label>
	);
};

IndeterminateCheckbox.displayName = "IndeterminateCheckbox"; // valuable for debugging with React DevTools
export default memo(IndeterminateCheckbox);
