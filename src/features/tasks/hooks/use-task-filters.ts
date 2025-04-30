import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";
import { TaskStatus } from "../types";
import { useQuery } from "@tanstack/react-query";

export const useTaskFilters = () => {
  return useQueryStates({
    projectId: parseAsString,
    status: parseAsStringEnum(Object.values(TaskStatus)),
    assigneeId: parseAsString,
    search: parseAsString,
    dueDate: parseAsString,
  });
};
