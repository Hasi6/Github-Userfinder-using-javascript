class Github {
    constructor() {
        this.client_id = 'fba514fbb98b3c97617b';
        this.client_secret = 'd0e14ae0623d030ccb822c78a8cad7f4d6f7479b';

    }

    async getUser(user) {

        // get user details
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?&sort='created: asc'&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // assign profile data to variable
        const profileData = await profileResponse.json();

        // assign Repos to variable
        const repos = await repoResponse.json();

        return {
            profile: profileData,
            repos: repos
        }
    }
}