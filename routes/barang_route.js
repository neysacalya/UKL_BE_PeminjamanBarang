import express from 'express'
import{
    getAllBarang,
    getBarangById,
    addBarang,
    updateBarang,
    deleteBarang
} from '../controllers/barang_controllers.js'

const app = express()
import { authenticate, authorize} from '../controllers/auth_controllers.js'
import {IsAdmin} from '../middleware/role_validation.js'
import { IsMember } from '../middleware/role_validation.js'

app.use(express.json())

app.get('/', getAllBarang)
app.get('/barangId/:id',getBarangById)
app.post('/addBarang', authorize, [IsAdmin], addBarang)
app.put('/upBarang/:id', authorize, [IsMember], updateBarang)
app.delete('/:id',deleteBarang)



export default app