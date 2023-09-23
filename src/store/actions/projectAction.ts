export const ProjectActionTypes = {
    selectedCategory: '[PROJECT] SELECTED CATEGORY',
    selectedProject: '[PROJECT] SELECTED PROJECT',
    addProject: '[PROJECT] ADD',
    updateProject: '[PROJECT] UPDATE',
    deleteProject: '[PROJECT] DELETE'
}

export function selectedCategoryAction(category_id: any) {
    return {type: ProjectActionTypes.selectedCategory, category_id}
}

export function selectedProjectAction(project_id: any) {
    return {type: ProjectActionTypes.selectedProject, project_id}
}

export function addProjectAction(project: any) {
    return {type: ProjectActionTypes.addProject, project}
}

export function updateProjectAction(project: any) {
    return {type: ProjectActionTypes.updateProject, project}
}

export function deleteProjectAction(project: any) {
    return {type: ProjectActionTypes.deleteProject, project}
}

