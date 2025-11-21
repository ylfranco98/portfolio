"use client";

import { TimelineElement } from "@/types";
import { Code } from "lucide-react";
import React, { useEffect, useRef } from "react";

type TimelineBubbleProps = {
  experiences: string[];
  role: string;
  organisation: string;
  position?: "l" | "r";
};

const TimelineBubble = React.forwardRef<HTMLDivElement, TimelineBubbleProps>(
  ({ experiences, role, organisation, position }, ref) => {
    return (
      <div
        ref={ref}
        className={`timeline-component timeline-component-bg
        ${
          position === "r"
            ? "timeline-component-bgRight"
            : "timeline-component-bgLeft"
        }`}
      >
        <h2 className={"timeline-title project-h3"}> {role}</h2>
        <p className={"timeline-paragraph project-link"}>{organisation} </p>
        <ul>
          {experiences.map((ex, id) => (
            <li key={id} className="project-p">
              {ex}
            </li> // Corrected the mapping
          ))}
        </ul>
      </div>
    );
  }
);

type TimelineDateProps = {
  id: number;
  startDate: string;
  endDate: string;
  position?: "l" | "r";
};

const TimelineDate: React.FC<TimelineDateProps> = ({
  id,
  startDate,
  endDate,
  position,
}) => {
  console.log(id);
  return (
    <div key={`${id}-date`} className={"timeline-component"}>
      <div
        className={`animate-slideDate ${
          position === "l" ? "timeline-date-right" : ""
        }`}
      >
        {startDate} - {endDate}
      </div>
    </div>
  );
};

type TimelineMiddlePointProps = {
  id: number;
  imageSrc?: string;
  organisation?: string;
};

const TimelineMiddlePoint: React.FC<TimelineMiddlePointProps> = ({
  id,
  imageSrc,
  organisation,
}) => {
  return (
    <div className={"timeline-middle"} key={`${id}-point`}>
      <div className={"timeline-point"}>
        <Code className={"timeline-point text-white p-2"} />
      </div>
    </div>
  );
};

const Timeline: React.FC<{ history: TimelineElement[] }> = ({ history }) => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  console.log(history);
  return (
    <div className="mx-auto p-6 grid grid-cols-[1fr_3px_1fr]">
      {history.map((element, id) => {
        const i = id % 2 === 0;
        const date = (
          <TimelineDate
            id={id}
            startDate={element.startDate}
            endDate={element.endDate}
            position={i ? "l" : "r"}
          />
        );
        const bubble = (
          <TimelineBubble
            ref={(el: HTMLDivElement | null) => {
              // refs.current[id] = el;
            }}
            experiences={element.experiences}
            role={element.role}
            organisation={element.organisation}
            position={i ? "r" : "l"}
          />
        );

        return (
          <React.Fragment key={id}>
            {i ? date : bubble}
            <TimelineMiddlePoint
              id={id}
              imageSrc={element.imageSrc}
              organisation={element.organisation}
            />
            {i ? bubble : date}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { Timeline, TimelineDate, TimelineMiddlePoint, TimelineBubble };
