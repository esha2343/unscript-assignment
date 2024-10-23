import React from 'react';

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col grow shrink items-start min-w-[240px] w-[310px]">
      <h3 className="flex flex-col self-stretch pb-3 w-full text-base font-bold tracking-wider leading-none whitespace-nowrap">
        <div className="pt-2.5 pb-3 w-full">{title}</div>
      </h3>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col pt-3 pb-1.5">
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default FooterColumn;