// BACK END
var firstName;
var lastName;
var streetAddress;
var city;
var state;
var deposit;
var total;

function Account(firstName, lastName, streetAddress, city, state, deposit) {
  this.first = firstName;
  this.last = lastName;
  this.street = streetAddress;
  this.city = city;
  this.state = state;
  this.total = deposit;
}

Account.prototype.newTotal = function (lastDeposit) {
  this.total += lastDeposit;
}

Account.prototype.newTotal = function (lastWithdrawal) {
  this.total -= lastWithdrawal;
}

// FRONT END
$(document).ready(function(){
  $("form#new-account").submit(function(event) {
    // alert("hi");
    event.preventDefault();

    firstName = $("input#new-first-name").val();
    lastName = $("input#new-last-name").val();
    streetAddress = $("input#new-street").val();
    city = $("input#new-city").val();
    state = $("input#new-state").val();
    deposit = parseInt($("input#deposit").val());

    var newAccount = new Account(firstName, lastName, streetAddress, city, state, deposit);

    $(".accountTotal").text("$" + newAccount.total + " in total");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#deposit").val("");

// DEPOSIT
    $("form#newDeposit").submit(function(event) {
      event.preventDefault();

      var lastDeposit = parseInt($("input#new-deposit").val());
      newAccount.newTotal(lastDeposit);
      $(".accountTotal").text("$" + newAccount.total + " in total");

      $("input#new-deposit").val("")
    })

// WITHDRAWAL
    $("form#withdrawal").submit(function(event) {
      event.preventDefault();
      newAccount.newTotal(lastWithdrawal);
      var lastWithdrawal = parseInt($("input#new-withdrawal").val());

      $(".accountTotal").text("$" + newAccount.total + " in total");
  })
})
})
