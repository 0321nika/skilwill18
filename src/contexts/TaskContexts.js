import React, { createContext, useCallback, useContext, useMemo } from "react";
import useRequest from "../hooks/useRequest";
import useFetch from "../hooks/useFetch";

const TaskContexts = createContext(null);

const TaskContextProvider = ({ children }) => {
  const { loading: dataLoading, response, resendRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/tasks",
    method: "GET",
  });
  const { sendRequest, loading: deleteLoading } = useRequest({ method: 'DELETE' });

  const taskList = useMemo(() => {
    return response?.items.map((tasks) => {
      return {
        task: tasks.task,
        id: tasks._uuid,
        date: tasks.date,
        name: tasks.name,
        surname: tasks.surname,
      };
    }) || [];
  }, [response]);

  const onDelete = useCallback((userId) => {
    sendRequest(null, `https://crudapi.co.uk/api/v1/tasks/${userId}`).then(() => resendRequest());
  }, [sendRequest, resendRequest]);

  const contextValue = useMemo(() => ({
    dataLoading,
    deleteLoading,
    taskList,
    onDelete,
  }), [dataLoading, deleteLoading, taskList, onDelete]);

  return <TaskContexts.Provider value={contextValue}>{children}</TaskContexts.Provider>;
};

export const useTasksContext = () => {
  const contextValue = useContext(TaskContexts);
  if (!contextValue) throw new Error("Your context is outside TaskContextProvider");
  return contextValue;
};

export default TaskContextProvider;