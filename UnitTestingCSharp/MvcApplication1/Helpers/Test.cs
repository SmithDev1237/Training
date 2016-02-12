using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApplication1.Helpers
{
    public class Test
    {
        public bool isEven(int number)
        {
            if(number % 2 == 0){

                return true;
            }
            else{
                return false;
            }
            
        }
    }
}