document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");
  const msg  = document.getElementById("mensagem");

  // ===== Máscaras =====
  const cpf = document.getElementById("cpf");
  if (cpf) cpf.addEventListener("input", () => {
    cpf.value = cpf.value.replace(/\D/g,"")
      .replace(/(\d{3})(\d)/,"$1.$2")
      .replace(/(\d{3})(\d)/,"$1.$2")
      .replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  });

  const tel = document.getElementById("telefone");
  if (tel) tel.addEventListener("input", () => {
    tel.value = tel.value.replace(/\D/g,"")
      .replace(/(\d{2})(\d)/,"($1) $2")
      .replace(/(\d{5})(\d{4})$/,"$1-$2");
  });

  const cep = document.getElementById("cep");
  if (cep) cep.addEventListener("input", () => {
    cep.value = cep.value.replace(/\D/g,"")
      .replace(/(\d{5})(\d)/,"$1-$2");
  });

  // ===== Envio + mensagem =====
  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // força a validação nativa antes de exibir sucesso
      if (!form.checkValidity()){
        form.reportValidity();
        return;
      }

      msg.hidden = false;                                // mostra
      msg.textContent = "Cadastro enviado com sucesso! ✅";
      form.reset();
      setTimeout(() => (msg.hidden = true), 3000);       // esconde em 3s
    });
  }
});
