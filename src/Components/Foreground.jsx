import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref= useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem esse sunt nesciunt provident. Itaque, nemo! ",
      filesize: "9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem esse sunt nesciunt provident. Itaque, nemo! ",
      filesize: "9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem esse sunt nesciunt provident. Itaque, nemo! ",
      filesize: "9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem esse sunt nesciunt provident. Itaque, nemo! ",
      filesize: "9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) => {
          return <Card data={item} reference={ref} />;
        })}
      </div >
    </>
  );
}

export default Foreground;
