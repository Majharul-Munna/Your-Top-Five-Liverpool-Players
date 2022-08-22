const selectArray = [];

function display(playersName){
    const listName = document.getElementById('list-name')
    listName.innerHTML = '';
    const warningTexe = document.getElementById('warning');

    for (i = 0; i < selectArray.length; i++)
    {
        if(selectArray.length == 6)
        {
            warningTexe.innerText = 'More than 5 not available';
            break;
        }

        const names = selectArray[i];

        const tr = document.createElement('tr');

        tr.innerHTML = 
        `<th>${i+1}.</th>
        <td>${names}</td>`;

        listName.appendChild(tr);

        
    }
}

function addToSelect(element){
    
    const playerName = element.parentNode.children[0].innerText;
    selectArray.push(playerName);
    display(selectArray);
}




// document.getElementById('sala-btn').addEventListener('click', function(){
//     const playerNameHtml = document.getElementById('sala-name');
//     const playerNameText = playerNameHtml.innerText;

//     const listedName =document.getElementById('list-name');
//     listedName.innerText = playerNameText;
//     // console.log(playerNameText);
// })