import { act, fireEvent, render, screen } from "@testing-library/react";
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

  it("should not accept duplicated participants", () => {
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

    fireEvent.change(input, {
      target: {
        value: "Halisson Alves",
      },
    });

    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe(
      "Duplicated participants are not allowed"
    );
  });

  it("should show errorMessage just for a few seconds", () => {
    jest.useFakeTimers();

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

    fireEvent.change(input, {
      target: {
        value: "Halisson Alves",
      },
    });

    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
