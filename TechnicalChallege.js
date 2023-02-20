  let table = document.getElementById("myTbody");

  fetch(`https://randomuser.me/api/?results=250`)
  .then(res => {
    return res.json();
  })
  .then(data => {
      const user = data.results;
      for (let i = 0; i < 250; ++i) {
        let row = table.insertRow(i);
        let c0 = row.insertCell(0);
        let c1 = row.insertCell(1);
        let c2 = row.insertCell(2);
        let c3 = row.insertCell(3);
        let c4 = row.insertCell(4);
        c0.innerText = i + 1;
        c1.innerText = user[i].name.first
        c2.innerText = user[i].name.last
        c3.innerText = user[i].email
        var img = new Image();
        img.src = user[i].picture.thumbnail
        c4.appendChild(img);
        c4.value = i;
        c4.onclick = function() { 
                        var largeImg = new Image();
                        for (let i = 0; i < 250; ++i) {
                          if (c4.value == i) {
                            largeImg = user[i].picture.large
                            document.getElementById("image").src = largeImg;
                            let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
                            myModal.show();
                          }
                        } 
                      };
      }
    })
  .catch(error => console.log(error));
