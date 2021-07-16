import Box from "./../src/components/Box";
import MainGrid from "./../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "./../src/components/ProfileRelations";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "./../lib/AlurakutCommons";

const githubFavUsers = ["yogmel", "omariosouto", "PriTheodoro"];
const myGithubUser = "brunagil";

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "10px" }}
      />
      <hr />
      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <section className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={myGithubUser} />
        </section>
        <main className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Seja bem vinda</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </main>

        <section
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({githubFavUsers.length})
            </h2>

            <ul>
              {githubFavUsers.map((user) => {
                return (
                  <li>
                    <a href={`/users/${user}`} key={user}>
                      <img src={`https://github.com/${user}.png`} />
                      <span>{user}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </section>
      </MainGrid>
    </>
  );
}
