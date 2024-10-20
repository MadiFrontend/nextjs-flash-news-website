import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import Image from "next/image";
import topPng from "@/public/top.png";
import Skeleton from "react-loading-skeleton";

export async function LatestNews() {
  const articles = await ArticleApi.fetchToday();
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image src={topPng} className="h-10 w-10" alt="latest news icon" />
        <h1 className="text-4xl font-bold capitalize">Latest News</h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const LatestNewsSkel = () => {
  return (
    <div>
      <Skeleton height={40} width={218} count={1} className="mb-16" />
      <div className="gap-y-20 grid grid-cols-2 gap-x-8">
        {Array.from({ length: 5 }).map((i, index) => (
          <Skeleton height={344} width={320} count={1} key={index} />
        ))}
      </div>
    </div>
  );
};
