import { useEffect, useContext } from "react";
import { TitleContext } from "../contexts/titleContext";

export const useTitle = (title: string) => {
  const { updateTitle } = useContext(TitleContext)

  useEffect(() => {
    updateTitle!(title)
  })
}