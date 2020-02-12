import React, { useEffect, useReducer } from "react";

import { fetchNames, Companies, Status } from "../api";
import { CompanyList, NotFound, Search, Loading } from "../components";

enum Action {
  loading = "loading",
  error = "error",
  setCompanies = "setCompanies",
  setQuery = "setQuery"
}

interface State {
  query: string;
  companies: Companies | null;
  status: Status | null;
}

type Actions =
  | { type: Action.loading }
  | { type: Action.error }
  | { type: Action.setCompanies; companies: Companies }
  | { type: Action.setQuery; query: string };

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case Action.error:
      return { ...state, status: Status.error };
    case Action.loading:
      return { ...state, status: Status.loading };
    case Action.setCompanies:
      return {
        ...state,
        status: Status.success,
        companies: action.companies
      };
    case Action.setQuery:
      return {
        ...state,
        query: action.query
      };
    default:
      throw new Error("Unknow action");
  }
};

const initialState = {
  status: null,
  companies: null,
  query: ""
};

const renderSwitch = (state: State, dispatch: React.Dispatch<Actions>) => {
  switch (state.status) {
    case null:
      return;
    case Status.loading:
      return <Loading repeat={6} />;
    case Status.success:
      return (
        <div>
          {state.companies ? (
            <CompanyList companies={state.companies} />
          ) : (
            <NotFound />
          )}
        </div>
      );
    default:
      return <NotFound />;
  }
};

export const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const setName = async (query: string) => {
        dispatch({ type: Action.loading });
        const companies = await fetchNames(query.trim());
        dispatch({ type: Action.setCompanies, companies });
      };
      if (state.query.length > 3) {
        setName(state.query);
      }
    } catch (e) {
      dispatch({ type: Action.error });
    }
  }, [state.query]);

  return (
    <div>
      <Search
        setQuery={(query: string) => dispatch({ type: Action.setQuery, query })}
      />
      {renderSwitch(state, dispatch)}
    </div>
  );
};
