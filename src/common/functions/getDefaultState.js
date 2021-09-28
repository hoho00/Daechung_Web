const getDefaultState = () => {
  const startDay = new Date();
  const endDay = new Date();
  startDay.setMonth(startDay.getMonth() - 1);
  endDay.setMonth(endDay.getDate() + 1);
  const defaultState = {
    search_type: "전체",
    search_start_date: toStringByFormatting(startDay, "/"),
    search_end_date: toStringByFormatting(endDay, "/"),
    search_local: "전체",
  };
  return defaultState;
};
const leftPad = (value) => {
  if (value >= 10) {
    return value;
  }
  return `0${value}`;
};
const toStringByFormatting = (source, delimiter = "-") => {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  return [year, month, day].join(delimiter);
};
export { getDefaultState, toStringByFormatting };
