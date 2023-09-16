import { InfiniteData } from "@tanstack/react-query";
import React from "react";
import { Post } from "../hooks/useAlbums";
interface Props {
  data: InfiniteData<Post[]>;
}
const PostSection = ({ data }: Props) => {
  return (
    <div className="border-gray w-fit h-fit mx-auto border my-5 rounded-md">
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
  );
};

export default PostSection;
