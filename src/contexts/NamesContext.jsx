import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const NamesContext = createContext();

const initialState = {
  id: "",
  fullName: "",
  gender: "",
  status: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "fullName/created":
      return {
        ...state,
        id: action.payload.id,
        fullName: action.payload.fullName,
        gender: action.payload.gender,
        status: action.payload.status,
      };
  }
}

function NamesProvider({ children }) {
  const [{ fullName, gender, status }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [people, setPeople] = useLocalStorage([], "people");

  return (
    <NamesContext.Provider
      value={{
        fullName,
        gender,
        status,
        people,
        setPeople,
        dispatch,
      }}
    >
      {children}
    </NamesContext.Provider>
  );
}

function useNames() {
  const context = useContext(NamesContext);
  if (context === undefined)
    throw new Error("NamesContext was used outside the NamesProvider");
  return context;
}

export { NamesProvider, useNames };
