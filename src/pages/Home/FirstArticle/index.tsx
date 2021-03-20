import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Container,
  TitleContent,
  FirstText,
  GrandText,
  ArticleContent,
  TextArticle,
} from "./styles";

const FirstArticle: React.FC = () => {
  return (
    <>
      <Container>
        <TitleContent>
          <FirstText>nasa api's</FirstText>
          <GrandText>Democratizando as API'S da NASA</GrandText>
        </TitleContent>
        <ArticleContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <TextArticle>
                Você ja ouviu falar em API's? São serviços de comunicação entre
                um usuário e um software, trazendo facilidade e praticidade
              </TextArticle>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <TextArticle>
                Já imaginou que as informações originais da NASA estão
                disponíveis para todos nós? O unico problema é que essas
                informações não são acessíveis
              </TextArticle>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <TextArticle>
                O meu objetivo é facilitar a compreensão dos dados por meio
                dessa aplicação.
              </TextArticle>
            </Grid>
          </Grid>
        </ArticleContent>
      </Container>
    </>
  );
};

export default FirstArticle;
