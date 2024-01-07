import { format } from "date-fns";

interface NodeData {
  id: number | string;
  content: string;
  date: string;
}

const mockData: NodeData[] = [
  { id: 1, content: "新年开始，写下第一篇博客", date: "2024-01-01" },
  {
    id: 2,
    content: "新年开始，写下第一篇博客",
    date: "2024-01-02",
  },
  {
    id: 3,
    content: "新年开始，写下第一篇博客",
    date: "2024-01-03",
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
      <div className="text-center mb-[50px]">
        <button className="btn btn-active btn-neutral">今年的里程碑</button>
      </div>
      <div>
        <ul className="timeline timeline-vertical">
          {milestoneData.map((node, index) => {
            return (
              <li key={node.id} className="h-[100px]">
                {index ? <hr /> : ""}
                <div className="timeline-start">{format(node.date, "M月d日")}</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">{node.content}</div>
                {index !== milestoneData.length - 1 ? <hr /> : ""}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MileStone;
