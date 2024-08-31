"use client";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { type ComponentPropsWithoutRef, type FC, memo, useState } from "react";
import type { FileSystemNode } from "./type";

interface FilesystemItemProps extends ComponentPropsWithoutRef<"li"> {
  node: FileSystemNode;
  defaultOpen?: boolean;
}
const FilesystemItem: FC<Readonly<FilesystemItemProps>> = ({
  node,
  defaultOpen = true,
  ...props
}: Readonly<FilesystemItemProps>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const folderHaveContents = Boolean(node?.nodes && node?.nodes?.length > 0);
  const handleToggleChevron = () => setIsOpen(!isOpen);
  return (
    <li key={node?.name} data-testid="FilesystemItem" {...props}>
      <span className="flex items-center gap-1.5 py-1">
        {folderHaveContents && (
          <button
            aria-label={"toggle expand folder"}
            type={"button"}
            onClick={handleToggleChevron}
            className="p-1 -m-1"
          >
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        )}

        {node?.nodes ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${node?.nodes?.length === 0 ? "ml-[22px]" : ""}`}
          />
        ) : (
          <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
        )}
        {node?.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FilesystemItem node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
};

FilesystemItem.displayName = "FilesystemItem";
export default memo(FilesystemItem);
