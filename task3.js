function multiline(string) {
  let count = 0;
  return string[0].replace(/\n/g, (_,index) => {
    //if first char(thus first line) just count the line
    if(index == 0) {
      return `${++count} `;
    
    // if penultimate char, return empty
    }else if ((index) == string[0].length -1) {
      return '';
    
    // if between first line and last add breakline and count
    } else {
      return `\n${++count} `;
    }
  });

}

const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }