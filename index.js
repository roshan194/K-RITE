let closenav = document.querySelector(".close-nav");
let opennav = document.querySelector(".open-nav");
let navsection = document.querySelector(".left");
let table = document.getElementById("tabledata")
let down = document.getElementsByClassName("fa-chevron-down")
let up = document.getElementsByClassName("fa-chevron-up")
let list = document.getElementsByClassName("list")
let li = document.getElementsByTagName("li")
let vallength = 0

// close side nav bar
closenav.addEventListener("click", () => {
  navsection.style.left = `-${navsection.offsetWidth}px`;
  closenav.style.display = "none";
  opennav.style.display = "flex";
});

// open sidenavbar
opennav.addEventListener("click", () => {
  navsection.style.left = "10px";
  closenav.style.display = "flex";
  opennav.style.display = "none";
});

// for dropdown icons on clicking property changes
for(let i=0; i<3;i++){
  down[i].addEventListener("click", ()=>{
    list[i].style.display = "flex"
    li[i].style.height = "116px"
    down[i].style.display = "none"
    up[i].style.display = "flex"
  })
  up[i].addEventListener("click", ()=>{
      list[i].style.display = "none"
      li[i].style.height = "23px"
      up[i].style.display = "none"
      down[i].style.display = "flex"
    })
}

// fetched data from data.json file which stores data of table
fetch("./data/data.json")
  .then((res) => res.json())
  .then((val) => {
    vallength = val.length
    val.map((elem) => {
      let row = document.createElement("div")
      row.className = "row"
      let span1 = document.createElement("span")
      span1.className = "d-flex align-center gap-3 fixed scroll"
      let span2 = document.createElement("span")
      span2.className = "w-20 scrolly"
      let span3 = document.createElement("span")
      span3.className = "w-15 scroll"
      let span4 = document.createElement("span")
      span4.className = "w-15 scrollx-y"
      let span5 = document.createElement("span")
      span5.className = "w-15 scroll"
      let span6 = document.createElement("span")
      span6.className = "w-15 scrollx-y"
      let span7 = document.createElement("span")
      span7.className = "w-5 scroll"
      
      span1.innerHTML = `<input type="checkbox"> <img src=${elem.logo}> ${elem.name}`
      span2.innerHTML = `<p> ${elem.description} </p>`
      span3.innerHTML = `<img src="assets/ros.jpg">`
      span4.innerHTML = elem.categories.map(val => `<span class="${val.class}"> ${val.data} </span>`)
      span5.innerHTML = elem.tags.map(val => `<span class="greybaco"> ${val} </span>`)
      span6.innerHTML = `<span class="${elem.meatClass}"> ${elem.nextmeating} </span>`
      span7.innerHTML = ""
      row.appendChild(span1)
      row.appendChild(span2)
      row.appendChild(span3)
      row.appendChild(span4)
      row.appendChild(span5)
      row.appendChild(span6)
      row.appendChild(span7)
      table.appendChild(row)
    });

  });
  // for searching data available in table with respect to name
  function searchdata() {
    let searchstr = document.getElementById("search").value
    searchstr = searchstr.toLowerCase();
    let row = document.getElementsByClassName("row");

    for(let i=0; i<vallength; i++){
      if(!row[i].innerHTML.toLowerCase().includes(searchstr)){
        row[i].style.display = "none"
      }
      else{
        row[i].style.display = "flex"
      }
    }
  }


  // {
  //   filter((item)=>{
  //     if(searchStrval.length === 0){
  //       return item
  //     }
  //     else{
  //       return item.name.toLowerCase().includes(searchStrval)
  //     }
  //   })
  // }