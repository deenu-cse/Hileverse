import React from 'react'
import PatientDashSidbar from './PatientDashSidbar'
import FoodChartForm from './MealShow'

export default function PatientDashboard() {
    return (
        <>
            <div className="dashflex">
                <div className="sideflex">
                    <PatientDashSidbar />
                </div>
                <div className="mainconflex">
                    <FoodChartForm />
                </div>
            </div>
        </>
    )
}
