document.addEventListener("DOMContentLoaded", function () {
  let mymoney = 0;
  const takeout = localStorage.getItem("income");
  if (takeout !== null) {
    mymoney = JSON.parse(takeout);
  }
  let total = 0;
  let passsau = 0;
  let passpork = 0;
  let passbeaf = 0;
  let passchick = 0;
  let passnoo = 0;
  let passegg = 0;
  let passpotato = 0;
  let passD = 0;
  let passC = 0;
  let passB = 0;
  let passA = 0;
  const sausage = document.getElementById("sausage");
  sausage.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10 &&q>0) {
      document.getElementById("input-sausage").textContent = q;
      total += (q - passsau) * 35;
      passsau = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const pork = document.getElementById("pork");
  pork.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-pork").textContent = q;
      total += (q - passpork) * 35;
      passpork = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const beaf = document.getElementById("beaf");
  beaf.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-beaf").textContent = q;
      total += (q - passbeaf) * 35;
      passbeaf = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const chicken = document.getElementById("chicken");
  chicken.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-chicken").textContent = q;
      total += (q - passchick) * 35;
      passchick = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const noodles = document.getElementById("noodles");
  noodles.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-noodles").textContent = q;
      total += (q - passnoo) * 35;
      passnoo = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const eggnoodles = document.getElementById("eggnoodles");
  eggnoodles.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-eggnoodles").textContent = q;
      total += (q - passegg) * 35;
      passegg = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const potato = document.getElementById("potato");
  potato.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-potato").textContent = q;
      total += (q - passpotato) * 35;
      passpotato = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const A = document.getElementById("A");
  A.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-A").textContent = q;
      total += (q - passA) * 35;
      passA = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const B = document.getElementById("B");
  B.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-B").textContent = q;
      total += (q - passB) * 35;
      passB = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const C = document.getElementById("C");
  C.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-C").textContent = q;
      total += (q - passC) * 35;
      passC = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const D = document.getElementById("D");
  D.addEventListener("click", function () {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10&&q>0) {
      document.getElementById("input-D").textContent = q;
      total += (q - passD) * 35;
      passD = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {
      alert("Try again");
    }
  });

  const input = document.getElementById("input");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "")
      if (input.value < total) {
        alert("Try again");
      } else {
        const change = document.getElementById("change");
        change.textContent = input.value - total;
        input.value = "";
      }
  });

  const income = document.getElementById("income");
  income.addEventListener("click", function () {
    alert(`目前總收入為${mymoney}元`);
  });

  const clear = document.getElementById("clear");
  clear.addEventListener("click", function () {
    mymoney += total;
    document.getElementById("input-sausage").textContent = "";
    document.getElementById("input-pork").textContent = "";
    document.getElementById("input-beaf").textContent = "";
    document.getElementById("input-chicken").textContent = "";
    document.getElementById("input-noodles").textContent = "";
    document.getElementById("input-eggnoodles").textContent = "";
    document.getElementById("input-potato").textContent = "";
    document.getElementById("input-A").textContent = "";
    document.getElementById("input-D").textContent = "";
    document.getElementById("input-C").textContent = "";
    document.getElementById("input-B").textContent = "";
    document.getElementById("change").textContent = "";
    document.getElementById("totalmoney").textContent = "";
    localStorage.setItem("income", mymoney);
  });
});
