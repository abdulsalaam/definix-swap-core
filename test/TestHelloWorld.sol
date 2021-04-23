pragma solidity 0.6.12;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HelloWorld.sol";

contract TestHelloWorld {

  function testHelloWorld() public {
    HelloWorld meta = HelloWorld(DeployedAddresses.HelloWorld());

    Assert.equal(meta.sayHello(), "Hello World", "response not Hello World");
  }

}
