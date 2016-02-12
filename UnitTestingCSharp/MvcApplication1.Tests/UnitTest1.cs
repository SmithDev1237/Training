using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MvcApplication1.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void EvenTest()
        {
            var test = new Helpers.Test();
            var result = test.isEven(2);
            Assert.AreEqual(true, result);
        }

        [TestMethod]
        public void OddTest()
        {
            var test = new Helpers.Test();
            var result = test.isEven(1);
            Assert.AreEqual(false, result);
            
        }        
    }
}
