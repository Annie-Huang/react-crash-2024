import { FC, PropsWithChildren } from 'react';

export interface CardProps {}

export const Card: FC<PropsWithChildren<CardProps>> = ({ children }) => {
  return <div className='bg-gray-100 p-6 rounded-lg shadow-md'>{children}</div>;
};
