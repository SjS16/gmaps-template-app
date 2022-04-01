// eslint-disable-next-line
import React from "react";
import { ComponentProps } from "unbounce-smart-builder-sdk-types";

export type DataStructure = {
  address_line_1: string;
  address_line_2?: string;
  address_zipcode: string;
  address_country: string;
  address_telephone?: string;
  address_email?: string;
};

export const Address = ({ data }: ComponentProps<DataStructure>) => {
  const {
    address_line_1,
    address_line_2,
    address_zipcode,
    address_country,
    address_telephone,
    address_email,
  } = data;

  return (
    <>
      <h1>Address</h1>
      <div>{address_line_1}</div>
      {address_line_2 ? <div>{address_line_2}</div> : <></>}
      <div>{address_zipcode}</div>
      <div>{address_country}</div>
      {address_telephone ? <div>Tel: {address_telephone}</div> : <></>}
      {address_email ? <div>Email: {address_email}</div> : <></>}
    </>
  );
};
