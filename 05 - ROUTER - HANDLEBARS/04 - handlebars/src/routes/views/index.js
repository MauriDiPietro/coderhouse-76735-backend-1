import { Router } from "express";
import {userManager} from "../../managers/user-manager.js";


const router = Router();

router.get('/vista1', (req, res)=>{
  res.render('vista1')
})

router.get('/vista2', (req, res)=>{
  const user = {
    first_name: 'Juan',
    last_name: 'Perez'
  }
  res.render('vista2', { user })
})

const users = [
  {
    first_name: 'Juan',
    last_name: 'Perez'
  },
  {
    first_name: 'Alberto',
    last_name: 'Gomez'
  },
  {
    first_name: 'Pedro',
    last_name: 'Rodriguez'
  }
]

router.get('/vista3', (req, res)=>{
  res.render('vista3', { users })
})


router.get('/', (req, res)=>{
  res.render('form')
})

router.get('/users', async(req, res)=>{
  const users = await userManager.getAll()
  res.render('vista3', { users })
})

export default router;