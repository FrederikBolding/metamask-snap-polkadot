import { Wallet } from "../interfaces";
import {
  defaultConfiguration,
  kusamaConfiguration,
  westendConfiguration,
} from "./predefined";
import { SnapConfig } from "@chainsafe/metamask-polkadot-types";
import { getState } from "../util/manageState";

export function getDefaultConfiguration(networkName: string): SnapConfig {
  switch (networkName) {
    case "kusama":
      console.log("Kusama configuration selected");
      return kusamaConfiguration;
    case "westend":
      console.log("Westend configuration selected");
      return westendConfiguration;
    default:
      return defaultConfiguration;
  }
}

export async function getConfiguration(wallet: Wallet): Promise<SnapConfig> {
  const state = await getState(wallet);
  if (!state || !state.polkadot.config) {
    return defaultConfiguration;
  }
  return state.polkadot.config;
}
