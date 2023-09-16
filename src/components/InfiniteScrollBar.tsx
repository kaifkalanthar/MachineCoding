import { InfiniteData } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post } from "../hooks/useAlbums";
import PostSection from "./PostSection";
import { motion } from "framer-motion";

interface Props {
  dataLength: number;
  hasNextPage: boolean;
  fetchNextPage: any;
  data: InfiniteData<Post[]>;
}

const InfiniteScrollBar = ({
  dataLength,
  hasNextPage,
  fetchNextPage,
  data,
}: Props) => {
  return (
    <motion.main initial={{ x: 200 }} animate={{ x: 0 }}>
      <InfiniteScroll
        dataLength={dataLength}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<h1 className="text-7xl text-center my-2">Loading...</h1>}
      >
        <PostSection data={data} />
      </InfiniteScroll>
    </motion.main>
  );
};

export default InfiniteScrollBar;
