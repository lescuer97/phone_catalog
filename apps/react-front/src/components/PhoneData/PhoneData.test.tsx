import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import PhoneData from "./PhoneData";

describe("Phone Data testing", () => {
  let phoneData = {
    id: "a0b2452f-92c2-4e65-853d-1952d0d1cc8d",
    name: "iPhone 7",
    manufacturer: "Apple",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: "IPhone_7.png",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  };

  it("the title is visible", () => {
    render(<PhoneData phone={phoneData} />),
      expect(screen.getByText(/iPhone 7/i)).toBeInTheDocument();
  });

  it("render the description when clicked", async () => {
    render(<PhoneData phone={phoneData} />);
    const title = screen.getByText("iPhone 7");
    await userEvent.click(title);
    expect(screen.getByText(/769/i)).toBeInTheDocument();
  });
});
