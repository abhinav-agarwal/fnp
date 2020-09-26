import React, { lazy, Suspense } from 'react';

const LazyBestSeller = lazy(() => import('./BestSeller'));

const BestSeller = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBestSeller {...props} />
  </Suspense>
);

export default BestSeller;
