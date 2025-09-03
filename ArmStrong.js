let num = 1634
let temp = num
let power = String(num).length
let sum = 0
while (num != 0)
{
    let rem = num%10
    sum += rem ** power
    num = parseInt(num/10) //or use Math.trunc (num/10)
}
console.log(sum)

if (temp == sum)
{
    console.log(`${sum} is an ArmStrong Number`)
}
else
{
    console.log(`${temp} is not an ArmStrong Number`)

}