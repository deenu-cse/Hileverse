import React from 'react'
import PantryStaff from './PantryStaff'
import TaskAssignment from './TaskAssignment'
import TaskTracker from './TaskTracker'

export default function HospitalSystem() {
  return (
    <div>
      <h1>Hospital Management System</h1>
      <PantryStaff/>
      <TaskAssignment/>
      <TaskTracker/>
    </div>
  )
}
