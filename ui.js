class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mb-3">Go to the Profile</a>
                </div>
                <div class="col-md-9 m-2">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-info">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group mb-2">
                        <li class="list-group-item m-2">Company: ${user.company}</li>
                        <li class="list-group-item m-2">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item m-2">Location: ${user.location}</li>
                        <li class="list-group-item m-2">Created at: ${user.created_at}</li>
                    </ul>
                </div>
            </div>  
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos">
        </div>
        `;
    }

    // if users not found display the alert
    ShowAlert(message) {



        const div = document.createElement('div');
        div.className = "alert alert-danger";
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div, search);

    }



    // if user clear the search bar clear the previous data from ui
    clearProfile() {
        this.profile.innerHTML = '';
    }
}