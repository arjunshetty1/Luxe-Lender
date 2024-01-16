// function TotalCost(start_date_str, end_date_str) {
//   // Parse dates, correct time zones, calculate difference, convert to days as before...

//   // Calculate the difference in milliseconds
//   const differenceInMilliseconds = end_date_str.getTime() - start_date_str.getTime();

//   // Convert the difference to days and return
//   const daysDifference = Math.floor(
//     differenceInMilliseconds / (1000 * 60 * 60 * 24)
//   );

//   // Log the final result
//   console.log(
//     `There are ${daysDifference} days between ${start_date_str} and ${end_date_str}`
//   );

//   return daysDifference;
// }

// const ans = TotalCost("01 / 28 / 2023", "12 / 31 / 2024");

// console.log("answer is ", ans);
