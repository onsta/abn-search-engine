import React from "react";
import { Link } from "react-router-dom";

import { Companies } from "../api";
import { Message } from ".";

interface Props {
  companies: Companies;
}

export const CompanyList = ({ companies }: Props) => {
  return (
    <div className="mb-10" data-testid="company-list">
      {companies.Message && <Message message={companies.Message} />}
      {companies.Names.map(({ Name, Abn }, i) => (
        <Link to={`/company/${Abn}`} key={`${Abn}_${i}`}>
          <div className="my-1 ">
            <div className="p-4 leading-normal bg-white border border-gray-400 rounded hover:border-gray-600 hover:bg-gray-200">
              <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-gray-900">
                  {Name}
                </div>
                <p className="text-base text-gray-700">{Abn}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
