import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menuInterface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/pageInterface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/productInterface";
import { firstLevelMenu } from "../../helpres/helpers";
const TopPage: NextPage<CoursePageProps> = ({ products }) => {
  return <>{products && products.length}</>;
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      { firstCategory: m.id }
    );
    paths = [
      ...paths,
      ...menu.flatMap((item) =>
        item.pages.map((p) => `/${m.route}/${p.alias}`)
      ),
    ];
  }

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<CoursePageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      { firstCategory: firstCategoryItem.id }
    );
    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
    );
    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      { category: page.category, limit: 10 }
    );
    return {
      props: { menu, firstCategory: firstCategoryItem.id, page, products },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface CoursePageProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: TopPageModel;
  products: ProductModel[];
  firstCategory: TopLevelCategory;
}
