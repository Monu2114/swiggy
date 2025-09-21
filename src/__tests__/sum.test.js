import { sum } from "../sum";
test("sum fn should calculate sum of 2 numbers", () => {
  expect(sum(1, 5)).toBe(6); // assertion
});
