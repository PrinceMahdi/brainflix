// <--------------------- DYNAMIC DATE FORMATTER --------------------->
/*
 * * @param dateOfComment
 * @returns
 * A function that evaluates how long ago the comment was made
 * Using the Date.now() function to record the current time commented
 * Date.now() function returns a value in miliseconds so all variables are converted accordingly
 * The function returns a dynamic date until the comment is over a week old
 * Then the function will turn the date into a mm/dd/yyyy format
 */

export const dynamicDate = (dateOfComment) => {
  const now = Date.now();
  const timeElapsed = now - dateOfComment;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4;
  const year = month * 12;

  let date = new Date(dateOfComment);

  if (timeElapsed > year) {
    // Custom formatting to get the month and day in double digits
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
  if (timeElapsed > month) {
    const howManyMonths = Math.round(timeElapsed / month);
    return howManyMonths + " months ago";
  }
  if (timeElapsed > week) {
    const howManyWeeks = Math.round(timeElapsed / week);
    return howManyWeeks + " weeks ago";
  }
  if (timeElapsed > day) {
    const howManyDays = Math.round(timeElapsed / day);
    return howManyDays + " days ago";
  }
  if (timeElapsed > hour) {
    const howManyHours = Math.round(timeElapsed / hour);
    return howManyHours + " hours ago";
  }
  if (timeElapsed > minute) {
    const howManyMinutes = Math.round(timeElapsed / minute);
    return howManyMinutes + " minutes ago";
  }
  if (timeElapsed > second) {
    const howManySeconds = Math.round(timeElapsed / second);
    return howManySeconds + " seconds ago";
  }
  // Return "now" if the comment was just made
  return "now";
};

// <--------------- CREATING A FUNCTION TO RANDOMLY GENERATE AN AVATAR FOR COMMENTS --------------->
// Custom Avatar API
export const randomAvatar = () => {
  // Creating a unique ID to use for the Avatar API
  const uuid = () => Math.random().toString(36).substring(2, 12);
  // Avatar API link
  const avatarURL = `https://avatars.dicebear.com/api/avataaars/${uuid()}.svg`;
  return avatarURL;
};
