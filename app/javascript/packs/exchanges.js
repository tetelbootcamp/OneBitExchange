document.addEventListener('turbolinks:load', function(){
  document.getElementById('exchange_form').addEventListener('ajax:success', function(event) {
    let [result] = event.detail
    document.getElementById('result').value = result.value
  })
})


/*document.addEventListener('keydown', function (event) {
  document.getElementById('exchange_form').addEventListener('ajax:success', function(event) {
    let [result] = event.detail
    document.getElementById('result').value = result.value
  })
})*/

/*function start(){
  document.getElementById("amount").addEventListener("keypress", addActivityItem, false);
  }

function addActivityItem(){
  //option is selected
  alert("yeah");
}*/
/*document.addEventListener('turbolinks:load', function(){
  document.getElementById("amount").addEventListener("keypress", () => {
    document.getElementById('amount').addEventListener('submit', function(event) {
      let [result] = event.detail
      document.getElementById('result').value = result.value
    })
  })
})*/