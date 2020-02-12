import fetchjsonp from "fetch-jsonp";

import { guid } from "./constants";

export interface Company {
  EntityName: string;
  Abn: string;
  AbnStatus: string;
  Message: string;
  AddressState: string;
}

export interface Companies {
  Message: string;
  Names: Array<{
    Abn: string;
    Name: string;
  }>;
}

export enum Status {
  loading = "loading",
  error = "error",
  success = "success"
}

const options = {
  timeout: 20000
};

export const fetchABN = async (abn: string): Promise<Company> => {
  const response = await fetchjsonp(
    `https://abr.business.gov.au/json/AbnDetails.aspx?abn=${abn}&guid=${guid}`,
    options
  );
  const parsedResponse = await response.json();

  return parsedResponse;
};

export const fetchNames = async (name: string): Promise<Companies> => {
  const response = await fetchjsonp(
    `https://abr.business.gov.au/json/MatchingNames.aspx?name=%${name}&maxResults=10&guid=${guid}`,
    options
  );
  const parsedResponse = await response.json();

  return parsedResponse;
};
