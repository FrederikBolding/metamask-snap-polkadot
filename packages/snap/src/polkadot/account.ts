import { Wallet } from "../interfaces";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { KeyringPair } from "@polkadot/keyring/types";
import { Keyring } from "@polkadot/keyring";
import { stringToU8a } from "@polkadot/util";
import { getConfiguration } from "../configuration";
import { getAppKey } from "../util/getAppKey";

/**
 * Returns KeyringPair if one is saved in wallet state, creates new one otherwise
 * @param wallet
 */
export async function getKeyPair(wallet: Wallet): Promise<KeyringPair> {
  // get app key and wait for api to be ready
  const [appKey] = await Promise.all([getAppKey(wallet), cryptoWaitReady()]);
  // generate keys
  const seed = appKey.substr(0, 32);
  const config = await getConfiguration(wallet);
  const keyring = new Keyring({ ss58Format: config.addressPrefix });
  return keyring.addFromSeed(stringToU8a(seed));
}
