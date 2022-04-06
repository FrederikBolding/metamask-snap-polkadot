import { Asset, Wallet } from "../interfaces";

// eslint-disable-next-line max-len
export function executeAssetOperation(
  asset: Partial<Asset>,
  wallet: Wallet,
  method: "update" | "add" | "remove"
): Promise<void> {
  // No-op
  return Promise.resolve();
  /**return wallet.request({
    method: 'wallet_manageAssets',
    params: [ method, asset ],
  }) as Promise<Asset>;**/
}
