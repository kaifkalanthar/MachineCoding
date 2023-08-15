import axios from "axios";
import { useEffect, useState } from "react";
import _ from "lodash";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

interface Data {
  products: Product[];
  limits: number;
  skip: number;
  total: number;
}

const Pagination = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState<number[]>([]);
  const pageSize = 10;

  const getData = async () => {
    const { data } = await axios.get<Data>(
      `https://dummyjson.com/products?limit=100`
    );

    setTotalPage(_.range(1, data.total / pageSize + 1));
    setProducts(data.products);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const paginate = (items: Product[]) => {
    const startIndex = pageSize * (currentPage - 1);
    return _(items).slice(startIndex).take(pageSize).value();
  };
  const pagedProducts = paginate(products);
  return (
    <div>
      <div className="text-center grid grid-cols-3 gap-5 p-4">
        {pagedProducts.map((product) => (
          <div key={product.id}>
            <div className="p-5 bg-slate-400 rounded-2xl">
              <img
                className="h-48 w-96 object-cover mx-auto"
                src={product.thumbnail}
              />
            </div>
            <h1>{product.title}</h1>
          </div>
        ))}
      </div>
      <div className="justify-center">
        <ul className="flex justify-center my-5">
          {totalPages.map((page) => (
            <li
              key={page}
              className={`px-4 py-3 mx-2 border-2 border-black rounded-md cursor-pointer ease-linear duration-100 ${
                currentPage === page ? "bg-blue" : "bg-none"
              }`}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
