import { format } from "date-fns";

export const formatDate = (date: string) => {
  const trimmedDate = date?.trim();

  if (!trimmedDate) {
    return ""; // or handle the null/undefined case as desired
  }

  const parsedDate = new Date(trimmedDate);

  if (isNaN(parsedDate.getTime())) {
    return ""; // or handle the invalid date case as desired
  }

  return format(parsedDate, "dd MMMM yy");
};
