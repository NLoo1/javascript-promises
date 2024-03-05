// PART 1

const factsList = document.querySelector('#facts')

let fourFacts = [];
let num = prompt("Please enter a number", 42)

if(num != null && num !=""){
    for (let i = 1; i < 5; i++) {
        fourFacts.push(
          axios.get(`http://numbersapi.com/${num}`)
        );
      }
      
      Promise.all(fourFacts)
        .then(facts => {
          for (res of facts) {
            console.log(res.data)
            const node = document.createElement("li");
            const textnode = document.createTextNode(res.data);
            node.appendChild(textnode);
            factsList.appendChild(node);
          }
        })
        .catch(err => console.log(err));
}
else{
    console.log("No input received.")
}
