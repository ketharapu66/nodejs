countries=["india","us","canada","australia","japan"];
capitals=["new delhi","Washinton","ottawa","canberra","tokyo"];

function getCapitals(country)
{
    for(i in countries)
    {
        if(countries[i]==country)
        return capitals[i];
    }
   return "country does not exist";
}

module.exports.getCapCity=getCapitals;