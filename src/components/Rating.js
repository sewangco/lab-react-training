import React from 'react';

export default function Rating(props) {
  console.log(props);
  const stars = {
    0: '☆☆☆☆☆',
    1: '★☆☆☆☆',
    2: '★★☆☆☆',
    3: '★★★☆☆',
    4: '★★★★☆',
    5: '★★★★★',
  };
  // console.log('this is stars', stars[Math.round(props.children)]);

  return (
    <div>
      <p>{stars[Math.round(props.children)]}</p>
    </div>
  );
}
