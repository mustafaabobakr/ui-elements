"use client";
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	type FC,
	type ReactNode,
	memo,
	useEffect,
	useRef,
	useState,
} from "react";
import styles from "./TabsTransition.module.css";
type TabList = { id: string; name: string; icon: ReactNode }[];

interface TabsTransitionProps extends ComponentPropsWithoutRef<"section"> {
	tabList: TabList;
	onTabChange: (tab: TabList[0]) => void;
}
const TabsTransition: FC<Readonly<TabsTransitionProps>> = ({
	tabList,
	onTabChange,
	...props
}: Readonly<TabsTransitionProps>) => {
	const [activeTab, setActiveTab] = useState(tabList[0].id);
	const containerRef = useRef<ElementRef<"article">>(null);
	const activeTabElementRef = useRef<ElementRef<"button">>(null);

	const handleTabChange = (tab: TabList[0]) => {
		onTabChange(tab);
		setActiveTab(tab.id);
	};

	useEffect(() => {
		const container = containerRef.current;
		if (activeTab && container) {
			const activeTabElement = activeTabElementRef.current;

			if (activeTabElement) {
				const { offsetLeft, offsetWidth } = activeTabElement;
				const clipLeft = offsetLeft;
				const clipRight = offsetLeft + offsetWidth;
				container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed(
					0
				)}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed(0)}% round 8px)`;
			}
		}
	}, [activeTab]);

	return (
		<section data-testid='TabsTransition' className={styles.wrapper} {...props}>
			<ul className={styles.list}>
				{tabList?.map((tab) => (
					<li key={tab.id}>
						<button
							type={"button"}
							ref={activeTab === tab.id ? activeTabElementRef : null}
							data-tab={tab.name}
							onClick={() => handleTabChange(tab)}
							className={styles.button}>
							<span>{tab.icon}</span>
							<span>{tab.name}</span>
						</button>
					</li>
				))}
			</ul>
			<article aria-hidden className={styles["clip-path-container"]} ref={containerRef}>
				<ul className={`${styles.list} ${styles["list-overlay"]}`}>
					{tabList.map((tab) => (
						<li key={tab.id}>
							<button
								type={"button"}
								data-tab={tab.name}
								onClick={() => handleTabChange(tab)}
								className={`${styles["button-overlay"]} ${styles.button}`}
								tabIndex={-1}>
								<span>{tab.icon}</span>
								<span>{tab.name}</span>
							</button>
						</li>
					))}
				</ul>
			</article>
		</section>
	);
};

TabsTransition.displayName = "TabsTransition";
export default memo(TabsTransition);
