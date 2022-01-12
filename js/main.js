// prompt, input va DOMdan olingan har qanday matn string formatida bo'ladi

// undefined - qiymati berilmagan
// null - yo'qlik
// NaN - Not a Number

// Booleanda false qaytaradigan qiymatlar: 0, '', false, undefined, null, NaN


/* var userNumber = Number(prompt('Son kiriting'));

if (userNumber % 3 === 0 && userNumber % 5 === 0) {
  console.log('FizzBuzz');
} else if (userNumber % 3 === 0) {
  console.log('Fizz');
} else if (userNumber % 5 === 0) {
  console.log('Buzz');
} else {
  console.log(userNumber);
}
 */


var elFizzBuzzForm = document.querySelector('.fizzbuzz-form');
var elFizzBuzzInput = elFizzBuzzForm.querySelector('.fizzbuzz-form__input');
var elResult = elFizzBuzzForm.querySelector('.fizzbuzz-form__result');

var checkFizzBuzz = function (number) {
  var result = '';

  if (number % 3 === 0) {
    result += 'Fizz';
  }

  if (number % 5 === 0) {
    result += 'Buzz';
  }

  return result || number;
};

if (elFizzBuzzForm) {
  elFizzBuzzForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var output = checkFizzBuzz(Number(elFizzBuzzInput.value));

    elResult.textContent = output;
  });
}


var elTabsFeatures = document.querySelector('.tabs-features');
var elsTabsFeaturesItem = elTabsFeatures.querySelectorAll('.tabs-features__item');
var elsTabsFeaturesLink = elTabsFeatures.querySelectorAll('.tabs-features__link');
var elsPanel = document.querySelectorAll('.features__panel');


if (elsTabsFeaturesLink.length > 0) {
  elsTabsFeaturesLink.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();

      elsTabsFeaturesItem.forEach(function (item) {
        item.classList.remove('tabs-features__item--active');
      });

      link.parentElement.classList.add('tabs-features__item--active');

      elsPanel.forEach(function (panel) {
        panel.classList.remove('features__panel--active')
      });

      document.querySelector(link.getAttribute('href')).classList.add('features__panel--active');
    });
  });
}
