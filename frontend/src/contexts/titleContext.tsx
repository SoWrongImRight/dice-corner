import { useState, createContext } from 'react';

interface TitleContext {
  title: string;
  updateTitle?: (title:string) => void;
};

const defaultState = {
  title: "Dice Corner",
};

export const TitleContext = createContext<TitleContext>(defaultState)

export const TitleProvider = (props: any) => {
  const [title, setTitle] = useState<string>('Dice Corner')

  const updateTitle = (title:string) => {
    setTitle(title)
  }

  return (
    <TitleContext.Provider value={{ title, updateTitle: updateTitle}} >
      {props.children}
    </TitleContext.Provider>
  )
}