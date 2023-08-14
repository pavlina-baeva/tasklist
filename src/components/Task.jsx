import React from 'react';

function Task(props) {
    return (
        <div>
            <input type='checkbox'></input>
            <span>{props.name}</span>
            <button>Удалить</button>
        </div>
    )
}

export default Task;