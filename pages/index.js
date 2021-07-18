import React from "react";
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
    <Box as="aside">
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
  const [comunidades, setComunidades] = React.useState([
    {
      id: "123",
      title: "eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
  ]);

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
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(event) {
                event.preventDefault();
                const dadosDoForm = new FormData(event.target);

                console.log("Campo: ", dadosDoForm.get("title"));
                console.log("Campo: ", dadosDoForm.get("image"));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get("title"),
                  image: dadosDoForm.get("image"),
                };
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
              }}
            >
              <div>
                <input
                  placeholder="Qual será o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual será o nome da sua comunidade"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </main>

        <section
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>

            <ul>
              {comunidades.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={`/users/${item.title}`}>
                      <img src={item.image} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({githubFavUsers.length})
            </h2>

            <ul>
              {githubFavUsers.map((user) => {
                return (
                  <li key={user}>
                    <a href={`/users/${user}`}>
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
