var resultValues = document.getElementById('resultValues');

var simulateButton = document.getElementById('simulateButton');
simulateButton.type = 'button';

function financing() {
  var termYear = document.getElementById('termYear').valueAsNumber;
  var termMonth = document.getElementById('termMonthField').value = termYear * 12;

  var interestYear = document.getElementById('interestYear').valueAsNumber;
  monthlyInterest = (1 + interestYear) ** (1 / 12) - 1;
  document.getElementById('interestMonthField').value = monthlyInterest;

  var initialValue = document.getElementById('initialValue').valueAsNumber;
  var amortValue = initialValue / termMonth;
  var accruedInterest = [];

  for (i = 0; i <= (termMonth - 1); i++) {
    var interestValue = (initialValue - (i * amortValue)) * monthlyInterest;
    var interestTotal = (amortValue + interestValue);
    accruedInterest.push(+interestValue);
  }
  document.getElementById('accruedInterestField').value = accruedInterest.reduce(function (total, num) {
    return total + num;
  }).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });

  for (i = 0; i <= 4; i++) {
    var interestValue = (initialValue - (i * amortValue)) * monthlyInterest;
    var interestTotal = (amortValue + interestValue);

    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' +
      (i + 1) +
      '</td>' +
      '<td>' +
      amortValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }) +
      '</td>' +
      '<td>' +
      interestValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }) +
      '</td>' +
      '<td>' + interestTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }) +
      '</td>';
    resultValues.appendChild(tr);
  }
}

// SUBMIT
simulateButton.addEventListener('click', function () {
  resultValues.innerHTML = '';
  financing();
});
