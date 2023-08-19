import React, { useState } from "react";
import useAlbums from "../hooks/useAlbums";
import { motion } from "framer-motion";

const QueryPagination = () => {
  const pageSize = 8;
  const { data, isLoading, error, fetchNextPage, isFetching } = useAlbums({
    pageSize,
  });
  const [selected, setSelected] = useState(true);
  if (isLoading) return <h1>Please Wait...</h1>;
  if (error) return <h1>Unexpected Error occurred</h1>;
  return (
    <>
      <div className="w-fit p-4 mx-auto grid grid-cols-2 text-center gap-3">
        <motion.h1
          onClick={() => setSelected(true)}
          className={
            selected
              ? "bg-secondary text-3xl p-3 rounded-lg cursor-pointer"
              : "text-3xl p-3 cursor-pointer"
          }
        >
          Page
        </motion.h1>
        <h1
          onClick={() => setSelected(false)}
          className={
            !selected
              ? "bg-secondary text-3xl p-3 rounded-lg cursor-pointer"
              : "text-3xl p-3 cursor-pointer"
          }
        >
          Infinite Scroll
        </h1>
      </div>
      <div className="border-gray w-fit mx-auto border my-5 rounded-md">
        {data?.pages.map((page) => (
          <React.Fragment>
            {page?.map((item) => (
              <div key={item.id} className="w-[500px] p-4 border-b border-gray">
                <h5 className="text-4xl">{item.title}</h5>
                <p className="w-100 ">{item.body}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mx-auto">
        <button
          className="p-4 bg-primary rounded-md"
          onClick={() => fetchNextPage()}
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
};

export default QueryPagination;
