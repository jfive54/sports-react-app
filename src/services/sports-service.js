import configData from "../config.json";

const getSports = () =>
  fetch(configData.SPORT_LIST_URL).then((res) => {
    return res.json();
  });

export { getSports };
