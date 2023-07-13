import { NuxtAuthHandler } from '#auth';
import GithubProvider from 'next-auth/providers/github';

const runtimeConfig = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: runtimeConfig.secret,
  pages: {
    signIn: '/'
  },
  providers: [
    // @ts-expect-error
    GithubProvider.default({
      clientId: runtimeConfig.client_id,
      clientSecret: runtimeConfig.client_secret,
    }),
  ],
});
