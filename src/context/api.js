import { createContext, useContext, useEffect, useState } from "react";

export const UserApiContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummy-json.mock.beeceptor.com/users");
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserApiContext.Provider value={data}>
      {children}
    </UserApiContext.Provider>
  );
};

export const useData = () => {
  return useContext(UserApiContext);
};
