import { Wallet } from "../interfaces";

type SnapConfirmParams = {
  prompt: string;
  description?: string;
  textAreaContent?: string;
};

export async function showConfirmationDialog(
  wallet: Wallet,
  message: SnapConfirmParams
): Promise<boolean> {
  return (await wallet.request({
    method: "snap_confirm",
    params: [message],
  })) as boolean;
}
