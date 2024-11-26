const DateFormatter = (isoDate) => {
    // if (!isoDate) return "Invalid Date"; // Handle undefined or null dates
  console.log(isoDate); 
    const date = new Date(isoDate);
  
    // If the date is invalid, return a default message
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
  
    // Get day, month, and year components
    const day = String(date.getDate()).padStart(2, '0'); // Format day to 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
  
    // Return formatted string in "dd mm yyyy" format
    return `${day} ${month} ${year}`;
  };
  
  export default DateFormatter;
  