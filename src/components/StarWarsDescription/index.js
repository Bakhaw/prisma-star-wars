import React from 'react';
import styled from 'styled-components';

import DescriptionImg from '../../assets/r2d2_c3p0.jpg';

const Wrapper = styled.div`
  width: 60%;
  padding: 50px 0;
  margin: auto;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    line-height: 25px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 35px;
`;

const Image = styled.img`
  height: 300px;
  max-width: 100%;
  margin-right: 20px;
`;

const ListItem = styled.li`
  text-indent: -5px;
  margin: 15px 0;
  &::before {
    content: '-';
  }
`;

export default function StarWarsDescription() {
  return (
    <Wrapper>
      <Title>A long time ago, in a galaxy far, far away ...</Title>
      <Row>
        <Image alt='Image with R2D2 and C3P0' src={DescriptionImg} />
        <p>
          La Guerre des étoiles (titre original Star Wars, soit littéralement
          Guerres Stellaires ) est une épopée cinématographique de
          science-fiction créée par George Lucas, considérée comme un élément
          phare du space opera. Prévue à la base pour être une suite de trois
          trilogies (triptyque), Lucas fut contraint, par manque de moyens
          techniques, de commencer par la seconde trilogie (l'Épisode IV - Un
          nouvel espoir) en 1977. La série connut un succès phénoménal partout
          dans le monde et engendra une très importante communauté de fans. Sans
          prétendre expliquer le succès du premier film (s'il y avait une
          recette, cela se saurait), on peut, toutefois, noter que, malgré le
          manque de moyens (le budget était relativement modeste, les acteurs
          presque inconnus) :
        </p>
      </Row>
      <ul>
        <ListItem>
          Il fait appel à des références connues et appréciées des jeunes de
          l'époque : films de cape et d'épée, westerns, péplums, contes de fées
          et même le Seigneur des Anneaux de J.R.R. Tolkien ; cette œuvre
          n'apparaît pas comme de la science-fiction au sens strict mais plutôt
          comme du space fantasy.
        </ListItem>
        <ListItem>
          Les effets spéciaux, supervisés par Ken Ralston, étaient réellement
          novateurs, avec notamment la participation de John Dykstra (qui a
          également participé au premier film de Star Trek), qui avait développé
          une nouvelle manière d'animer les maquettes des vaisseaux en
          coordonnant leurs mouvements par ordinateur (Dykstraflex).
        </ListItem>
        <ListItem>
          Le film a développé un univers cohérent, avec, comme préoccupation
          constante, autant la création d'une ambiance que l'action proprement
          dite.
        </ListItem>
        <ListItem>
          La musique, composée par John Williams, introduit des thèmes
          récurrents et des leitmotivs (procédé classique mais renforçant la
          cohérence).
        </ListItem>
      </ul>
    </Wrapper>
  );
}
