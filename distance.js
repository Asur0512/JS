(function()
{
    function getDistance(x,y)
    {
        let time = y * (x=1) - 5 * (x+2);
        let distance = ((y+time) / 60) * x;
        return distance;
    }
    console.log(getDistance(4,6));
})();