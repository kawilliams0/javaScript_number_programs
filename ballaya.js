let num = 32232
str = String(num)
let odd = 0
let even = 0
for(let i of str)
{
    if (parseInt(i)%2==0)
    {
        even += parseInt(i)
    }
    else
    {
        odd += parseInt(i)
    }
    //console.log(i)
}
console.log(even)
console.log(odd)
if (even == odd)
{
    console.log("Balayya Number")
}
else
{
    console.log("Not Balayya Number")
}