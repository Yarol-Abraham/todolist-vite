
// Categories
export const getCategories = (state: any) => state.todo.categories;
export const selectedCategoryIndex = (state: any) => state.todo.selectedCategory;
export const selectedCategory = (state: any) => state.todo.categories[state.todo.selectedCategory];

// Projects
export const getProjects = (state: any) => state.todo.projects;
export const selectedProjectIndex = (state: any ) => state.todo.selectedProject;
export const selectedProject = (state: any) => state.todo.projects[state.todo.selectedProject];

// Tasks
export const getTasks = (state: any) => {
    return state.todo.tasks
    
};
export const openedTasks = (state: any) => state.todo.tasks.filter((task: any) => task.status);
export const closedTasks = (state: any) => state.todo.tasks.filter((task: any) => !task.status);