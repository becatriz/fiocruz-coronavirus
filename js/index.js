let count = 0

function loadingModal() {
  document.getElementById("openModal").style.visibility = "visible"

  document.getElementById("modal-01").innerHTML = `
  <p class="modal__title">Objetivos de aprendizagem</p>
  <p class="modal__description">
    • Reconhecer os direitos à vida e à saúde como direitos
    essenciais da população privada de liberdade e dos trabalhadores
    do sistema prisional, no enfrentamento da pandemia; <br />
    • Entender a composição da população carcerária e a organização
    do sistema prisional brasileiro; <br />
    • Compreender o comportamento das doenças respiratórias no
    ambiente prisional.
  </p>`

  document.getElementById("modal-02").innerHTML = `
  <p class="modal__title">Ementa</p>
  <p class="modal__description">
  Direitos humanos e à saúde no enfrentamento da pandemia. Caracterização da população carcerária e da organização do sistema prisional. Doenças respiratórias prevalentes, com ênfase na COVID-19, em ambiente prisional e suas consequências para a população privada de liberdade e para os trabalhadores. Experiências exitosas e legislação para a COVID-19.
  </p>`

  document.getElementById("modal-03").innerHTML = `
  <p class="modal__title">Objetivos de aprendizagem</p>
  <p class="modal__description">
  •	Reconhecer a importância das ações de vigilância para prevenção e controle de síndromes gripais e respiratórias no sistema prisional;<br />
  •	Entender as boas práticas relacionadas à investigação de surtos epidêmicos;<br />
  •	Entender as medidas de contenção e mitigação de um surto de COVID-19.
  </p>`

  document.getElementById("modal-04").innerHTML = `
  <p class="modal__title">Ementa</p>
  <p class="modal__description">
  Vigilância de Síndrome Gripal e Síndrome Respiratória Aguda Grave (SRAG). Investigação de surtos. Medidas para contenção e mitigação do surto por COVID-19. Medidas de biossegurança, de mitigação e sanitárias no ambiente prisional. Experiências exitosas e legislação para a COVID-19.
  </p>`
}

function closeModal(modal) {
  count += 1

  document.getElementById("openModal").style.visibility = "visible"

  const node = document.getElementById(modal)

  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }

  if (count === 4) {
    document.getElementById("openModal").style.visibility = "hidden"
    history.go(0)
    count = 0
  }
}
