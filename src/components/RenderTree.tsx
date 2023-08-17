import React, { useState } from "react";
import { Tree } from "antd";
import type { TreeProps } from "antd/es/tree";
import { createDataTree } from "../utils/data";
import response from "../data/response";
import { Typography, Grid } from "@mui/material";
import { DownOutlined } from "@ant-design/icons";
import { AntTreeNodeProps } from "antd/lib/tree/Tree";

const treeData = createDataTree(response.data.categories, "0");

const RenderTree: React.FC = () => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  const onSelect: TreeProps["onSelect"] = (selectedKeys) => {
    setSelectedKeys(selectedKeys as string[]);
  };

  const onCheck: TreeProps["onCheck"] = (
    checkedKeys,
    { node }: AntTreeNodeProps
  ) => {
    const parentNodeKey = node!.props.eventKey;
    if (!expandedKeys.includes(parentNodeKey)) {
      setExpandedKeys([...expandedKeys, parentNodeKey]);
    }

    setCheckedKeys(checkedKeys as string[]);
  };

  const onExpand: TreeProps["onExpand"] = (expandedKeys) => {
    setExpandedKeys(expandedKeys as string[]);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="space-between"
        marginTop={"15px"}
        marginBottom={"15px"}
        alignItems="center"
      >
        <Grid item>
          <Typography
            fontFamily={"Inter"}
            color="#000000"
            fontSize={"28px"}
            fontWeight={400}
            fontStyle={"normal"}
          >
            Checkbox Tree
          </Typography>
        </Grid>
      </Grid>
      <Tree
        checkable
        onSelect={onSelect}
        onCheck={onCheck}
        onExpand={onExpand}
        treeData={treeData}
        checkedKeys={checkedKeys}
        selectedKeys={selectedKeys}
        expandedKeys={expandedKeys}
        switcherIcon={<DownOutlined />}
      />
    </>
  );
};

export default RenderTree;
