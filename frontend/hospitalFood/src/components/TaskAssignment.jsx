import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/TaskAssignment.css'

const TaskAssignment = () => {
    const [staff, setStaff] = useState([]);
    const [task, setTask] = useState({ staffId: "", patientName: "", mealType: "" });

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        const response = await axios.get("http://localhost:3000/pantry-staff");
        setStaff(response.data);
    };

    const assignTask = async () => {
        await axios.post("http://localhost:3000/tasks", task);
        setTask({ staffId: "", patientName: "", mealType: "" });
    };

    return (
        <div className="task-assignment-container">
            <h1>Assign Tasks</h1>
            <select onChange={(e) => setTask({ ...task, staffId: e.target.value })}>
                <option value="">Select Staff</option>
                {staff.map((staffMember) => (
                    <option value={staffMember._id} key={staffMember._id}>
                        {staffMember.name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Patient Name"
                value={task.patientName}
                onChange={(e) => setTask({ ...task, patientName: e.target.value })}
            />
            <select onChange={(e) => setTask({ ...task, mealType: e.target.value })}>
                <option value="">Select Meal Type</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
            </select>
            <button onClick={assignTask}>Assign Task</button>
        </div>
    );
};

export default TaskAssignment;
