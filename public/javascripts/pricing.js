const pricingBtn = Array.from(document.querySelectorAll('[id$="-plans-btn"]'));

// Store classes of monthly and yearly button for button toggling purpose
const [moBtn, yrBtn] = pricingBtn
const moBtnClasses = Array.from(moBtn.classList)
const yrBtnClasses = Array.from(yrBtn.classList)

const priceUnitElems = document.querySelectorAll('span.price-unit.text-base.font-medium.text-gray-500')
const tierElems = document.querySelectorAll('[id$="-price"]')

fetch('/api/pricing')
.then(response => {
  result = response.json();
  return result;
})
.then(result => {
  priceList = result
})
.then(() => {
// Initialize monthly price from api/pricing during initial load (incase if api/pricing is updated without updating HTML)
[...tierElems].forEach((tierElem) => {
  const priceObject = priceList.find(({tier}) => tierElem.id.includes(tier) );
  tierElem.innerHTML = priceObject.monthlyPrice;
  });
})

pricingBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    let period = '/mo';
    let pricePeriod = 'monthlyPrice';

    // Toggle monthly button on
    moBtn.className = ""; 
    yrBtn.className = ""; 
    [...yrBtnClasses].forEach((cls) => { yrBtn.className += cls + " "});
    [...moBtnClasses].forEach((cls) => { moBtn.className += cls + " "});


    if (btn.id === 'annual-plans-btn') {
      period = '/yr';
      pricePeriod = 'annualPrice';

      // Toggle yearly button on
      moBtn.className = ""; 
      yrBtn.className = ""; 
      [...yrBtnClasses].forEach((cls) => { moBtn.className += cls + " "});
      [...moBtnClasses].forEach((cls) => { yrBtn.className += cls + " "});

    };

    // Toggle '/mo' and '/yr' text
    [...priceUnitElems].forEach((unit) => {
      unit.innerHTML = period;
    });

    // Toggle monthly and annual price
    [...tierElems].forEach((tierElem) => {
      const priceObject = priceList.find( ({tier}) => tierElem.id.includes(tier) );
      tierElem.innerHTML = priceObject[pricePeriod];
    });

  });
});