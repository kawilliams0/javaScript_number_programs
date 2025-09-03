let num = 6
let temp = num
let sq = num * num
let mod = 10
let count = 0
while (num!=0)
{
    count++
    num = parseInt(num/10)
}
while (sq!=0)
{
    if (temp == sq%(mod ** count))
    {
        console.log(`Yes ${temp} is AtoMorphicNumber`)
        break
    }
    else
    {
        console.log(`No ${temp} is not AtoMorphicNumber`)
        break
    }
}