//Init Github class
const github = new Github();

//Init UI class
const ui = new UI();

//Search Input
const search = document.getElementById('searchUser');

// search Event Listner
searchUser.addEventListener('keyup', (e) => {

    //Get input Text
    const userText = e.target.value;

    // Check if user input is null or not
    if (userText !== '') {
        // http Call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert if users not found
                    ui.ShowAlert(`${userText} is not Found, Try Another User`);

                } else {
                    ui.showProfile(data.profile);
                }
            })
    } else {
        //Clear the Profile
        ui.clearProfile();
    }

    e.preventDefault();
})