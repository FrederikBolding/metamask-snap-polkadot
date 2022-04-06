import { Wallet } from "../interfaces";
import deepmerge from "deepmerge";
import { getDefaultConfiguration } from "../configuration";
import { SnapConfig } from "@chainsafe/metamask-polkadot-types";
import { updateState, getState } from "../util/manageState";

export async function configure(
  wallet: Wallet,
  networkName: string,
  overrides: unknown
): Promise<SnapConfig> {
  const defaultConfig = getDefaultConfiguration(networkName);
  const configuration = deepmerge(defaultConfig, overrides);
  const state = await getState(wallet);
  state.polkadot.config = configuration;
  updateState(wallet, state);
  return configuration;
}
