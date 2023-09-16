import { motion } from "framer-motion";
import { useState } from "react";
import useAlbums from "../hooks/useAlbums";
import InfiniteScrollBar from "./InfiniteScrollBar";
import PostSection from "./PostSection";

const QueryPagination = () => {
  const pageSize = 8;
  const { data, isLoading, error, fetchNextPage, isFetching, hasNextPage } =
    useAlbums({
      pageSize,
    });
  const dataLength =
    data?.pages.reduce((total, page) => total + page.length, 0) || 0;
  const [selected, setSelected] = useState(true);
  if (isLoading)
    return (
      <div className="mx-auto">
        <h1>Please Wait...</h1>
      </div>
    );
  if (error) return <h1>Unexpected Error occurred</h1>;
  return (
    <>
      <div>
        <div className="w-fit p-4 mx-auto flex gap-2">
          <motion.h1
            onClick={() => setSelected(!selected)}
            className={
              selected
                ? "bg-secondary text-3xl p-3 rounded-lg cursor-pointer"
                : "text-3xl p-3 cursor-pointer"
            }
          >
            Page
          </motion.h1>

          <motion.h1
            transition={{ duration: 3 }}
            onClick={() => setSelected(!selected)}
            className={
              !selected
                ? "bg-secondary text-3xl p-3 rounded-lg cursor-pointer"
                : "text-3xl p-3 cursor-pointer"
            }
          >
            Infinite Scroll
          </motion.h1>
        </div>
      </div>

      {!selected ? (
        <InfiniteScrollBar
          dataLength={dataLength}
          hasNextPage={!!hasNextPage}
          data={data!}
          fetchNextPage={fetchNextPage}
        />
      ) : (
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
        >
          <PostSection data={data!} />
          <button
            className="p-4 bg-primary rounded-md"
            onClick={() => fetchNextPage()}
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Load More"}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default QueryPagination;
