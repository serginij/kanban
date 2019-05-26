import React from 'react'
import styled from 'styled-components'
import { Task } from './task'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
  flex-grow: 1;
  min-height: 100px;
`

export const Column = () => {
  const tasks = {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' }
  }

  const ccolumn = {
    id: 'column-1',
    title: 'some title',
    tasksIds: ['task-1', 'task-2', 'task-3', 'task-4']
  }

  const [thisColumn, setColumn] = React.useState(ccolumn)
  // setColumn(ccolumn)
  // eslint-disable-next-line no-console
  console.log('State ' + thisColumn)
  // const tasksIds = ['task-1', 'task-2', 'task-3', 'task-4']
  const onDragEnd = result => {
    const { destination, source, draggableId } = result
    // eslint-disable-next-line no-console
    console.log(result)
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = thisColumn
    // const finish = thisColumn

    // if (start === finish) {
    const newTaskIds = [...thisColumn.tasksIds]

    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...start,
      tasksIds: newTaskIds
    }
    // eslint-disable-next-line no-console
    console.log(newColumn)

    setColumn(newColumn)
    return
    // }
    /*
    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)*/
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId={thisColumn.id} type="TASK">
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {thisColumn.tasksIds.map((task, index) => (
                <Task key={index} task={tasks[task]} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  )
}
