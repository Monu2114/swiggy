import { render, screen } from "@testing-library/react";
import { RestaurantCard } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import React from "react";

it("should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText(MOCK_DATA.card.card.info.name);
  expect(name).toBeInTheDocument();
});
