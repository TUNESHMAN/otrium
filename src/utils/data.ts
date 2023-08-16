import { Category } from "../interfaces/category";
import type { DataNode } from "antd/es/tree";

export function createDataTree(data: Category[], parent = "0") {
  const hashTable = Object.create(null);
  data.forEach(
    (item) =>
      (hashTable[item.id] = { key: item.id, title: item.name, children: [] })
  );

  const dataTree: DataNode[] = [];
  data
    .filter((item) => item.parent === parent)
    .forEach((item) => {
      return dataTree.push({
        key: item.id,
        title: item.name,
        children: createDataTree(data, item.id),
      });
    });
  return dataTree;
}
