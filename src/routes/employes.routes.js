import {Router} from "express"
import {getAllEmployes,getEmploye,createEmploye,updateEmploye,deleteEmploye} from '../controllers/employers.controller.js'

const router=Router() 

router.get('/views', getAllEmployes)
router.get('/view/:id',getEmploye)
router.post('/add',createEmploye)
router.delete('/delete/:id',deleteEmploye)
router.patch('/edit/:id',updateEmploye) 
//se uso patch para permitir la edicion de un 
//solo parametro, para actualizar todo elregistro se usa put

export default router