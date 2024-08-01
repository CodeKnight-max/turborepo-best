import { model, Schema } from 'mongoose'

const subtaskSchema = new Schema({
	content: String,
})
const taskSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	color: { type: String, required: true },
	subtasks: { type: [subtaskSchema], default: [] },
})

const kanbanBoardSchema = new Schema({
	name: { type: String, required: true },
	tasks: {
		type: [
			{
				type: Schema.ObjectId,
				ref: 'Task',
			},
		],
		default: [],
	},
})

const Task = model('Task', taskSchema)
const Kanbanboard = model('kanbanboard', kanbanBoardSchema)

export { Task, Kanbanboard }
