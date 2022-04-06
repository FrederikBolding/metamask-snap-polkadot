import { PolkadotApi } from "@chainsafe/metamask-polkadot-types";
import { MetamaskPolkadotSnap } from "./snap";

//let api: PolkadotApi;

export async function getEventApi(
  this: MetamaskPolkadotSnap
): Promise<PolkadotApi> {
  // requestIndex is not available
  return Promise.resolve(null) as unknown as Promise<PolkadotApi>;
  /**if(!api) {
    //init api
    const index = await window.ethereum.requestIndex();
    api = await index.getPluginApi(this.pluginOrigin);
  }
  return api;**/
}
