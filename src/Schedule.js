import React, { useEffect } from "react";
import ScheduleCard from "./ScheduleCard";

const Schedule = () => {

    const [data, setData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/joanjeremiah/Bu-Ganesh/main/schedules.json');
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // State variable to keep track of the selected filter option
    const [filterOption, setFilterOption] = React.useState("Upcoming");

    useEffect(() => {
        // Filtering function based on the selected filter option
        const filteredData = data.filter((schedule) => {
            const currentDate = new Date().toISOString();
            if (filterOption === "All") {
                return true;
            } else if (filterOption === "Upcoming") {
                return schedule.fromDate > currentDate;
            } else if (filterOption === "Past") {
                return schedule.toDate < currentDate;
            }
            return true;
        });
        // console.log(filteredData);
        setFilteredData(filteredData);
    }, [data, filterOption])

    const handleFilter = (e, option) => {
        // e.target.style.background = "#FFF";
        setFilterOption(option);
    };
    return (
        <div id="concerts-section" className="schedule-section-container">
                <h1 className="section-title">Schedules</h1>
                {/* <div className="filter-buttons">
                    <button style={(filterOption == "All") ? { background: "#FFF" } : {}} onClick={(e) => handleFilter(e, "All")}>All</button>
                    <button style={(filterOption == "Upcoming") ? { background: "#FFF" } : {}} onClick={(e) => handleFilter(e, "Upcoming")}>Upcoming</button>
                    <button style={(filterOption == "Past") ? { background: "#FFF" } : {}} onClick={(e) => handleFilter(e, "Past")}>Past</button>
                </div> */}
                <div className="schedule-section">
                    {data.map((schedule, i) => {
                        return <ScheduleCard key={i} schedule={schedule} />;
                    })}
                    {data.length == 0 && <p>No Upcoming Concerts</p>}
                </div>
        </div>
    )
}

export default Schedule;
