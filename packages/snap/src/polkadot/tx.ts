import { Wallet } from "../interfaces";
import { Transaction } from "@chainsafe/metamask-polkadot-types";
import { getState, updateState } from "../util/manageState";

export async function saveTxToState(
  wallet: Wallet,
  tx: Transaction
): Promise<void> {
  const state = await getState(wallet);
  state.polkadot.transactions.push(tx);
  await updateState(wallet, state);
}

export async function updateTxInState(
  wallet: Wallet,
  transaction: Transaction
): Promise<void> {
  const state = await getState(wallet);
  const index = state.polkadot.transactions.findIndex(
    (tx) => tx.hash === transaction.hash
  );
  if (index >= 0) {
    state.polkadot.transactions[index] = transaction;
    await updateState(wallet, state);
  }
}
