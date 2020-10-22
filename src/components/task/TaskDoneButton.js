import React from 'react'
import {useDispatch} from 'react-redux'
import {doneTaskActions} from '../../actions'
import PropTypes from 'prop-types'


 function TaskDoneButton({id}) {
    const dispatch = useDispatch();

    function createDoneTask() {
        const newTaskDone = {
            taskId: id
        }
        dispatch(doneTaskActions.createDoneTask(newTaskDone))
    }

    return (
        <button onClick={createDoneTask}>Check task</button>
    )
}


TaskDoneButton.propTypes = {
    id: PropTypes.number.isRequired
}

export default TaskDoneButton;