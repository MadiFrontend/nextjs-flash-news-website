import { CryptoNews } from "@/app/components/CryptoNews/CryptoNews.server";
import { LatestNews } from "@/app/components/LatestNews/LatestNews";

export default async function IndexPage() {
  return (
    <div className="flex justify-between">
      <LatestNews />
      <CryptoNews />
    </div>
  );
}
