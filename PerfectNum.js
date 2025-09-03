let num = 12
let sum = 0
for (let i = 1;i<num;i++)
{
    if (num%i == 0)
    {
        sum+=i
    }
}
if(sum == num)
{
    console.log(`${sum} is a Perfect Number`)
}
else
{
    console.log(`${num} is a not Perfect Number`)
}