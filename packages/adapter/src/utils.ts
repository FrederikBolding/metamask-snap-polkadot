export function hasMetaMask(): boolean {
  if (!window.ethereum) {
    return false;
  }
  return window.ethereum.isMetaMask;
}

export async function installPolkadotSnap(
  pluginOrigin: string
): Promise<boolean> {
  try {
    await window.ethereum.request({
      method: "wallet_enable",
      params: [
        {
          // eslint-disable-next-line @typescript-eslint/camelcase
          wallet_snap: {
            [pluginOrigin]: {},
          },
        },
      ],
    });
    return true;
  } catch (e) {
    console.log("Failed to install snap", e);
    return false;
  }
}

export async function isPolkadotSnapInstalled(
  pluginOrigin: string
): Promise<boolean> {
  try {
    const result = (await window.ethereum.request({
      method: "wallet_getSnaps",
    })) as { [k: string]: { permissionName: string } };
    return !!Object.values(result).find(
      (permission) => permission.permissionName === pluginOrigin
    );
  } catch (e) {
    console.log("Failed to obtain installed plugins", e);
    return false;
  }
}
