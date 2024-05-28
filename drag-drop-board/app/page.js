"use client"

import { useState } from 'react';
import styles from './Home.module.css';
import Board from './components/Board';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
    'task-3': { id: 'task-3', content: 'Task 3' },
    'task-4': { id: 'task-4', content: 'Task 4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default function Home() {
  const [data, setData] = useState(initialData);

  const onDragStart = (event, taskId) => {
    event.dataTransfer.setData("taskId", taskId);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, columnId) => {
    const taskId = event.dataTransfer.getData("taskId");
    const startColumn = Object.keys(data.columns).find(columnId =>
      data.columns[columnId].taskIds.includes(taskId)
    );

    if (startColumn === columnId) {
      return;
    }

    const startTaskIds = Array.from(data.columns[startColumn].taskIds);
    const finishTaskIds = Array.from(data.columns[columnId].taskIds);

    startTaskIds.splice(startTaskIds.indexOf(taskId), 1);
    finishTaskIds.push(taskId);

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [startColumn]: {
          ...data.columns[startColumn],
          taskIds: startTaskIds,
        },
        [columnId]: {
          ...data.columns[columnId],
          taskIds: finishTaskIds,
        },
      },
    };

    setData(newState);
  };

  return (
    <div className="">
      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold ">Drag and Drop Board</h2>
      </div>
      <div className="mt-10">
        <Board />
      </div>
    </div>
  );
}
