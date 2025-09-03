let num = 1234
let temp = num
let sum = 0
let pro = 1
while (num!=0)
{
    let rem = num%10
    sum+=rem
    pro *= rem
    num = parseInt(num/10)
}
if(sum == pro)
{
    console.log(`${temp} is Spy Number`)
}
else
{
    console.log(`${temp} is Not Spy Number`)
}