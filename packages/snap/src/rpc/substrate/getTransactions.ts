import { Wallet } from "../../interfaces";
import { Transaction } from "@chainsafe/metamask-polkadot-types";
import { getState } from "../../util/manageState";

export async function getTransactions(wallet: Wallet): Promise<Transaction[]> {
  return (await getState(wallet)).polkadot.transactions;
}
