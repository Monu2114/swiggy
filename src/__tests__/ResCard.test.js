import { render, screen } from "@testing-library/react";
import { RestaurantCard } from "../components/RestaurantCard";
import WithPromotedLabel from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import React from "react";

it("should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText(MOCK_DATA.card.card.info.name);
  expect(name).toBeInTheDocument();
});

it("should check whether promoted label is working", () => {
  const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);
  const promoted_label = MOCK_DATA.card?.card?.info?.promoted;
  if (promoted_label) {
    render(<PromotedRestaurantCard resData={MOCK_DATA} />);
    const label = screen.queryByText("⭐ Promoted");
    expect(label).toBeInTheDocument();
  } else {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const label = screen.queryByText("⭐ Promoted");
    expect(label).not.toBeInTheDocument();
  }
});
