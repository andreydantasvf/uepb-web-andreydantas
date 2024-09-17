document.getElementById('searchBtn').addEventListener('click', () => {
  const cep = document.getElementById('cepInput').value;

  if (validateCEP(cep)) {
    toggleLoading(true);
    fetchCEP(cep);
  } else {
    displayResult('CEP inválido. Verifique e tente novamente.');
  }
});

const validateCEP = (cep) => {
  return /^[0-9]{8}$/.test(cep);
};

const fetchCEP = (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        displayResult('CEP não encontrado.');
      } else {
        displayResult(`
          <strong>Logradouro:</strong> ${data.logradouro} <br>
          <strong>Bairro:</strong> ${data.bairro} <br>
          <strong>Cidade:</strong> ${data.localidade} <br>
          <strong>Estado:</strong> ${data.uf}
        `);
      }
    })
    .catch(() => displayResult('Erro ao consultar o CEP.'))
    .finally(() => toggleLoading(false));
};

const displayResult = (message) => {
  document.getElementById('result').innerHTML = message;
};

const toggleLoading = (isLoading) => {
  const button = document.getElementById('searchBtn');
  if (isLoading) {
    button.disabled = true;
    button.innerHTML = 'Carregando...';
  } else {
    button.disabled = false;
    button.innerHTML = 'Consultar';
  }
};
