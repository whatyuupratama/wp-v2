import React from 'react';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
type Buttonprops = {
  value: string;
};
const Buttonn = ({ value }: Buttonprops) => {
  return (
    <div>
      <ShimmerButton className='shadow-2xl'>
        <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm flex items-center'>
          {value} <TiLocationArrowOutline size={20} />
        </span>
      </ShimmerButton>
    </div>
  );
};

export default Buttonn;
