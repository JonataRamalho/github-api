import { Layout, Profile, Repositories } from "./components";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
};

export default App;
