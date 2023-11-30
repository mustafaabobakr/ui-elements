"use client";
import { memo } from "react";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

type Item = {
	label: string;
	value: string;
	checked: boolean;
	indeterminate: boolean;
	children?: Item[];
};

export interface IndeterminateListProps {
	items: Item[];
	setItems: (items: Item[]) => void;
}
const IndeterminateList: React.FC<IndeterminateListProps> = ({ items, setItems }: IndeterminateListProps) => {
	const handleItemChange = (value: string, checked: boolean) => {
		const newItems = items.map((item) => {
			if (item.value === value) {
				return {
					...item,
					checked,
					indeterminate: false,
				};
			} else if (item.children) {
				const children = item.children.map((child) => {
					if (child.value === value) {
						return {
							...child,
							checked,
							indeterminate: false,
						};
					} else {
						return child;
					}
				});
				const allChecked = children.every((child) => child.checked);
				const someChecked = children.some((child) => child.checked || child.indeterminate);
				return {
					...item,
					checked: allChecked,
					indeterminate: !allChecked && someChecked,
					children,
				};
			} else {
				return item;
			}
		});
		setItems(newItems);
	};

	return (
		<section className={"flex flex-col items-start"}>
			<IndeterminateCheckbox
				label="Select all"
				value="all"
				checked={items.every((item) => item.checked)}
				indeterminate={items.some((item) => item.checked || item.indeterminate)}
				onChange={(value, checked) => {
					const newItems = items.map((item) => ({
						...item,
						checked,
						indeterminate: false,
						children: item.children?.map((child) => ({
							...child,
							checked,
							indeterminate: false,
						})),
					}));
					setItems(newItems);
				}}
			/>
			{items.map((item) => (
				<article className={"flex flex-col items-start"} key={item.value}>
					<IndeterminateCheckbox
						label={item.label}
						value={item.value}
						checked={item.checked}
						indeterminate={item.indeterminate}
						onChange={handleItemChange}
					/>
					{item.children && (
						<div className={"ms-4 flex gap-4"}>
							{item.children.map((child) => (
								<IndeterminateCheckbox
									key={child.value}
									label={child.label}
									value={child.value}
									checked={child.checked}
									indeterminate={child.indeterminate}
									onChange={handleItemChange}
								/>
							))}
						</div>
					)}
				</article>
			))}
		</section>
	);
};

IndeterminateList.displayName = "IndeterminateList"; // valuable for debugging with React DevTools
export default memo(IndeterminateList);
