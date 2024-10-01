import {
  ApplicationForm
} from "@jll-permitting-app/core/db/_application.types";

export enum TableListEnum {
  application = "application",
  user = "user",
}

const numericFields = [
  "sharedLocBridgeCenterlineNearestCrossing",
  "sharedLocLatitude",
  "sharedLocLongitude",
  "utilLocAocDegrees",
  "sharedLocCrossMilePost",
  "sharedLocParallelBegMilePost",
  "sharedLocSpurDist",
  "utilLocDistBridge",
  "utilLocBridgeMP",
];


const convertFormValueToDB = (key: string, value: string | boolean | string[] | Date | null) => {
  if (value === "") {
    return null;
  }

  if (numericFields.includes(key)) {
    return Number(value);
  }

  return value;
}

export const mutateFormValuesToBeCompatibleWithDB = (suppliedForm: ApplicationForm) => {
  let selectApplication: any = {

  }

  Object.keys(suppliedForm).forEach((key) => {
    const typedKey = key as keyof ApplicationForm;
    selectApplication[typedKey] = convertFormValueToDB(key, suppliedForm[typedKey]);
  });

  return selectApplication;
}

const convertDBValueToForm = (value: string) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateRegex.test(value)) {
    return new Date(value);
  }

  return value;
}

export const mutateDBValuesToBeCompatibleWithForm = (suppliedForm: ApplicationForm) => {

  Object.keys(suppliedForm).forEach((key) => {
    // @ts-ignore
    suppliedForm[key as keyof ApplicationForm] = convertDBValueToForm(suppliedForm[key as keyof ApplicationForm]);
  });

  console.log("suppliedForm", suppliedForm)
}