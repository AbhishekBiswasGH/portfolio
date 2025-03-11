export const getDuration = ({
  start,
  end
}: {
  start: Date;
  end: Date;
}): string => {
  let year = end.getFullYear() - start.getFullYear();
  let month = end.getMonth() - start.getMonth();

  if (month < 0) {
    year -= 1;
    month += 12;
  }

  return `${year ? `${year}yr` : ""}${year && month ? " " : ""}${month ? `${month}mos` : ""}`;
};
