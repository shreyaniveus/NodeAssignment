function displaymessage()
{
    return new Promise((resolve,reject)=>{
        const msg="Promise resolved successfully";
        console.log(msg);
        resolve(msg);
    })
}

displaymessage().then((msg)=>
{
    console.log("Promise resolved with:",msg);
})
.catch((err)=>
{
    console.error("Error:",err);
});