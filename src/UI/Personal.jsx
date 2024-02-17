import React from 'react';

const Personal = () => {
  const emailAddress = 'sahuamit00786@gmail.com';

  return (
    <div className='flex flex-col mt-[-80px] pb-[30px]'>
      <div className='mx-auto'>
        <h1>Contact : 6386923401</h1>
        Email : <a className='text-blue-900 font-bold' href={`mailto:${emailAddress}`}>{emailAddress}</a>
      </div>
    </div>
  );
}

export default Personal;
