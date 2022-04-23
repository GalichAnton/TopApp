import { FirstLevelMenuItem } from "../interfaces/menuInterface";
import CourseIcon from "../layout/Menu/icons/courses.svg";
import { TopLevelCategory } from "../interfaces/pageInterface";
import ServiceIcon from "../layout/Menu/icons/services.svg";
import BooksIcon from "../layout/Menu/icons/books.svg";
import ProductsIcon from "../layout/Menu/icons/products.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "course",
    name: "Курсы",
    icon: <CourseIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServiceIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];
