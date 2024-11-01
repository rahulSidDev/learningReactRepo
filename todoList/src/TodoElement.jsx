import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoElement({todoVal, addFunc, deleteFunc}) {
	const handleToggle = (todoItemVal) => {
		todoItemVal.checked = !todoItemVal.checked
		addFunc(todoItemVal)
	}

	const key = Math.random()

	const deleteTodo = (todoItemVal) => {
		deleteFunc(todoItemVal)
	}

	return (
		<ListItem
		key={todoVal.todoEle}
		secondaryAction={
		  <IconButton onClick={() => {deleteTodo(todoVal)}} edge="end" aria-label="delete">
		    <DeleteIcon />
		  </IconButton>
		}
		disablePadding>
			<ListItemButton role={undefined} onClick={() => {handleToggle(todoVal)}} dense>
				<ListItemIcon>
				<Checkbox
				  edge="start"
				  checked={todoVal.checked}
				  tabIndex={-1}
				  disableRipple
				  inputProps={{ 'aria-labelledby': key }}/>
				</ListItemIcon>
				<ListItemText id={key} primary={`${todoVal.todoEle}`} />
			</ListItemButton>
		</ListItem>
	)
}