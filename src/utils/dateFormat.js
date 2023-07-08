import moment from "moment";

const timeZoneList = {
  "-330": "IST",
};

const dateFormat = (timeStamp = "") => {
  const dateObj = new Date(timeStamp);

  const timeZone = timeZoneList[moment(dateObj).zone()];
  const date = moment(dateObj).format('lll');

  return date+" "+timeZone;
};

export default dateFormat;
