import React from "react";
import ScheduleCard from "./ScheduleCard";

const Schedule = () => {

    const [data, setData] = React.useState([
        {
            fromDate: "2023-07-24T10:30:45.123Z",
            toDate: "2023-07-24T14:30:45.123Z",
            location: "Online",
            desc: "3 hours Violin session, Classical Instrumental"
        },
        {
            fromDate: "2023-09-24T14:30:45.123Z",
            toDate: "2023-09-24T18:30:45.123Z",
            location: "Chennai",
            desc: "4 hours Violin session"
        },
        {
            fromDate: "2023-01-24T10:30:45.123Z",
            toDate: "2023-01-24T14:30:45.123Z",
            location: "Kolkata",
            desc: "3 hours Violin session, Classical Instrumental"
        }
    ]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/yourusername/your-repo/main/data.json');
                const jsonData = await response.json();
                setData(jsonData.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // State variable to keep track of the selected filter option
    const [filterOption, setFilterOption] = React.useState("All");

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

    const handleFilter = (e, option) => {
        // e.target.style.background = "#FFF";
        setFilterOption(option);
    };
    return (
        <div className="schedule-section-container">
            <div className='front-drop'>
                <h1 className="section-title">Schedules</h1>
                <div className="filter-buttons">
                    <button style={(filterOption == "All") ? { background: "#FFF" } : {}} onClick={(e) => handleFilter(e, "All")}>All</button>
                    <button style={(filterOption == "Upcoming") ? { background: "#FFF" } : {}} onClick={(e) => handleFilter(e, "Upcoming")}>Upcoming</button>
                    <button style={(filterOption == "Past") ? { background: "#FFF" } : {}} onClick={(e) => handleFilter(e, "Past")}>Past</button>
                </div>
                <div className="schedule-section">
                    {filteredData.map((schedule, i) => {
                        return <ScheduleCard key={i} schedule={schedule} />;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Schedule;
