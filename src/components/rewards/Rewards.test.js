import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rewards from "./Rewards";
import TransactionContext from "../../store/transaction-context";
import useRewards from "../../hooks/useRewards";
import sampleTransactions from "../../store/sample-transactions";

jest.mock("../../hooks/useRewards");

describe("Rewards component", () => {
  let addTransaction;
  let transactions;
  let setSelectedTransaction;
  let selectedTransaction;

  beforeEach(() => {
    addTransaction = jest.fn();
    setSelectedTransaction = jest.fn();
    selectedTransaction = null;
    transactions = sampleTransactions;

    render(
      <TransactionContext.Provider value={{ addTransaction, transactions }}>
        <Rewards />
      </TransactionContext.Provider>
    );

    jest.mock("../../hooks/useRewards", () => {
      return jest.fn().mockReturnValue(100);
    });
  });

  test("renders the component properly", () => {
    const rewardsCard = screen.getByTestId("rewards-card");
    expect(rewardsCard).toBeInTheDocument();
  });

  test("displays the reward points earned by the selected customer", async () => {
    const idFilter = screen.getByRole("combobox");
    userEvent.selectOptions(idFilter, ["2"]);

    await waitFor(() => {
      expect(useRewards).toBeCalled();
      expect(screen.getByText(/Total Reward points/i)).toBeInTheDocument();
    }, 2000);
  });

  test("displays the requesting message when fetching reward points", async () => {

    const idFilter = screen.getByRole("combobox");
    userEvent.selectOptions(idFilter, ["1"]);

    const loadingMessage = await screen.findByText(
      /Requesting Reward Points of .../i
    );
    expect(loadingMessage).toBeInTheDocument();

    await waitFor(() => {
      expect(useRewards).toHaveBeenCalled();
      expect(
        screen.getByText(/Total Reward Points Earned By/i)
      ).toBeInTheDocument();
    }, 2000);
  });
});
