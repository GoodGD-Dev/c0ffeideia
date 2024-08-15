document.getElementById('ideaForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário

  const nome = document.getElementById('nome').value;
  const ideia = document.getElementById('ideia').value;

  // Informações do Trello
  const key = 'd292dc7a396e5c79da1b135df6acf058';
  const token = 'ATTA0eb8d0e77c8f5eeca30b45e20316267b95640a393bfe0322bd22ba36d96e121421D2A599';
  const idLista = '66bdf2fd363c77d4e087ba37';

  // Cria o card
  fetch(`https://api.trello.com/1/cards?key=${key}&token=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `Ideia de ${nome}`,
      desc: ideia,
      idList: idLista
    })
  })
    .then(response => response.json())
    .then(data => {
      alert('Ideia enviada com sucesso!');
      console.log(data);
    })
    .catch(error => {
      alert('Ocorreu um erro ao enviar a ideia.');
      console.error('Erro:', error);
    });
});
