import { CryptoItem, CryptoResponse } from "../types/crypto-type";

export class CryptoApi {
  static async fetchBitcoin(): Promise<CryptoItem> {
    const cryptoResp: CryptoResponse = await (
      await fetch(`${process.env.NEXT_PUBLIC_CRYPTO_BASE_URL}/assets/bitcoin`)
    ).json();
    return cryptoResp.data;
  }
}
