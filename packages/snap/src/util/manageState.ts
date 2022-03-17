import { MetamaskState, Wallet } from "../interfaces";

export const getState = (wallet: Wallet): Promise<MetamaskState> =>
  wallet.request({
    method: "snap_manageState",
    params: ["get"],
  }) as Promise<MetamaskState>;

export const updateState = (wallet: Wallet, state: unknown): Promise<null> =>
  wallet.request({
    method: "snap_manageState",
    params: ["update", state],
  }) as Promise<null>;
