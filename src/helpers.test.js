import { isValidABN } from "./helpers";

/*
The ABN is an 11-digit number where the first two digits are a checksum. Unlike with the tax file number (TFN), 
the ATO has publicised the formula for checking and creating valid ABN checksums. Also, the nature of the ABN 
algorithm means that any 9-digit number can be made into a valid ABN.
*/

test("Check if the ABN is valid", () => {
  expect(isValidABN("12345678901")).toBeTruthy();
  expect(isValidABN("12345678901 ")).toBeFalsy();
  expect(isValidABN("1234567890")).toBeFalsy();
  expect(isValidABN("123456789012")).toBeFalsy();
  expect(isValidABN("")).toBeFalsy();
});
