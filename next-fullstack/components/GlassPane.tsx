import React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};
const GlassPane = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        'rounded-2xl border-solid border-2 border-gray-200',
        className
      )}
    >
      <div className="w-full h-2"></div>
      {children}
    </div>
  );
};

export default GlassPane;
