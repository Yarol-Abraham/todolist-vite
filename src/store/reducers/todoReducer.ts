import {initialTodoState} from "../states/todoState";
import {ProjectActionTypes} from "../actions/projectAction";

export default (state = initialTodoState, action: any) => {
    switch (action.type) {
       
        case ProjectActionTypes.selectedProject:
            return Object.assign({}, state, {
                selectedProject: action.project_id
            })
        case ProjectActionTypes.addProject:
            return Object.assign({}, state, {
                projects: [
                    ...state.projects,
                    action.project
                ]
            })
        default:
            return state
    }
}