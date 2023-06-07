var objBanks = [
    {
        username: "hdfc",
        password: "hdfcuser"
    },
    {
        username: "icici",
        password: "iciciuser"
    },
    {
        username: "citibank",
        password: "citibankuser"
    },
    {
        username: "admin",
        password: "adminuser"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < objBanks.length; i++) {
        if (username == objBanks[i].username && password == objBanks[i].password) {
            alert(username + " is logged in!!");
            window.location.href="bankhome.html"
            break
        }
    }
}

function viewAllTrades() {
	const web3 = new Web3(Web3.givenProvider || "ws:localhost:22000")

}
    