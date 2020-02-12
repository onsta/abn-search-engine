import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchABN, Company, Status } from "../api";
import { isValidABN } from "../helpers";
import { NotFound, Loading, Message, Detail } from "../components";

enum Action {
  loading = "loading",
  error = "error",
  setCompanyData = "setCompanyData"
}

interface State {
  companyData: Company | null;
  status: Status;
}

type Actions =
  | { type: Action.loading }
  | { type: Action.error }
  | { type: Action.setCompanyData; companyData: Company };

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case Action.error:
      return { ...state, status: Status.error };
    case Action.loading:
      return { ...state, status: Status.loading };
    case Action.setCompanyData:
      return {
        ...state,
        status: Status.success,
        companyData: action.companyData
      };
    default:
      throw new Error("Unknow action");
  }
};

const initialState = {
  status: Status.loading,
  companyData: null
};

const renderSwitch = (state: State) => {
  switch (state.status) {
    case Status.loading:
      return <Loading />;
    case Status.success:
      return (
        <div>
          {state.companyData && state.companyData.Message && (
            <Message message={state.companyData.Message} />
          )}
          {state.companyData ? (
            <Detail company={state.companyData} />
          ) : (
            <NotFound />
          )}
        </div>
      );
    default:
      return <NotFound />;
  }
};

export const DetailPage = () => {
  const { abn } = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const setABN = async (abn: string) => {
        const companyData = await fetchABN(abn);
        dispatch({ type: Action.setCompanyData, companyData });
      };
      if (abn && isValidABN(abn)) {
        setABN(abn);
      } else {
        throw new Error("Invalid ABN");
      }
    } catch (e) {
      dispatch({ type: Action.error });
    }
  }, [abn]);

  return (
    <div>
      <Link to="/">
        <button className="h-10 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Back
        </button>
      </Link>
      {renderSwitch(state)}
    </div>
  );
};
