let num = 9
let sq = num * num
let sum = 0
while (sq != 0)
{
    let rem = sq%10
    sum+=rem
    sq = parseInt(sq/10)
}
console.log(sum == num)