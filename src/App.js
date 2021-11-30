import { Layout, Profile, Repositories } from "./components";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <div>Nenhum usuário pesquisado</div>
      )}
    </Layout>
  );
};

export default App;
