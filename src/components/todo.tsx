import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

const Task = observer(( {task}: any) =>
      <StyledLabel>
        {task.title}
        <input
          type="checkbox"
          defaultChecked={task.done}
          onClick={task.toggle}
        />
      </StyledLabel>
)

const StyledLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px
`

export default Task

