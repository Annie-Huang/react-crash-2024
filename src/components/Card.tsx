import { FC, PropsWithChildren } from 'react';

export interface CardProps {
  bg?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  bg = 'bg-gray-100',
}) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};
