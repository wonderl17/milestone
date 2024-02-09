"use client";

import { NodeData } from "@/types";
import { useMemo, useState } from "react";
import { format, getYear } from "date-fns";

interface MileStoneListProps {
  milestoneData: NodeData[];
}

export const MileStoneList = ({ milestoneData }: MileStoneListProps) => {
  return (
    <ul className="timeline timeline-vertical">
      {milestoneData.map((node, index) => {
        return (
          <li
            key={node.id}
            className="h-[100px] grid-cols-[minmax(0,0.25fr)_auto_minmax(0,1fr)]"
          >
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
            <div className="timeline-end timeline-box ml-5">{node.content}</div>
            {index !== milestoneData.length - 1 ? <hr /> : ""}
          </li>
        );
      })}
    </ul>
  );
};
