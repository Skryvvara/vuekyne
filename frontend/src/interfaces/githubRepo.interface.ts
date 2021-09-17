export interface GithubRepository {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    languages?: any;
    fork: boolean;
    url: string;
    created_at: Date;
    updated_at: Date;
    homepage: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    license: null;
    forks: number;
    open_issues: number;
    watchers: number;
}