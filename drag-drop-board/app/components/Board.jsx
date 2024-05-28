"use client"

import { useState } from 'react';
import styles from '../Home.module.css';

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

    const onDragStart = (event, taskId, columnId) => {
        event.dataTransfer.setData("taskId", taskId);
        event.dataTransfer.setData("startColumnId", columnId);
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event, columnId, dropIndex) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData("taskId");
        const startColumnId = event.dataTransfer.getData("startColumnId");

        if (!taskId) {
            return;
        }

        const startColumn = data.columns[startColumnId];
        const finishColumn = data.columns[columnId];

        if (startColumn === finishColumn) {
            const newTaskIds = Array.from(startColumn.taskIds);
            newTaskIds.splice(newTaskIds.indexOf(taskId), 1);
            newTaskIds.splice(dropIndex, 0, taskId);

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds,
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setData(newState);
        } else {
            const startTaskIds = Array.from(startColumn.taskIds);
            startTaskIds.splice(startTaskIds.indexOf(taskId), 1);

            const newStartColumn = {
                ...startColumn,
                taskIds: startTaskIds,
            };

            const finishTaskIds = Array.from(finishColumn.taskIds);
            finishTaskIds.splice(dropIndex, 0, taskId);

            const newFinishColumn = {
                ...finishColumn,
                taskIds: finishTaskIds,
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newFinishColumn.id]: newFinishColumn,
                },
            };

            setData(newState);
        }
    };

    return (
        <div className={styles.board}>
            {data.columnOrder.map((columnId) => {
                const column = data.columns[columnId];
                const tasks = column.taskIds.map((taskId, index) => ({
                    ...data.tasks[taskId],
                    index,
                }));

                return (
                    <div
                        key={column.id}
                        className={styles.column}
                        onDragOver={onDragOver}
                        onDrop={(event) => onDrop(event, column.id, tasks.length)}
                    >
                        <h2 className='mb-4 font-bold text-lg'>{column.title}</h2>
                        {tasks.map((task, index) => (
                            <div
                                key={task.id}
                                className={styles.task}
                                draggable
                                onDragStart={(event) => onDragStart(event, task.id, column.id)}
                                onDragOver={(event) => onDragOver(event)}
                                onDrop={(event) => onDrop(event, column.id, index)}
                            >
                                {task.content}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
