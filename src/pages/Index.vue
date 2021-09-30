<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/livre1.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <div class="content-center brand">
            <img class="n-logo" src="img/grimoire.png" alt="Logo du logiciel Grimoire" />
            <h1 class="h1-seo">Grimoire</h1>
            <h3>Écrire devient un jeu d'enfant.</h3>
          </div>
        </div>
      </div>
    </div>

    <p class="coming-soon">Coming Soon</p>


    <!-- Container avec les écrans + logos -->
    <div class="main">
      <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container" style="margin-top: -27vh">
                <img src="img/ordi.png" alt="Ordinateur avec le logiciel Grimoire" />
              </div>
              <div class="hero-images-container-1">
                <img src="img/grimoire.png" alt="Logo du logiciel Grimoire" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/mobile.png" alt="Smartphone avec l'application Grimoire" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Qu'est-ce-que Grimoire?</h2>
            <h5 class="description">
              Grimoire est un logiciel d'aide à la rédaction de roman pour écrivain débutant et confirmé.
              Notre logiciel se base sur trois grands piliers. L'écriture, pour pouvoir rédiger vos histoires quand vous voulez et où vous voulez.
              L'organisation, pour ne perdre aucune bonne idée et pour se retrouver dans les histoires complexes.
              Et la simplicité, car l'écriture ne doit pas être sorcier.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/mo1.png')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "There is no friend as loyal as a book."
                  <br />
                  <br />
                  <small>-Ernest Hemingway</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/mo2.png')"
              ></div>
            </div>
            <div class="col-md-5" style="text-align: justify">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/mo3.png')"
              ></div>
              <p style="font-size: 25px">
                Vous avez dit trois piliers ?
              </p>
              <p>
                Premier point : l'écriture. Comme tout logiciel d'aide à l'écriture,
                Grimoire propose un éditeur de texte complet et adapté.
                Sont intégrés directement dans le logiciel, un dictionnaire permettant de retrouver
                vos mots perdus ainsi que d'un système de commentaires pour ne rien oublier!
                Besoin de se concentrer ? Le mode focus est là pour vous aider: affichez votre document
                en cours en plein écran et retirez l'accès à toutes les fonctionnalités pour vous concentrer sur l'essentiel.
              </p>
              <p>
                Notre deuxième point est l'organisation. Grâce à Grimoire, terminé l'utilisation
                de dizaines d'applications en simultané ! Retrouvez par exemple dans le logiciel une fonction "Fiche personnage" où il sera
                possible de créer et développer les protagonistes de vos histoires
              </p>
              <p>
                Le troisième et dernier point est la simplicité. En effet Grimoire se veut simple d'utilisation afin de permettre aux écrivains confirmés comme débutants
                de se lancer dans l'aventure qu'est l'écriture ! Avec son design simple, et personnalisable, organisez vous facilement et travaillez plus efficacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="section section-team text-center">
      <div class="container">
        <p class="title" style="font-size: 25px">Qui sommes nous?</p>
        <p class="description">Ecrivains et lecteurs, Grimoire est une équipe de six étudiants passionnés de littérature et d'informatique.</p>
      <div
        class="image-container"
        style="height: 500px; background-image: url('img/groupe.jpg'); background-size: cover;"
      ></div>
        <div class="team" style="padding-top: 50px">
          <div class="row">
            <div class="col-md-2">
              <div class="team-player">
                <img
                  src="img/Arthur.jpg"
                  alt="Photo de profil du membre Arthur de l'équipe Grimoire"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Arthur</h4>
                <a href="https://www.linkedin.com/in/arthur-lang-ab9b45156/" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="https://github.com/LangArthur" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="team-player">
                <img
                  src="img/Lucas.jpg"
                  alt="Photo de profil du membre Lucas de l'équipe Grimoire"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Lucas</h4>
                <a href="https://www.linkedin.com/in/lucas-tabis-791921154/" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="https://github.com/ltabis" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="team-player">
                <img
                  src="img/Dylan.jpg"
                  alt="Photo de profil du membre Dylan de l'équipe Grimoire"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Dylan</h4>
                <a href="https://www.linkedin.com/in/dylan-santos-81547a1b4/" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="https://github.com/SantosDylan" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="team-player">
                <img
                  src="img/Julie.jpg"
                  alt="Photo de profil du membre Julie de l'équipe Grimoire"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Julie</h4>
                <a href="https://www.linkedin.com/in/julie-pecci/" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="https://github.com/Spacci" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="team-player">
                <img
                  src="img/Matteo.jpg"
                  alt="Photo de profil du membre Matteo de l'équipe Grimoire"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Mattéo</h4>
                <a href="https://www.linkedin.com/in/mattéo-volpi/" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="https://github.com/matteovol" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
            <div class="col-md-2">
              <div class="team-player">
                <img
                  src="img/Elian.jpg"
                  alt="Photo de profil du membre Ellian de l'équipe Grimoire"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Elian</h4>
                <a href="https://www.linkedin.com/in/elian-nicaise-6a5085162/" class="btn btn-primary btn-icon btn-round" target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="https://github.com/Misteur54" class="btn btn-primary btn-icon btn-round" target="_blank"><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="section" style="background-image: url('img/livre2.jpg'); background-size: cover; background-position: top center">

      <div class="container" style="background-color: #2c2c2c; width: 30%; padding: 40px; padding-bottom: 15px">
        <p class="title text-center"  style="color: white; font-size: 30px">Besoin de nous contacter?</p>
        <p class="text-center" style="color: white">Une question, une suggestion ou juste envie d'échanger ? N'hésitez pas à nous envoyer un mail sur
          grimoire-team@outlook.com ou un message sur nos réseaux sociaux!</p>
      </div>

      <div class="text-center">
        <a href="https://www.facebook.com/GrimoireFr" class="btn btn-primary btn-icon btn-round" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/projet_grimoire" class="btn btn-primary btn-icon btn-round" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/grimoire/" class="btn btn-primary btn-icon btn-round" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>


  </div>
</template>


<script>
import { Button } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button
  },
  data() {
    return {
    };
  }
};
</script>


<style>

.brand .n-logo {
  max-width: none !important;
  width: 200px;
}

.coming-soon {
  text-align: center;
  padding: 60px 0px;
  color: rgb(255, 202, 68);
  font-size: 77px;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}

</style>
