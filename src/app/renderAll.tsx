"use client";
import React, { type ElementRef, memo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import CardHovered from "@/components/CardHovered/CardHovered";
import CardShadowAnimated from "@/components/CardShadowAnimated/CardShadowAnimated";
import CardWithShadow from "@/components/CardWithShadow";
import CheckBox from "@/components/CheckBox";
import MenuBar from "@/components/MacOS/MenuBar";
import GlassMenu from "@/components/MenuMobile/glass/GlassMenu";
import SegmentedControl from "@/components/SegmentedControl";
import TabsTransition from "@/components/TabsTransition/TabsTransition";
import ThemeSwitcher from "@/components/switch/ThemeSwitcher";
import { fileSystemNodes } from "@/components/FilesystemItem/example";
import FileSystem from "@/components/FilesystemItem/FileSystem";
import ShinyButton from "@/components/Button/ShinyButton";

const RenderAll: React.FC = () => {
  const router = useRouter();
  const [selectedValue1, setSelectedValue1] = useState("complete");
  const [selectedValue2, setSelectedValue2] = useState("second");
  const [checked, setChecked] = useState(true);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const controlLeftRef = useRef<ElementRef<"div">>(null);
  const week1Ref = useRef<ElementRef<"div">>(null);
  const week2Ref = useRef<ElementRef<"div">>(null);
  const week3Ref = useRef<ElementRef<"div">>(null);

  const goToPricingPage = React.useCallback(() => {
    router.push("/pricing");
  }, []);

  return (
    <>
      <MenuBar />
      <button
        type={"button"}
        onClick={() => setSideMenuOpen(true)}
        className="fixed z-50 top-9 left-6 text-white text-xs bg-black-600"
      >
        Open Side Menu
      </button>
      <AnimatePresence>
        {sideMenuOpen && (
          <m.aside
            className="fixed z-50 top-6 left-0 h-full w-96 flex px-3 py-12 bg-black-600"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            <button
              type={"button"}
              onClick={() => setSideMenuOpen(false)}
              className={"absolute top-2 right-2 text-white"}
            >
              X
            </button>
            <AnimatePresence>
              {sideMenuOpen && <FileSystem nodes={fileSystemNodes} />}
            </AnimatePresence>
          </m.aside>
        )}
      </AnimatePresence>
      <h1 className={"gradient-text-shine"}>
        React TypeScript Modern UI Elements
      </h1>
      <CardWithShadow>
        <h2>Theme switch</h2>
        <ThemeSwitcher
          isOn={checked}
          handleToggle={() => setChecked(!checked)}
        />
      </CardWithShadow>
      <CardWithShadow>
        <h2>IOS Checkbox</h2>
        <CheckBox
          isOn={checked}
          handleToggle={() => setChecked(!checked)}
          onColor="#34C759"
          offColor="rgba(120, 120, 128, 0.16)"
        />
      </CardWithShadow>
      <h1 className="txtGrad">Tabs Transition</h1>
      <TabsTransition
        onTabChange={(tab) => console.log(tab)}
        tabList={[
          { id: "1", name: "Tab 1", icon: "🎉" },
          { id: "2", name: "Tab 2", icon: "🚀" },
          { id: "3", name: "Tab 3", icon: "🎈" },
          { id: "4", name: "Tab 4", icon: "🎊" },
        ]}
      />
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
            Float UI allows you build beautiful and modern websites regardless
            of your design skills.
          </p>
        </header>
        <main className={"flex flex-col"}></main>
      </CardHovered>
      <CardShadowAnimated />
      <section
        data-testid="GlassMenu_container"
        className={
          "my-4 flex justify-center items-center w-full py-12 bg-black-600 rounded-xl"
        }
      >
        <GlassMenu onPricingClick={goToPricingPage} />
        <ShinyButton>Buy Now</ShinyButton>
      </section>
      <section>
        <div
          data-ref={"https://tryklack.com/?ref=dailydev"}
          className="rounded-3xl border-t border-orange-50 px-3 py-3 shadow-2xl shadow-stone-800/30 backdrop-blur-2xl border-opacity-30 bg-orange-50 bg-opacity-80  right-11 top-24 z-10  w-72 sm:block xl:-right-9"
        >
          <ul className="space-y-0.5 text-[15px] font-medium">
            <li className="group flex cursor-default select-none items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 fill-current text-teal-500/90 transition duration-100 ease-out group-hover:text-orange-50"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M13.9531 25.9062C20.4922 25.9062 25.9062 20.4805 25.9062 13.9531C25.9062 7.41406 20.4805 2 13.9414 2C7.41406 2 2 7.41406 2 13.9531C2 20.4805 7.42578 25.9062 13.9531 25.9062ZM12.6406 19.6836C12.2422 19.6836 11.9141 19.5195 11.6094 19.1094L8.66797 15.5C8.49219 15.2656 8.38672 15.0078 8.38672 14.7383C8.38672 14.2109 8.79688 13.7773 9.32422 13.7773C9.66406 13.7773 9.92188 13.8828 10.2148 14.2695L12.5938 17.3398L17.5977 9.30078C17.8203 8.94922 18.125 8.76172 18.4297 8.76172C18.9453 8.76172 19.4258 9.11328 19.4258 9.66406C19.4258 9.92188 19.2734 10.1914 19.1328 10.4375L13.625 19.1094C13.3789 19.4961 13.0391 19.6836 12.6406 19.6836Z" />
                </svg>
                <span>Enable Klack</span>
              </div>
              <div className="tracking-wider text-stone-400 transition duration-100 ease-out group-hover:text-orange-50">
                ⇧⌘K
              </div>
            </li>
            <li className="flex cursor-default select-none items-center justify-between px-3 relative before:absolute before:left-3 before:right-3 before:h-px before:content-[''] before:bg-stone-800 before:bg-opacity-15 !mb-0 pt-[11px] text-sm !mt-1.5 before:top-0 text-stone-500">
              Configure:
            </li>
            <li className="flex cursor-default select-none items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 fill-current opacity-90"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M13.6328 24.6836C14.4062 24.6836 14.957 24.1328 14.957 23.3711V5.39453C14.957 4.63281 14.4062 4.01172 13.6094 4.01172C13.0586 4.01172 12.6953 4.25781 12.0977 4.82031L7.09375 9.50781C7.02344 9.57812 6.91797 9.61328 6.80078 9.61328H3.44922C1.85547 9.61328 1 10.4922 1 12.1797V16.5391C1 18.2383 1.85547 19.1055 3.44922 19.1055H6.80078C6.91797 19.1055 7.02344 19.1406 7.09375 19.2109L12.0977 23.9453C12.625 24.4609 13.082 24.6836 13.6328 24.6836ZM19.1523 19.3281C19.5391 19.5977 20.0898 19.5156 20.4062 19.0586C21.3086 17.875 21.8477 16.1289 21.8477 14.3359C21.8477 12.543 21.3086 10.8086 20.4062 9.61328C20.0898 9.15625 19.5391 9.0625 19.1523 9.34375C18.6719 9.67188 18.6016 10.2578 18.9648 10.7383C19.6445 11.6758 20.0312 12.9766 20.0312 14.3359C20.0312 15.6953 19.6328 16.9844 18.9648 17.9336C18.6133 18.4258 18.6719 18.9883 19.1523 19.3281ZM23.4883 22.3867C23.9219 22.6797 24.4609 22.5742 24.7773 22.1289C26.2773 20.0664 27.1562 17.2305 27.1562 14.3359C27.1562 11.4414 26.2891 8.58203 24.7773 6.54297C24.4609 6.09766 23.9219 5.99219 23.4883 6.28516C23.0547 6.57812 22.9844 7.12891 23.3242 7.60938C24.6016 9.41406 25.3398 11.8398 25.3398 14.3359C25.3398 16.832 24.5781 19.2344 23.3242 21.0625C22.9961 21.543 23.0547 22.0938 23.4883 22.3867Z" />
                </svg>
                <span>Volume</span>
              </div>
              <div>
                <svg
                  className="h-3.5 w-3.5 fill-transparent stroke-current stroke-[3px] opacity-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </li>
            <li className="flex cursor-default select-none items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 fill-current opacity-90"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.67969 24.5977H20.8945C23.3555 24.5977 24.5742 23.3789 24.5742 20.9648V6.65625C24.5742 4.24219 23.3555 3.02344 20.8945 3.02344H6.67969C4.23047 3.02344 3 4.23047 3 6.65625V20.9648C3 23.3906 4.23047 24.5977 6.67969 24.5977ZM8.07422 13.8047C8.07422 13.1953 8.49609 12.7734 9.10547 12.7734H12.7734V9.10547C12.7734 8.49609 13.1836 8.0625 13.7812 8.0625C14.3906 8.0625 14.8125 8.49609 14.8125 9.10547V12.7734H18.4922C19.0898 12.7734 19.5234 13.1953 19.5234 13.8047C19.5234 14.4023 19.0898 14.8008 18.4922 14.8008H14.8125V18.4805C14.8125 19.0898 14.3906 19.5117 13.7812 19.5117C13.1836 19.5117 12.7734 19.0781 12.7734 18.4805V14.8008H9.10547C8.49609 14.8008 8.07422 14.4023 8.07422 13.8047Z" />
                </svg>
                <span>Switches</span>
              </div>
              <div>
                <svg
                  className="h-3.5 w-3.5 fill-transparent stroke-current stroke-[3px] opacity-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </li>
            <li className="flex cursor-default select-none items-center justify-between px-3 relative before:absolute before:left-3 before:right-3 before:h-px before:content-[''] before:bg-stone-800 before:bg-opacity-15 !mb-0 pt-[11px] text-sm !mt-1.5 before:top-0 text-stone-500">
              Version 1.6
            </li>
            <li className="flex cursor-default select-none items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50">
              Settings...
            </li>
            <li className="group flex cursor-default select-none items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl relative before:absolute before:left-3 before:right-3 before:h-px before:content-[''] before:bg-stone-800 before:bg-opacity-15 hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50 !mt-[13px] before:-top-[7px]">
              <div>Quit</div>
              <div className="tracking-wider text-stone-400 transition duration-100 ease-out group-hover:text-orange-50">
                ⌘Q
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

RenderAll.displayName = "RenderAll"; // valuable for debugging with React DevTools
export default memo(RenderAll);
