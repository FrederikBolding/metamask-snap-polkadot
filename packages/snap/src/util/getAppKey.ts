import { Wallet } from "../interfaces";

export const getAppKey = (wallet: Wallet): Promise<string> =>
  wallet.request({ method: "snap_getAppKey", params: [] }) as Promise<string>;
