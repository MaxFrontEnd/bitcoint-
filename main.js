const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

const XHR = new XMLHttpRequest();

window.onload = function() {
    refreshRate();
}

function refreshRate() {
    XHR.open("GET", URL);
    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4) {
            if(XHR.status === 200) {
                const response = JSON.parse(XHR.response);
                const rate = response.bpi.GBP.rate;
                const coin = document.getElementById("coin");
                coin.innerHTML = rate +" GBR" ;
            } else {
                console.log("Server error ocured");
        }
        
    }
    XHR.send();
} }
