import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/TaskTracker.css'

const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get("http://localhost:3000/tasks");
        setTasks(response.data);
    };

    const updateTask = async (id, field, value) => {
        await axios.put(`http://localhost:3000/tasks/${id}`, { [field]: value });
        fetchTasks();
    };

    return (
        <div className="task-tracker-container">
            <h1>Task Tracker</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Meal Type</th>
                        <th>Preparation Status</th>
                        <th>Delivery Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.patientName}</td>
                            <td>{task.mealType}</td>
                            <td>
                                <select
                                    value={task.preparationStatus}
                                    onChange={(e) => updateTask(task._id, "preparationStatus", e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Prepared">Prepared</option>
                                </select>
                            </td>
                            <td>
                                <select
                                    value={task.deliveryStatus}
                                    onChange={(e) => updateTask(task._id, "deliveryStatus", e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTracker;
