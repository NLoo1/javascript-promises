// PART 1

const factsList = document.querySelector('#facts')


async function init(){

    let fourFacts = [];
    let num = prompt("Please enter a number", 42)

    if(Number(num) != NaN || Number(num) != null){
        let p1, p2, p3, p4, p1Promise,p2Promise,p3Promise,p4Promise
        p1Promise = p2Promise= p3Promise = p4Promise = axios.get(`http://numbersapi.com/${num}`)

        p1 = await p1Promise
        p2 = await p2Promise
        p3 = await p3Promise
        p4 = await p4Promise

        fourFacts.push(p1,p2,p3,p4)
        for (res of fourFacts) {
            const node = document.createElement("li");
            const textnode = document.createTextNode(res.data);
            node.appendChild(textnode);
            factsList.appendChild(node);
        }
    }
    else{
        console.log("No value received or invalid value.")
    }
}

document.addEventListener('DOMContentLoaded', init)