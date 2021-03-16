let resultValues = document.getElementById('resultValues');
let simulateButton = document.getElementById('simulateButton');
simulateButton.type = 'button';

function financing() {
  let termYear = document.getElementById('termYear').valueAsNumber;
  let termMonth = (document.getElementById('termMonthField').value =
    termYear * 12);

  let interestYear = document.getElementById('interestYear').valueAsNumber;
  monthlyInterest = (1 + interestYear) ** (1 / 12) - 1;
  document.getElementById('interestMonthField').value = monthlyInterest;

  let initialValue = document.getElementById('initialValue').valueAsNumber;
  let amortValue = initialValue / termMonth;

  for (i = 0; i < 5; i++) {
    let interestValue = (initialValue - i * amortValue) * monthlyInterest;
    let interestTotal = amortValue + interestValue;
    let tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' +
      (i + 1) +
      '</td>' +
      '<td>' +
      amortValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      '</td>' +
      '<td>' +
      interestValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      '</td>' +
      '<td>' +
      interestTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      '</td>';
    resultValues.appendChild(tr);
  }

  let accruedInterest = 0;
  for (i = 0; i < termMonth; i++) {
    let interestValue = (initialValue - i * amortValue) * monthlyInterest;
    accruedInterest += interestValue;
  }
  document.getElementById(
    'accruedInterestField'
  ).value = accruedInterest.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// submit:
simulateButton.addEventListener('click', function () {
  resultValues.innerHTML = '';
  financing();
});
