import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Kanban.css';

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

const Kanban = () => {
    const [data, setData] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = data.columns[source.droppableId];
        const finish = data.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
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
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setData(newState);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban-container">
                {data.columnOrder.map((columnId) => {
                    const column = data.columns[columnId];
                    const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

                    return (
                        <Droppable droppableId={column.id} key={column.id}>
                            {(provided) => (
                                <div
                                    className="kanban-column"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <h3>{column.title}</h3>
                                    {tasks.map((task, index) => (
                                        <Draggable
                                            draggableId={task.id}
                                            index={index}
                                            key={task.id}
                                        >
                                            {(provided) => (
                                                <div
                                                    className="kanban-task"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {task.content}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    );
                })}
            </div>
        </DragDropContext>
    );
};

export default Kanban;
