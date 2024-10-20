import {
  CryptoNews,
  CryptoNewsSkel,
} from "@/app/components/CryptoNews/CryptoNews.server";
import {
  LatestNews,
  LatestNewsSkel,
} from "@/app/components/LatestNews/LatestNews";
import { Suspense } from "react";

export default async function IndexPage() {
  return (
    <div className="flex justify-between">
      <Suspense fallback={<LatestNewsSkel />}>
        <LatestNews />
      </Suspense>
      <Suspense fallback={<CryptoNewsSkel />}>
        <CryptoNews />
      </Suspense>
    </div>
  );
}
