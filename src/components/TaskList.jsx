import React, { useState } from 'react';
import Task from './Task';

function TaskList(props) {
    const [state, setState] = useState(props.tasks);
    return (
        <div>
            <h1>{props.name}</h1>
            {
                state.map((x) => <Task name={x} />)
            }
        </div>
    )
}

export default TaskList;