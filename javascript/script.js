document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const cpfInput = document.getElementById("cpf");
  const telefoneInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  // Função para formatar CPF (000.000.000-00)
  cpfInput?.addEventListener("input", () => {
    let value = cpfInput.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpfInput.value = value;
  });

  // Função para formatar telefone ((00) 00000-0000)
  telefoneInput?.addEventListener("input", () => {
    let value = telefoneInput.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
    telefoneInput.value = value;
  });

  // Função para formatar CEP (00000-000)
  cepInput?.addEventListener("input", () => {
    let value = cepInput.value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    cepInput.value = value;
  });

  // Validação e envio do formulário
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const tipo = form.tipo.value;

    if (!nome || !email || !tipo) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    alert(`🎉 Obrigado, ${nome}!\nSeu cadastro como ${tipo} foi enviado com sucesso!`);
    form.reset();
  });

  // Adiciona destaque no menu ativo
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("ativo");
    }
  });
});


