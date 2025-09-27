import React from "react";
import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  // identical to fetch function
  return Promise.resolve({
    ok: true,
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should search in cards the shadab keyword", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeClick = screen.getAllByTestId("restaurant-card").length;
  expect(cardsBeforeClick).toBeGreaterThan(40);
  const searchBtn = await screen.findByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();

  const searchInput = await screen.findByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "shadab" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("restaurant-card").length;
  expect(cards).toBe(2);
});
