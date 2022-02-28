import { useEffect, useState } from "react";
export const useGetData = (
  api: string
): Array<{
  title: string;
  image: string;
  text: string;
  questions: Array<any>;
}> => {
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setPageInfo(data));
  }, [api]);
  return pageInfo;
};
