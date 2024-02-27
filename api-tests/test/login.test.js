const fetch = require("node-fetch2");

it("Should get a login token", async()=>{

    let token=""; //this is not what it will be eventually

    const options ={
        method:"POST",
        Headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"carndt22@gmail.com",
            "password": "P@ssw0rd!@"
        })
    }

    const response = await fetch('https://dev.stedi.me/login',options);

    token = await response.text();
    console.log("Token "+token)
    const status = response.status;

    expect(status).toBe(200);
    expect(token.length).toBe(36); //check for valid token
}
);