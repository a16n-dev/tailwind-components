import React from 'react';
import { BeatLoader } from 'react-spinners';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => (
  <div className={'flex-grow w-full h-full flex items-center justify-center'}>
    <BeatLoader />
  </div>
);

export default Loading;
