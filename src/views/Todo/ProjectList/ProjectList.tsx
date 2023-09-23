/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {
    getProjects,
    selectedProjectIndex
} from "../../../store/selectors/todoSelector";
import { Formik } from 'formik';
import * as Yup from "yup";
import uuid from 'react-uuid';
import { bindActionCreators } from 'redux'
import { addProjectAction, selectedProjectAction } from "../../../store/actions/projectAction";

function mapStateToProps(state: any) {
    return {
        selectedProject: selectedProjectIndex(state),
        projects: getProjects(state),
      
    };
}

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(
        {
            addProjectAction,
            selectedProjectAction
        },
        dispatch
    )
})

const Index: React.FunctionComponent<any> = (props) =>  {
    const { 
        projects,
        addProjectAction,
        selectedProjectAction
         } = props;
 
    const [ modal, setModal ] =  useState(false);
    const  [ searchProject, setSearchProject ] = useState("");

    const toggleModal = () => setModal(!modal);

    return (
        <Card className={'iq-card'}>
            <CardBody className={'iq-card-body'}>
                <div className="iq-todo-page">
                    <form className="form-group position-relative">
                        <div className="mb-0">
                            <input type="text"
                                    className="form-control todo-search"  placeholder="Search"
                                    onChange={ (e) =>
                                        setSearchProject(e.target.value)
                                    } />
                            <a className="search-link" href="#">
                                <i className="ri-search-line"></i>
                            </a>
                        </div>
                    </form>
                    <div className="add-new-project mt-3 mb-3">
                        <a href='#' className="d-block nrw-project" onClick={toggleModal}>
                            <i className="ri-add-line mr-2"></i> Add Project
                        </a>
                    </div>
                    <ul className="todo-task-list p-0 m-0">
                        {projects.filter( (project: any) => project.name.toLowerCase().includes(searchProject.toLowerCase()))
                            .map((project: any, projectIndex: any) => {
                            return <li key={projectIndex}>
                                <a href='#' onClick={ () => selectedProjectAction(projectIndex) }>
                                    <i className="ri-stack-fill mr-2"></i> { project.name } 
                                </a>

                                <button className='btn btn-danger mx-1' type='button'>delete</button>
                                <button className='btn btn-info' type='button' onClick={toggleModal} >editar</button>
                                
                            </li>
                        })}
                    </ul>
                </div>
            </CardBody>
            <Modal isOpen={modal} toggle={toggleModal}>
                <Formik
                    initialValues={{ id: '', name: '' }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        values.id = uuid();
                        addProjectAction(values);

                        toggleModal();
                    }}
                    validationSchema={
                        Yup.object().shape({
                            name: Yup.string().required("Required")
                        })
                    }
                >
                    {({
                          values,
                          errors,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                    }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <ModalHeader>Add Project <span className="text-danger">*</span></ModalHeader>
                            <ModalBody>
                                <div className="position-relative">
                                    <div className='form-group' >
                                        <input id="name" type="text"
                                               className={'form-control '+
                                                (errors.name ? 'is-invalid' : '')}
                                               required
                                               placeholder="Enter Project Name"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.name} />
                                        <div className="invalid-feedback">
                                            <span>Project name is required.</span>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" disabled={isSubmitting}>Save Project</Button>{' '}
                                <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>

            </Modal>
        </Card>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
