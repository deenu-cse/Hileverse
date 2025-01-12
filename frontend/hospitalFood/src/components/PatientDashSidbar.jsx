import React, { useState } from 'react'
import '../styles/PatientDashSidbar.css'

export default function PatientDashSidbar() {

    const [active, setActive] = useState('my-profile');

    const handleNavigation = (section) => {
        setActive(section);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Patient Dashboard</h2>
            </div>
            <ul className="sidebar-menu">
                <li
                    className={`sidebar-item ${active === 'my-profile' ? 'active' : ''}`}
                    onClick={() => handleNavigation('my-profile')}
                >
                    My Profile
                </li>
                <li
                    className={`sidebar-item ${active === 'my-meal' ? 'active' : ''}`}
                    onClick={() => handleNavigation('my-meal')}
                >
                    My Meal
                </li>
                <li
                    className={`sidebar-item ${active === 'my-medications' ? 'active' : ''}`}
                    onClick={() => handleNavigation('my-medications')}
                >
                    My Medications
                </li>
                <li
                    className={`sidebar-item ${active === 'my-appointments' ? 'active' : ''}`}
                    onClick={() => handleNavigation('my-appointments')}
                >
                    My Appointments
                </li>
                <li
                    className={`sidebar-item ${active === 'settings' ? 'active' : ''}`}
                    onClick={() => handleNavigation('settings')}
                >
                    Settings
                </li>
            </ul>
        </div>
    )
}
