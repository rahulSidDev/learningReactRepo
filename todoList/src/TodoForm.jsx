import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {useState} from 'react'

export default function TodoForm({addFunc}) {
	const [text, setText] = useState('')

	const handleSubmission = (evt) => {
		evt.preventDefault()
		addFunc(text)
		setText('')
	}

	const handleChange = (evt) => {
		setText(evt.target.value)
	}

	return (
		<ListItem>
			<form onSubmit={handleSubmission}>
				<TextField
				label="Add a Todo"
				id="outlined-start-adornment"
				value={text}
				onChange={handleChange}
				sx={{ m: 1, width: '50ch' }}
				InputProps={{
					endAdornment: (
					<InputAdornment position="end">
			            <IconButton aria-label='create todo' edge='end' type='submit'><AddCircleRoundedIcon/></IconButton>
					</InputAdornment>),
				}}
				/>
			</form>
		</ListItem>
	)
}