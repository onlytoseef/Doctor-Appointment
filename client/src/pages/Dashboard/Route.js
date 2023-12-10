import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import Course from './Course'
import AddCourse from './AddCourse'
import Doctors from './Doctors/Doctors'
import AddDr from './AddDr/AddDr'

export default function AdminRoutesIndex() {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/addcourse' element={<AddCourse/>}/>
        <Route path='/adddr' element={<AddDr/>}/>
    </Routes>
    </>
  )
}
