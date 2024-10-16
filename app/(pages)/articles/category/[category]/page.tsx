import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import { CATEGORIES_ITEMS, NAV_ITEMS } from "@/app/components/Nav/constant";
import { Article, ArticleCategory } from "@/app/types/article-type";
import Image from "next/image";
import category from "../page";

// export function generateStaticParams() {
//   return NAV_ITEMS.map((navItem) => {
//     return {
//       category: navItem.category,
//     };
//   });
// }

export const dynamic = "force-dynamic"

export default async function CategoryDetailPage(p: {
  params: { category: ArticleCategory };
}) {
  const categoryItem = CATEGORIES_ITEMS[p.params.category];
  const articles = await ArticleApi.fetchByCategory(p.params.category);
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image
          src={categoryItem.src}
          alt={categoryItem.alt}
          className="w-10 h-10"
        />
        <h1 className="font-bold capitalize text-3xl">
          {p.params.category} News
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
