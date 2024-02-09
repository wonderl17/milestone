"use client";

import { NodeData } from "@/types";
import { getYear } from "date-fns";
import { useMemo, useState } from "react";
import { MileStoneList } from "./MilestoneList";

interface MileStoneListProps {
  milestoneData: NodeData[];
}

const getDataYearMap = (data: NodeData[]): Record<string, NodeData[]> => {
  const obj: Record<string, NodeData[]> = {};
  for (const item of data) {
    const year = getYear(item.date);
    if (!obj[year]) {
      obj[year] = [];
    }
    obj[year].push(item);
  }
  return obj;
};

const getDataByYear = (map: Record<string, NodeData[]>): NodeData[][] => {
  return Object.values(map);
};

export const MilestoneTabs = (props: MileStoneListProps) => {
  const milestoneDataYearMap = getDataYearMap(props.milestoneData);
  const milestoneDataByYear = getDataByYear(milestoneDataYearMap);
  const [year, setYear] = useState(getYear(Date.now()));
  const years = Array.from(
    new Set(milestoneDataByYear.map((item) => getYear(item[0].date)))
  );
  const currentData = useMemo(
    () => milestoneDataYearMap[year],
    [year, milestoneDataYearMap]
  );

  return (
    <>
      <div className="text-center mb-[50px]">
        <button className="btn btn-active btn-neutral">{year}年的里程碑</button>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Y
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {years.map((item) => {
              return (
                <li>
                  <a onClick={() => setYear(item)}>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <MileStoneList milestoneData={currentData} />
      </div>
    </>
  );
};
