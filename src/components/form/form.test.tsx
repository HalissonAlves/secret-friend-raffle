import { fireEvent, render, screen } from "@testing-library/react";
import { FriendListProvider } from "../../contexts/friend-list/friend-list";
import Form from "./form";

describe("Form Test", () => {
  it("should render disabled button when application starts", () => {
    render(<Form />);

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  it("should add a participant if input is not empty", () => {
    render(
      <FriendListProvider>
        <Form />
      </FriendListProvider>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Halisson Alves",
      },
    });

    fireEvent.click(button);

    expect(input).toHaveFocus();

    expect(input).toHaveValue("");
  });
});
