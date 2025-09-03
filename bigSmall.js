// let num = 4836
// let ans = []
// let str = String(num)
// for (let i of str)
// {
//     ans.push(parseInt(i))
// }
// ans.sort()
// console.log("Smallest Number is ", ans[0])
// console.log("Largest Number is ",ans[ans.length-1])

let num = 4836
let small = 0
let big = 0
while (num!=0)
{
    let rem = num % 10
    if (rem<9 && rem>0)
    {
        small = rem
    }
    else
    {
        big = rem
        // console.log(big)
    }
    num = parseInt(num/10)
    
    // console.log(num)
}

console.log(small)
console.log(big)