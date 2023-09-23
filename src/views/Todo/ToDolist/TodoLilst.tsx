
import {Row, Col} from 'reactstrap';
import ProjectList from  '../ProjectList/ProjectList';

export function App () 
{
    return (
        <Row>
            <Col lg={3}>
                <ProjectList></ProjectList>
            </Col>
            <Col lg={9}>
                {/* <TaskList></TaskList> */}
            </Col>
        </Row>
    );
}
