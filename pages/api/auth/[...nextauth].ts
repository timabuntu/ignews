import GitHubProvider from 'next-auth/providers/github';

providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
];
