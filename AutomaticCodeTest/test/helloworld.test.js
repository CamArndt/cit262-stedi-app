import sayHello from "../utils/helloworld.mjs";
import assert from 'assert';

it("Should say Hello Cameron", ()=>{
    const hello = sayHello();

    assert.equal(hello, "Hello Cameron");
});
