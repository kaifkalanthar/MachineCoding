import { useInfiniteQuery } from "@tanstack/react-query";
import http from "../service/api-client";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
}

const useAlbums = (query: PostQuery) => {
  const { data, isLoading, error, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery<Post[], Error>({
      queryKey: ["users", query],
      queryFn: ({ pageParam = 1 }) =>
        http
          .get("/posts", {
            params: {
              _start: (pageParam - 1) * query.pageSize,
              _limit: query.pageSize,
            },
          })
          .then((res) => res.data),
      staleTime: 1000 * 60 * 24,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
    });

  return { data, isLoading, error, fetchNextPage, isFetching, hasNextPage };
};

export default useAlbums;
