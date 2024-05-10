document.addEventListener("DOMContentLoaded", function () {
  let mymoney = 0,
    total = 0,
    j = 0,
    countnum = {
      sausage: {
        count: 0,
        price: 35
      },
      pork: {
        count: 0,
        price: 35
      },
      beaf: {
        count: 0,
        price: 35
      },
      chicken: {
        count: 0,
        price: 35
      },
      noodles: {
        count: 0,
        price: 50
      },
      eggnoodles: {
        count: 0,
        price: 65
      },
      potato: {
        count: 0,
        price: 25
      },
      D: {
        count: 0,
        price: 100
      },
      C: {
        count: 0,
        price: 95
      },
      B: {
        count: 0,
        price: 95
      },
      A: {
        count: 0,
        price: 125
      },
    },
    id = ["input-sausage","input-pork","input-beaf","input-chicken","input-noodles","input-eggnoodles","input-potato","input-A","input-B","input-C","input-D"];//dict = {type: 'aaaaa'}
    //prize=[35,35,35,35,50,65,25,95,95,100,125]
    const takeout = localStorage.getItem("income");
  if (takeout !== null) {
    mymoney = JSON.parse(takeout);
  }

  for (let i in countnum) {
    const temp = j;
    document.getElementById(i).addEventListener("click", () => {count(temp,i)});
    j++;
  }

  /*document.getElementById("sausage").addEventListener("click", () => {count(0,passsau)});

  document.getElementById("pork").addEventListener("click", () => {count(1,passpork)});

  document.getElementById("beaf").addEventListener("click", () => {count(2,passbeaf)});

  document.getElementById("chicken").addEventListener("click", () => {count(3,passchick)});

  document.getElementById("noodles").addEventListener("click", () => {count(4,passnoo)});

  document.getElementById("eggnoodles").addEventListener("click", () => {count(5,passegg)});

  document.getElementById("potato").addEventListener("click", () => {count(6,passpotato)});

  document.getElementById("A").addEventListener("click", () => {count(7,passA)});

  document.getElementById("B").addEventListener("click", () => {count(8,passB)});

  document.getElementById("C").addEventListener("click", () => {count(9,passC)});

  document.getElementById("D").addEventListener("click", () => {count(10,passD)});*/

  document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "")
      if (input.value < total) {
        alert("Try again");
      } else {
        const change = document.getElementById("change");
        change.textContent = input.value - total;
        input.value = "";
      }
  });

  document.getElementById("income").addEventListener("click", function () {
    alert(`目前總收入為${mymoney}元`);
  });

  document.getElementById("clear").addEventListener("click", function () {
    mymoney += total;
    for (let i of id) {
      document.getElementById(i).textContent = "0";
    }
    
    /*
    document.getElementById("input-pork").textContent = "0";
    document.getElementById("input-beaf").textContent = "0";
    document.getElementById("input-chicken").textContent = "0";
    document.getElementById("input-noodles").textContent = "0";
    document.getElementById("input-eggnoodles").textContent = "0";
    document.getElementById("input-potato").textContent = "0";
    document.getElementById("input-A").textContent = "0";
    document.getElementById("input-D").textContent = "0";
    document.getElementById("input-C").textContent = "0";
    document.getElementById("input-B").textContent = "0";
    */

    document.getElementById("change").textContent = "0";
    document.getElementById("totalmoney").textContent = "0";
    localStorage.setItem("income", mymoney);
  });

  function count (a,b) {
    var q = prompt("數量", "最多10");

    if (q != null && q <= 10 &&q>0) {
      document.getElementById(id[a]).textContent = q;
      total += (q - countnum[b].count) * countnum[b].price;
      countnum[b].count = q;
      totalmoney.textContent = total;
    } else if (q > 10) {
      alert("too much");
    } else {;
    }
  }
});


