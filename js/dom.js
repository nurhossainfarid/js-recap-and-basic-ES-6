// add border
document.getElementById('add-border').addEventListener('click', function () {
    document.getElementById('friend-container').style.border = '3px solid gray'
});

// add background 
document.getElementById('add-background').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightBlue';
    }
})

// add friend 
document.getElementById('add-friend').addEventListener('click', () => {
    const friendParents = document.getElementById('friend-container');
    const createNewFriend = document.createElement('div');
    createNewFriend.classList = 'friend'
    createNewFriend.innerHTML = `<h1>New Friend-5</h1>
    <P>Dolor dolorum qui doloremque mollitia veritatis sed eveniet ipsum ipsa eius exercitationem libero, repellat laudantium nam ut. Quasi natus vero officia voluptatibus amet doloribus fugit reiciendis. Assumenda error quisquam facere.</P>`;
    friendParents.appendChild(createNewFriend);
});

// remove friend
document.getElementById('friend-container').addEventListener('click', event => {
    event.target.parentNode.removeChild(event.target);
})

