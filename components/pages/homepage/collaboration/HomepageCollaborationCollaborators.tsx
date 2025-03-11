"use client";

// constants
import { HOMEPAGE_COLLABORATION_COLLABORATORS } from "@/constants/pages/homepage";

// utils
import { createRoot } from "react-dom/client";

// hooks
import { useEffect } from "react";

// components
import HomepageCollaborationCollaborator from "./HomepageCollaborationCollaborator";

// type
import { type Root } from "react-dom/client";

export default function HomepageCollaborationCollaborators() {
  // side effects
  useEffect(() => {
    const timeoutIds = new Set<NodeJS.Timeout>();
    const collaboratorElements =
      document.querySelectorAll(".collaborator");
    const n = HOMEPAGE_COLLABORATION_COLLABORATORS.length;

    const roots = Array.from(collaboratorElements).map(
      (collaboratorElement) =>
        createRoot(collaboratorElement)
    );

    // const TIMER = 150;
    const RAPIDNESS = 10;
    const LOOP_AFTER = 4000;
    let offset = 0;

    const animationFunction = ({
      element,
      offset,
      index,
      root
    }: {
      element: Element;
      offset: number;
      index: number;
      root: Root;
    }) => {
      const timeoutId = setTimeout(() => {
        const animation = element.animate(
          [
            {
              filter: "blur(10px)",
              scale: "0.6",
              opacity: "0%"
            },
            {
              filter: "blur(0px)",
              scale: "1",
              opacity: "100%"
            },
            {
              filter: "blur(0px)",
              scale: "1",
              opacity: "100%"
            },
            {
              filter: "blur(0px)",
              scale: "1",
              opacity: "100%"
            },
            {
              filter: "blur(0px)",
              scale: "1",
              opacity: "100%"
            },
            {
              filter: "blur(0px)",
              scale: "1",
              opacity: "100%"
            },
            {
              filter: "blur(0px)",
              scale: "1",
              opacity: "100%"
            },
            {
              filter: "blur(10px)",
              scale: "0.6",
              opacity: "0%"
            }
          ],
          {
            duration: LOOP_AFTER,
            fill: "forwards"
          }
        );

        animation.onfinish = () => {
          root.render(
            HOMEPAGE_COLLABORATION_COLLABORATORS[
              (offset + index) % n
            ]
          );
        };

        animation.oncancel = () => {
          root.unmount();
        };
      }, index * RAPIDNESS);

      timeoutIds.add(timeoutId);
    };

    const interval = setInterval(() => {
      offset = (offset + collaboratorElements.length) % n;
      collaboratorElements.forEach(
        (collaboratorElement, index) => {
          animationFunction({
            element: collaboratorElement,
            index,
            offset,
            root: roots[index]
          });
        }
      );
    }, LOOP_AFTER);

    return () => {
      clearInterval(interval);
      timeoutIds.forEach(clearTimeout);
      roots.forEach((root) => root.unmount());
    };
  }, []);

  return (
    <div className="grid w-full grid-cols-2 gap-x-6 gap-y-3 py-12 *:grid *:h-28 *:place-items-center sm:grid-cols-3 sm:gap-y-9">
      {HOMEPAGE_COLLABORATION_COLLABORATORS.slice(0, 6).map(
        (collaborator, i) => (
          <HomepageCollaborationCollaborator
            key={i}
            icon={collaborator}
          />
        )
      )}
    </div>
  );
}
