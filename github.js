class Github {
    constructor() {
        this.client_id = 'fba514fbb98b3c97617b';
        this.client_secret = 'd0e14ae0623d030ccb822c78a8cad7f4d6f7479b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        return {
            profile: profile
        }
    }
}