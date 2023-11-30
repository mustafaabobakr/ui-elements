import React, { memo } from "react";
import styles from "./CheckBox.module.css";

interface CheckBoxProps {
	isOn: boolean;
	handleToggle: React.ChangeEventHandler<HTMLInputElement>;
	onColor: string;
	offColor: string;
	size?: number;
}
const CheckBox: React.FC<CheckBoxProps> = ({ isOn, handleToggle, onColor, offColor, size = 20 }) => {
	return (
		<>
			<input
				checked={isOn}
				onChange={handleToggle}
				className={styles["switch-checkbox"]}
				id={`switch`}
				type="checkbox"
			/>
			<label style={{ background: isOn ? onColor : offColor }} className={styles["switch-label"]} htmlFor={`switch`}>
				<span className={styles[`switch-button`]} />
			</label>
		</>
	);
};

CheckBox.displayName = "CheckBox";
export default memo(CheckBox, (prevProps: { isOn: boolean }, nextProps: { isOn: boolean }) => {
	// Only re-render when 'isOn' changes
	return prevProps.isOn === nextProps.isOn;
});
