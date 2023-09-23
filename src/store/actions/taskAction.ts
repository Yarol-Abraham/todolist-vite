export const TaskActionTypes = {
    addTask: '[TASK] ADD',
    updateTask: '[TASK] UPDATE',
    deleteTask: '[TASK] DELETE',
    closedTask: '[TASK] CLOSED'
}

export function addTaskAction(task: string) {
    return {type: TaskActionTypes.addTask, task}
}

export function updateTaskAction(task: string) {
    return {type: TaskActionTypes.updateTask, task}
}

export function deleteTaskAction(task: string) {
    return {type: TaskActionTypes.deleteTask, task}
}

export function closedTaskAction(task_id: number) {
    return {type: TaskActionTypes.closedTask, task_id}
}
