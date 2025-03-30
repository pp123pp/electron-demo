import { memo } from "react";

import type { GetProps, TreeDataNode } from "antd";
import { Tree } from "antd";

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const { DirectoryTree } = Tree;

const treeData: TreeDataNode[] = [
    {
        title: "parent 0",
        key: "0-0",
        children: [
            { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
            { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
        ],
    },
    {
        title: "parent 1",
        key: "0-1",
        children: [
            { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
            { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
        ],
    },
];

export default memo(function () {
    const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
        console.log("Trigger Select", keys, info);
    };

    const onExpand: DirectoryTreeProps["onExpand"] = (keys, info) => {
        console.log("Trigger Expand", keys, info);
    };

    return (
        <DirectoryTree
            draggable
            defaultExpandAll
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
        />
    );
});
