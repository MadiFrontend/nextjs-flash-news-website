import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "@/app/components/Articlecard/ArticleCard";

export async function LatestNews(p: {}) {
  const articles = await ArticleApi.fetchToday();
  return (
    <div>
      <ArticleCard article={articles[0]} />
    </div>
  );
}
