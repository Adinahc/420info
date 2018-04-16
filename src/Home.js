import React from 'react';
import { Panel} from 'react-bootstrap'

const homeDiv = () => (
    <div>
    <Panel>
        <Panel.Heading>
            <Panel.Title toggle componentClass="h3">Panel heading with a title</Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
            <Panel.Body>Panel content</Panel.Body>
        </Panel.Collapse>    
    </Panel>
    <Panel>
    <Panel.Heading>
        <Panel.Title toggle componentClass="h3">Panel heading with a title</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
        <Panel.Body>Panel content</Panel.Body>
    </Panel.Collapse>    
    </Panel>
    </div>
);

export default homeDiv;