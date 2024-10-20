"use client";

import { CryptoApi } from "@/app/api/crypto-api";
import { CryptoItem } from "@/app/types/crypto-type";
import { useEffect, useState } from "react";

export function CryptoNews() {
  const [crypto, setCrypto] = useState<CryptoItem>();

  const fetchCrypto = async () => {
    const cryptoResp = await CryptoApi.fetchBitcoin();
    setCrypto(cryptoResp);
  };

  useEffect(() => {
    fetchCrypto();
    const intervalId = setInterval(fetchCrypto, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getEvolutionEmoji = (value: string) => {
    const v = Number(value);
    return v > 0 ? (
      <span className="text-green-500">🔼</span>
    ) : (
      <span className="text-red-500">🔽</span>
    );
  };
  return (
    crypto && (
      <div>
        <div className="flex items-center space-x-4 mb-16">
          <h2 className="text-xl font-bold">
            <span className="animate-pulse">🔴</span>Crypto News
          </h2>
        </div>
        <div className="w-80 border-2 p-4 rounded-lg">
          <div className="text-lg font-semibold">{crypto.name + " Market"}</div>
          <div className="text-slate-500 ">
            Real time {crypto.name} evolution
          </div>
          <div className="space-y-2 text-sm">
            <span className="font-semibold">
              {crypto.priceUsd.split(".")[0]}$
            </span>{" "}
            ({Number(crypto.changePercent24Hr).toFixed(2)}
            %)
            {getEvolutionEmoji(crypto.changePercent24Hr)}
          </div>
        </div>
      </div>
    )
  );
}
