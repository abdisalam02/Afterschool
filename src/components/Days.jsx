import React, { useState } from "react";
import Todo from "./Todo";

export default function Days() {
  // State for the current selected day
  const [day, setDay] = useState("");
  // State to store information about the clicked day
  const [clickedDay, setClickedDay] = useState(null);

  // List of days with unique IDs and names
  const days = [
    { id: 'a1b2c3', name: 'Monday' },
    { id: 'x9y8z7', name: 'Tuesday' },
    { id: 'm4n5o6', name: 'Wednesday' },
    { id: 'p7q8r9', name: 'Thursday' },
    { id: 's1t2u3', name: 'Friday' },
    { id: 'v4w5x6', name: 'Saturday' },
    { id: 'y7z8a9', name: 'Sunday' },
  ];

  // Function to update the state with information about the clicked day
  function ShowDay(clickedDayId) {
    // Find the day object based on the clicked day ID
    const clickedDay = days.find((dayObj) => dayObj.id === clickedDayId);
    // Set the state with information about the clicked day
    setClickedDay(clickedDay);
  }

  // Function to handle button click and update the selected day
  const handleButtonClick = (clickedDayId) => {
    // Update the state with the selected day ID
    setDay(clickedDayId);
    // Call the function to show information about the clicked day
    ShowDay(clickedDayId);
  };

  return (
    <div className="text-center">
        <h1>Todo</h1>
      <h1 className="week">Week</h1>
      <ul className="list-inline">
        {/* Map through the days to create buttons for each day */}
        {days.map((dayObj) => (
          <li className="list-inline-item justify-content-center" key={dayObj.id}>
            {/* Apply a CSS class based on whether the button is active or not */}
            <button className={` hello ${day === dayObj.id ? "active" : ""}`} onClick={() => handleButtonClick(dayObj.id)}>
              {dayObj.name}
            </button>
          </li>
        ))}
      </ul>
      {/* Render the Todo component only if a day is clicked */}
      {clickedDay && <Todo clickedDay={clickedDay} days={days} />}
    </div>
  );
}
