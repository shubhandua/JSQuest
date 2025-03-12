function removeDuplicates(arr) 
{
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) 
  {
      if (!uniqueArray.includes(arr[i]))
      {
          uniqueArray.push(arr[i]);
      }
  }
  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7])); 
