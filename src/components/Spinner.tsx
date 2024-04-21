import ClipLoader from 'react-spinners/ClipLoader';
import { FC } from 'react';

const override = {
  display: 'block',
  margin: '100px auto',
};

export interface SpinnerProps {
  loading: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ loading }) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};
