import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TransactionForm from "./TransactionForm";
import TransactionContext from "../../store/transaction-context";

describe("TransactionForm", () => {
  test("renders TransactionForm component", () => {
    render(<TransactionForm />);
    const transactionForm = screen.getByTestId("transaction-form");
    expect(transactionForm).toBeInTheDocument();
  });

  test("form does not submit if the input value is not proper", async () => {
    const onCloseForm = jest.fn();
    const mockAddTransaction = jest.fn();
    render(<TransactionForm onCloseForm={onCloseForm} />);

    const amountInput = screen.getByLabelText(/amount/i);
    fireEvent.change(amountInput, { target: { value: "not a number" } });
    fireEvent.submit(screen.getByTestId("transaction-form"));

    expect(mockAddTransaction).not.toHaveBeenCalled();

    const transactionForm = screen.getByTestId("transaction-form");

    await waitFor(() => expect(transactionForm).toBeInTheDocument());
  });

  test("submits form and adds transaction after vaidationg all fields", async () => {
    const addTransactionMock = jest.fn();

    const onCloseFormMock = jest.fn();

    render(
      <TransactionContext.Provider
        value={{ addTransaction: addTransactionMock }}
      >
        <TransactionForm onCloseForm={onCloseFormMock} />
      </TransactionContext.Provider>
    );
    const amountInput = screen.getByLabelText(/amount/i);
    const id = screen.getByLabelText(/id/i);
    const dateInput = screen.getByLabelText(/date/i);

    fireEvent.change(amountInput, { target: { value: "50" } });
    fireEvent.change(id, { target: { value: "1" } });
    fireEvent.change(dateInput, { target: { value: "2022-02-20" } });

    fireEvent.submit(screen.getByTestId("transaction-form"));

    await waitFor(() => {
      expect(addTransactionMock).toHaveBeenCalledWith({
        customerId: "1",
        name: "",
        amount: "50",
        transactionDate: "2022-02-20",
        key: expect.any(String),
      });
      expect(screen.queryByTestId("transaction-form")).not.toBeInTheDocument;
    });
  });

  test("cancels form and does not add transaction", async () => {
    const onCloseFormMock = jest.fn();
    render(<TransactionForm onCloseForm={onCloseFormMock} />);
    fireEvent.click(screen.getByText(/cancel/i));
    expect(screen.queryByTestId("transaction-form")).not.toBeInTheDocument;
  });
});
