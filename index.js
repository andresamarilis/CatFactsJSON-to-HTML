fetch('cats.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});


function appendData(data) {
var mainContainer = document.getElementById("myData");

for (var i = 0; i < data.length; i++) {

    var div = document.createElement("div");
    div.innerHTML = 'Cat Fact: ' + data[i].text ;
    mainContainer.appendChild(div);
    
}
}