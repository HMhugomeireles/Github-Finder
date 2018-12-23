class Github {
    constructor() {
        this.client_id = 'a2541a04c5c88d35a9a3';
        this.client_secret = 'e32606a1f1447eeeef3237e5615407350299b708';
        this.repo_count = 5;
        this.repo_sort = 'created asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();
    
        return {
          profile,
          repos
        }
      }
    }