(function()
{
    function summationAdding(num1 ,num2)
    {
        while(num2 > 0)
        {
            num1++;
            num2--;
        }
        return num1;
    }
    console.log(summationAdding(10,5));

})();
