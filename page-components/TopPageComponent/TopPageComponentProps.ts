import { TopLevelCategory, TopPageModel } from "../../interfaces/pageInterface";
import { ProductModel } from "../../interfaces/productInterface";

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
