import { NodeData } from "@/types";
import { format, getYear } from "date-fns";
import { MileStoneList } from "./MilestoneList";
import { MilestoneTabs } from "./MilestoneTabs";

const mockData: NodeData[] = [
  {
    id: 1,
    content:
      "新年开始，写下第一篇博客新年开始，写下第一篇博客新年开始，写下第一篇博客新年开始，写下第一篇博客新年开始，写下第一篇博客",
    date: "2024-01-01",
  },
  {
    id: 2,
    content: "新年开始，写下第一篇博客",
    date: "2024-01-02",
  },
  {
    id: 3,
    content: "新年开始，写下第一篇博客",
    date: "2023-01-03",
  },
];

async function getData() {
  // const res = await fetch("https://api.example.com/...");
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
  return mockData;
}

const MileStone = async () => {
  const milestoneData = await getData();

  return (
    <div className="max-w-[1200px] mx-auto">
      <MilestoneTabs milestoneData={milestoneData} />
    </div>
  );
};

export default MileStone;
