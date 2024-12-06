import express from 'express'
import {
   getAllUser,
   getUserById,
   addUser,
   updateUser,
   deleteUser
} from '../controllers/user_controllers.js'

const app = express()


app.get('/', getAllUser)
app.get('/:id', getUserById)
app.post('/', addUser)
app.put('/:id',  updateUser)
app.delete('/:id', deleteUser)

export default app