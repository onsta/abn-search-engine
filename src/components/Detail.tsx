import React from "react";

import { Company } from "../api";

interface Props {
  company: Company;
}

export const Detail = ({ company }: Props) => {
  return (
    <div className="my-1 ">
      <div className="p-4 leading-normal bg-white border border-gray-400 rounded">
        <div className="mb-8">
          <div
            data-testid="company-entity-name"
            className="mb-2 text-xl font-bold text-gray-900"
          >
            {company.EntityName}
          </div>
          <p className="text-base text-gray-700" data-testid="company-abn">
            {company.Abn}
          </p>
          <p className="text-base text-gray-700">{company.AbnStatus}</p>
          <p className="text-base text-gray-700">{company.AddressState}</p>
        </div>
      </div>
    </div>
  );
};
