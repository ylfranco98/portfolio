"use client";

import { useIsMD, useIsXL } from "@/lib/utils";
import { TimelineElement } from "@/types";
import { Code, GraduationCap } from "lucide-react";
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
        className={`timeline-component xl:mr-[50px] md:mr-0 md:ml-[50px] ml-0 timeline-component-bg
        ${
          position === "r"
            ? "timeline-component-bgRight"
            : "timeline-component-bgLeft"
        }`}
      >
        <h2 className={"timeline-title project-h3 mb-2"}> {role}</h2>
        <p className={"timeline-paragraph project-link"}>{organisation} </p>
        <ul className="flex flex-col gap-4">
          {experiences.map((ex, id) => (
            <li
              key={id}
              className="project-p 2xl:text-xl lg:text-lg ms:text-base text-base"
            >
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
    <div
      key={`${id}-date`}
      className={"timeline-component xl:ml-[50px] md:ml-0 ml-[30px] "}
    >
      <div
        className={`animate-slideDate  ${
          position === "l" ? "timeline-date-right" : ""
        }`}
      >
        <p
          className={`md:text-right ${position === "l" ? "xl:text-right" : "xl:text-left"} text-left `}
          // className="md:text-right xl:text-left text-left"
        >
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

type TimelineMiddlePointProps = {
  id: number;
  category?: string;
  organisation?: string;
};

const TimelineMiddlePoint: React.FC<TimelineMiddlePointProps> = ({
  id,
  category,
  organisation,
}) => {
  console.log(category);
  return (
    <div className={"timeline-middle"} key={`${id}-point`}>
      <div className={"timeline-point"}>
        {category === "work" ? (
          <Code className={"timeline-point text-white p-2"} />
        ) : (
          <GraduationCap className={"timeline-point text-white p-2"} />
        )}
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

  // console.log(history);
  const isXL = useIsXL();
  const isMD = useIsMD();
  return (
    <div className="mx-auto p-6 md:grid xl:grid-cols-[1fr_3px_1fr] md:grid-cols-[250px_3px_1fr] flex flex-col">
      {history.map((element, id) => {
        const i = isXL ? id % 2 === 0 : !isXL; // even index on right for XL screens
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
            {isMD ? (
              <>
                {i ? date : bubble}
                <TimelineMiddlePoint
                  id={id}
                  category={element.category}
                  organisation={element.organisation}
                />
                {i ? bubble : date}
              </>
            ) : (
              <div className="flex flex-row gap-4">
                <TimelineMiddlePoint
                  id={id}
                  category={element.category}
                  organisation={element.organisation}
                />
                <div className="flex flex-col">
                  {date}

                  {bubble}
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { Timeline, TimelineDate, TimelineMiddlePoint, TimelineBubble };
