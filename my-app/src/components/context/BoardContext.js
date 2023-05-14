import { useState, createContext, useEffect } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState([
    {
      id: 123234,
      name: "Marketing Plan ",
      steps: [
        {
          id: 1,
          name: "Todo",
          tasks: [
            {
              id: 1,
              name: "Plan Produc Hunt launch",
              description:
                "This is a short description for what has to been down for this task",
              subtasks: [
                { id: 1, name: "Find hunter", done: true },
                { id: 2, name: "Gather assets", done: false },
                { id: 3, name: "Draft product page", done: true },
                { id: 4, name: "Notify network", done: false },
              ],
            },
            {
              id: 2,
              name: "Share on Show HN",
              description:
                "This is a short description for what has to been down for this task",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: true },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 3,
              name: "Build UI for search",
              description:
                "This is a short description for what has to been down for this task",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: true },
                { name: "Publish post", done: false },
              ],
            },
            { id: 4, name: "Build settings UI", description: "", subtasks: [] },
          ],
        },
        {
          id: 2,
          name: "Doing",
          tasks: [
            {
              id: 1,
              name: "Commnuicate any changes",
              description: "",
              subtasks: [
                { name: "Find hunter", done: false },
                { name: "Gather assests", done: false },
                { name: "Draft product page", done: false },
                { name: "Notify network", done: false },
              ],
            },
            {
              id: 2,
              name: "Fixing bugs ",
              description: "",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
          ],
        },
        {
          id: 2344234,
          name: "Done",
          tasks: [
            {
              id: 4,
              name: "Subtask 4",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 5,
              name: "Subtask 5",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 279823749,
      name: "Roadmap",
      steps: [
        {
          id: 1,
          name: "Task 1",
          tasks: [
            {
              id: 1,
              name: "Launch version one",
              description: "",
              subtasks: [
                { name: "Find hunter", done: false },
                { name: "Gather assests", done: false },
                { name: "Draft product page", done: false },
                { name: "Notify network", done: false },
              ],
            },
            {
              id: 2,
              name: "Review changes",
              description: "",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 3,
              name: "Approve changes",
              description: "",
              subtasks: [],
            },
          ],
        },
        {
          id: 2,
          name: "Task 2",
          tasks: [
            {
              id: 1,
              name: "Fixing major issues",
              description: "",
              subtasks: [
                { name: "Find hunter", done: false },
                { name: "Gather assests", done: false },
                { name: "Draft product page", done: false },
                { name: "Notify network", done: false },
              ],
            },
            {
              id: 2,
              name: "Checking changes with customer",
              description: "",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 2,
              name: "Adding latest snapshots",
              description: "",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Task 3",
          tasks: [
            {
              id: 4,
              name: "Submit task to customer",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 5,
              name: "Final review of the project",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 6,
              name: "Getting feedback from customer",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 7,
              name: "Discuss future additions to the project",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3234234324,
      name: "Task Manager",
      steps: [
        {
          id: 1,
          name: "Waiting",
          tasks: [
            {
              id: 1,
              name: "Launch version one",
              description: "",
              subtasks: [
                { name: "Find hunter", done: false },
                { name: "Gather assests", done: false },
                { name: "Draft product page", done: false },
                { name: "Notify network", done: false },
              ],
            },
            {
              id: 2,
              name: "Review changes",
              description: "",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 3,
              name: "Approve changes",
              description: "",
              subtasks: [],
            },
          ],
        },
        {
          id: 2,
          name: "Processing",
          tasks: [
            {
              id: 1,
              name: "Fixing major issues",
              description: "",
              subtasks: [
                { name: "Find hunter", done: false },
                { name: "Gather assests", done: false },
                { name: "Draft product page", done: false },
                { name: "Notify network", done: false },
              ],
            },
            {
              id: 2,
              name: "Checking changes with customer",
              description: "",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
            {
              id: 2,
              name: "Adding latest snapshots",
              description: "",
              subtasks: [
                { name: "Draft out HN post", done: false },
                { name: "Get feedback and refine", done: false },
                { name: "Publish post", done: false },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Finished",
          tasks: [
            { id: 4, name: "Submit task to customer" },
            { id: 5, name: "Final review of the project" },
            { id: 5, name: "Getting feedback from customer" },
            { id: 5, name: "Discuss future additions to the project" },
          ],
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   console.log("BoardsContex.js:", boards);
  // }, [boards]);

  let initialActiveBoard = "";
  if (boards.length !== 0) {
    initialActiveBoard = boards[0].id;
  }

  const [activeBoard, setActiveBoard] = useState(initialActiveBoard);

  const [activeBoardIndex, setActiveBoardIndex] = useState(
    boards.findIndex((board) => board.id === activeBoard)
  );

  useEffect(() => {
    setActiveBoardIndex(boards.findIndex((board) => board.id === activeBoard));
  }, [activeBoardIndex, activeBoard]);

  return (
    <BoardContext.Provider
      value={{
        activeBoard,
        setActiveBoard,
        activeBoardIndex,
        boards,
        setBoards,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
