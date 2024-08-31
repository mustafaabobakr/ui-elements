"use client";
import { type ComponentPropsWithoutRef, type FC, memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import type { FileSystemNode } from "./type";

interface FilesystemItemAnimatedProps extends ComponentPropsWithoutRef<"li"> {
  node: FileSystemNode;
  defaultOpen?: boolean;
}
const FilesystemItemAnimated: FC<Readonly<FilesystemItemAnimatedProps>> = ({
  node,
  defaultOpen = true,
  ...props
}: Readonly<FilesystemItemAnimatedProps>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const folderHaveContents = Boolean(node?.nodes && node?.nodes?.length > 0);
  const handleToggleChevron = () => setIsOpen(!isOpen);
  return (
    <li key={node.name} data-testid="FilesystemItemAnimated" {...props}>
      <span className="flex items-center gap-1.5 py-1">
        {folderHaveContents && (
          <button
            aria-label={"toggle expand folder"}
            type={"button"}
            onClick={handleToggleChevron}
            className="p-1 -m-1"
          >
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="flex"
            >
              <ChevronRightIcon className="size-4 text-gray-500" />
            </motion.span>
          </button>
        )}

        {node?.nodes ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${node.nodes.length === 0 ? "ml-[22px]" : ""}`}
          />
        ) : (
          <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
        )}
        <span>{node.name}</span>
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="pl-6 overflow-hidden flex flex-col justify-end"
          >
            {node.nodes?.map((node) => (
              <FilesystemItemAnimated node={node} key={node.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

FilesystemItemAnimated.displayName = "FilesystemItemAnimated";
export default memo(FilesystemItemAnimated);
