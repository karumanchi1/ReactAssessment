import { renderHook } from "@testing-library/react";
import useRewards from "./useRewards";

describe("useRewards", () => {
  test("calculates rewards points correctly", () => {
    const transactions = [
      { id: 1, amount: 10 },
      { id: 2, amount: 60 },
      { id: 3, amount: 110 },
    ];
    const { result } = renderHook(() => useRewards(transactions));
    expect(result.current).toEqual(80); 
  });

  test("returns 0 rewards points if there are no qualifying transactions", () => {
    const transactions = [
      { id: 1, amount: 10 },
      { id: 2, amount: 30 },
      { id: 3, amount: 40 },
    ];
    const { result } = renderHook(() => useRewards(transactions));
    expect(result.current).toEqual(0);
  });

  test("returns 0 rewards points if there are no transactions", () => {
    const transactions = [];
    const { result } = renderHook(() => useRewards(transactions));
    expect(result.current).toEqual(0);
  });
});
