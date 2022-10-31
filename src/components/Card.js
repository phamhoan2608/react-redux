import React from 'react';

const Card = () => {
  return (
    <div className='max-w-[400px] flex flex-col text-left bg-purple-100 dark:bg-gray-800 dark:text-white shadow-lg p-5 rounded-2xl mt-8'>
        <img src='https://plus.unsplash.com/premium_photo-1661816577593-ec2639b682c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'/>
        <h2 className='font-bold pt-2 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident mollitia ab voluptatem nihil quas veritatis earum nemo libero dolorem nesciunt ea, hic ipsam iusto animi. Labore modi optio veniam perferendis!</p>
        <button className='w-[100%] mt-4 h-[50px] bg-blue-600 hover:bg-blue-900 text-white rounded-lg' >Explore</button>
    </div>
  );
};

export default Card;