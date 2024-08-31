"use client";
import { type FC, type ComponentPropsWithoutRef, memo } from "react";
import FilesystemItemAnimated from "./FilesystemItemAnimated";
import type { FileSystemNode } from "./type";

interface FileSystemProps extends ComponentPropsWithoutRef<"ul"> {
  nodes: FileSystemNode[];
  defaultOpen?: boolean;
}
const FileSystem: FC<Readonly<FileSystemProps>> = ({
  nodes,
  defaultOpen = true,
  ...props
}: Readonly<FileSystemProps>) => {
  return (
    <ul data-testid="FileSystem" {...props}>
      {nodes.map((node) => (
        <FilesystemItemAnimated
          key={node.name}
          node={node}
          defaultOpen={defaultOpen}
        />
      ))}
    </ul>
  );
};

FileSystem.displayName = "FileSystem";
export default memo(FileSystem);
