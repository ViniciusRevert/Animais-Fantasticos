function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-menu='suave'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function iniAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion  dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAcordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}
iniAccordion();

function initScroll() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // opcional para scrollSuave
    // const topo = section.offsetTop;
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth",
    //   });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}

initScroll();

function initAnimaScroll() {
  const secoes = document.querySelectorAll("[data-anime='scroll']");
  const animacaoSuave = window.innerHeight * 0.6;
  if (secoes.length) {
    function animaScroll() {
      secoes.forEach((secao) => {
        const topSecao = secao.getBoundingClientRect().top;
        const anima = topSecao - animacaoSuave < 0;
        if (anima) {
          secao.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();

const formulario = document.getElementById("meuFormulario")
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
const nome = document.getElementById("nome").value;
const descricao = document.getElementById("descricao").value;
console.log("nome",nome)
console.log("descricao",descricao)

const mensagem = document.getElementById("mensagem");
mensagem.textContent = "Dados enviados com sucesso !"
});


