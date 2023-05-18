let myForm = document.querySelector("#myForm")
myForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    let myHeader = new Headers({"Content-Type":"apllication/json"});
    let data = Object.fromEntries(new FormData(e.target));
    let config = {
        method:"POST",
        headers: myHeader,
        body: JSON.stringify(data)
    }
    let res = await(await fetch("api.php", config)).text();
    document.querySelector("pre").innerHTML = res
})