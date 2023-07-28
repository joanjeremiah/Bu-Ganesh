import React from "react";
// const ScheduleCard = ({ schedule }) => {
//     function formatDate(dateString) {
//         const options = {
//             weekday: 'short', // Short format of the day (e.g., Mon, Tue)
//             month: 'short',   // Short format of the month (e.g., Jan, Feb)
//             day: '2-digit',   // Two-digit format of the day (e.g., 01, 02)
//         };

//         const date = new Date(dateString);
//         return new Intl.DateTimeFormat('en-US', options).format(date);
//     }

//     function formatTime(dateString) {
//         const date = new Date(dateString);
//         const hours = date.getHours();
//         const minutes = date.getMinutes();
//         const ampm = hours >= 12 ? 'pm' : 'am';
//         const formattedHours = hours % 12 || 12;
//         const formattedMinutes = minutes.toString().padStart(2, '0');

//         return `${formattedHours}:${formattedMinutes} ${ampm}`;
//     }

//     function formatDateTimeRange(fromDate, toDate) {
//         const fromDayDate = formatDate(fromDate);
//         const toDayDate = formatDate(toDate);
//         const fromTime = formatTime(fromDate);
//         const toTime = formatTime(toDate);

//         return {
//             day: fromDayDate.split(",")[0],
//             date: fromDayDate.split(",")[1],
//             timeRange: `${fromTime} - ${toTime}`,
//         };
//     }

//     const { day, date, timeRange } = formatDateTimeRange(
//         schedule.fromDate,
//         schedule.toDate
//     );

//     return (
//         <div className="schedule-box">
//             <div className="day">
//                 <p>{day}</p>
//                 <p>{date}</p>
//             </div>
//             <div className="time-location">
//                 {/* <p>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                         <g clipPath="url(#clip0_252_281)">
//                             <path d="M9.99984 1.66699C14.6023 1.66699 18.3332 5.39783 18.3332 10.0003C18.3332 14.6028 14.6023 18.3337 9.99984 18.3337C5.39734 18.3337 1.6665 14.6028 1.6665 10.0003C1.6665 5.39783 5.39734 1.66699 9.99984 1.66699ZM9.99984 5.00033C9.77882 5.00033 9.56686 5.08812 9.41058 5.2444C9.2543 5.40068 9.1665 5.61264 9.1665 5.83366V10.0003C9.16655 10.2213 9.25438 10.4332 9.41067 10.5895L11.9107 13.0895C12.0678 13.2413 12.2783 13.3253 12.4968 13.3234C12.7153 13.3215 12.9243 13.2338 13.0789 13.0793C13.2334 12.9248 13.321 12.7158 13.3229 12.4973C13.3248 12.2788 13.2408 12.0683 13.089 11.9112L10.8332 9.65533V5.83366C10.8332 5.61264 10.7454 5.40068 10.5891 5.2444C10.4328 5.08812 10.2209 5.00033 9.99984 5.00033Z" fill="black" />
//                         </g>
//                         <defs>
//                             <clipPath id="clip0_252_281">
//                                 <rect width="20" height="20" fill="white" />
//                             </clipPath>
//                         </defs>
//                     </svg>
//                     {timeRange}
//                 </p> */}
//                 <p>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
//                         <path d="M7.69515 0.3125C5.77902 0.314758 3.94203 1.07603 2.58712 2.42932C1.23222 3.78261 0.470042 5.61741 0.467781 7.53125C0.465486 9.09524 0.976969 10.6168 1.92377 11.8625C1.92377 11.8625 2.12088 12.1217 2.15307 12.1591L7.69515 18.6875L13.2398 12.1558C13.2688 12.1211 13.4665 11.8625 13.4665 11.8625L13.4672 11.8605C14.4135 10.6154 14.9248 9.09452 14.9225 7.53125C14.9202 5.61741 14.1581 3.78261 12.8032 2.42932C11.4483 1.07603 9.61127 0.314758 7.69515 0.3125ZM7.69515 10.1562C7.17535 10.1562 6.66723 10.0023 6.23503 9.71386C5.80284 9.42542 5.46598 9.01545 5.26707 8.53579C5.06815 8.05614 5.0161 7.52834 5.11751 7.01914C5.21892 6.50994 5.46922 6.04221 5.83677 5.67509C6.20433 5.30798 6.67261 5.05797 7.18242 4.95669C7.69223 4.8554 8.22066 4.90739 8.70089 5.10607C9.18112 5.30475 9.59157 5.6412 9.88036 6.07288C10.1691 6.50456 10.3233 7.01207 10.3233 7.53125C10.3224 8.22718 10.0452 8.89435 9.55256 9.38645C9.05987 9.87854 8.3919 10.1554 7.69515 10.1562Z" fill="black" />
//                     </svg>
//                     {schedule.location}
//                 </p>
//             </div>
//             <div className="desc">{schedule.desc}</div>
//         </div>
//     )
// }

const ScheduleCard = ({ schedule }) => {
    return (
        <div className="schedule-box">
            <div className="day">
                <p>{schedule.month}</p>
                <p>{schedule.date}</p>
            </div>
            <div className="time-location">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                        <path d="M7.69515 0.3125C5.77902 0.314758 3.94203 1.07603 2.58712 2.42932C1.23222 3.78261 0.470042 5.61741 0.467781 7.53125C0.465486 9.09524 0.976969 10.6168 1.92377 11.8625C1.92377 11.8625 2.12088 12.1217 2.15307 12.1591L7.69515 18.6875L13.2398 12.1558C13.2688 12.1211 13.4665 11.8625 13.4665 11.8625L13.4672 11.8605C14.4135 10.6154 14.9248 9.09452 14.9225 7.53125C14.9202 5.61741 14.1581 3.78261 12.8032 2.42932C11.4483 1.07603 9.61127 0.314758 7.69515 0.3125ZM7.69515 10.1562C7.17535 10.1562 6.66723 10.0023 6.23503 9.71386C5.80284 9.42542 5.46598 9.01545 5.26707 8.53579C5.06815 8.05614 5.0161 7.52834 5.11751 7.01914C5.21892 6.50994 5.46922 6.04221 5.83677 5.67509C6.20433 5.30798 6.67261 5.05797 7.18242 4.95669C7.69223 4.8554 8.22066 4.90739 8.70089 5.10607C9.18112 5.30475 9.59157 5.6412 9.88036 6.07288C10.1691 6.50456 10.3233 7.01207 10.3233 7.53125C10.3224 8.22718 10.0452 8.89435 9.55256 9.38645C9.05987 9.87854 8.3919 10.1554 7.69515 10.1562Z" fill="black" />
                    </svg>
                    {schedule.location}
                </p>
            </div>
            <div className="desc">{schedule.desc}</div>
        </div>
    )
}

export default ScheduleCard;