function toUpperCaseArray(arr) 
{
  const upperCaseArray = [];
  for (let i = 0; i < arr.length; i++) 
  {
    upperCaseArray[i] = arr[i].toUpperCase();
  }
  return upperCaseArray;
}

console.log(toUpperCaseArray(['g', 'f', 'g']));
