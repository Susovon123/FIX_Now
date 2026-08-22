const openArrivalModal = document.getElementById("openArrivalModal");
const arrivalModal = document.getElementById("arrivalModal");
const closeArrivalModal = document.getElementById("closeArrivalModal");


// OPEN MODAL
openArrivalModal.addEventListener("click", function () {

    arrivalModal.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
});


// CLOSE MODAL
closeArrivalModal.addEventListener("click", function () {

    arrivalModal.classList.add("hidden");

    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
});


// CLICK OUTSIDE MODAL
arrivalModal.addEventListener("click", function (event) {

    if (event.target === arrivalModal) {

        arrivalModal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("overflow-hidden");
    }
});



  const methodModal = document.getElementById('methodModal');
  const proceedToPaymentBtn = document.getElementById('proceedToPaymentBtn');
  const closeTriggers = document.querySelectorAll('#methodModal [data-close]');
  const methodOptions = document.querySelectorAll('.method-option');
  const selectedMethodDisplay = document.getElementById('selectedMethodDisplay');
  const selectedMethodIcon = document.getElementById('selectedMethodIcon');
  const selectedMethodLabel = document.getElementById('selectedMethodLabel');
 
  const iconSvgMap = {
    upi: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"></path></svg>',
    cod: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="3"></circle></svg>',
  };
 
  function openMethodModal() {
    methodModal.classList.remove('method-hidden');
    document.body.style.overflow = 'hidden';
  }
 
  function closeMethodModal() {
    methodModal.classList.add('method-hidden');
    document.body.style.overflow = '';
  }
 
  proceedToPaymentBtn.addEventListener('click', openMethodModal);
  closeTriggers.forEach(el => el.addEventListener('click', closeMethodModal));
 
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !methodModal.classList.contains('method-hidden')) {
      closeMethodModal();
    }
  });
 
  function selectMethod(chosen) {
    const method = chosen.dataset.method;
 
    // Update all cards that reference this same method (UPI appears twice)
    methodOptions.forEach(opt => {
      const radio = opt.querySelector('.method-radio');
      const isMatch = opt.dataset.method === method;
 
      if (isMatch) {
        opt.classList.remove('border-[var(--color11)]', 'border-[var(--color-17)]');
        opt.classList.add('border-[var(--color4)]');
        if (opt.classList.contains('border-2') || opt === chosen.closest('.flex.flex-col.gap-3.mb-6')?.querySelector('.method-option')) {
          opt.classList.add('bg-[var(--color-14)]');
        }
        radio.classList.remove('border-[var(--color-17)]', 'border-[var(--color11)]');
        radio.classList.add('border-[var(--color4)]');
        radio.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[var(--color4)]"></span>';
      } else {
        opt.classList.remove('border-[var(--color4)]', 'bg-[var(--color-14)]');
        opt.classList.add('border-[var(--color11)]');
        radio.classList.remove('border-[var(--color4)]');
        radio.classList.add('border-[var(--color-17)]');
        radio.innerHTML = '';
      }
    });
 
    // Show it on the page
    selectedMethodDisplay.classList.remove('hidden');
    selectedMethodDisplay.classList.add('flex');
    selectedMethodLabel.textContent = chosen.dataset.label;
    if (iconSvgMap[method]) selectedMethodIcon.innerHTML = iconSvgMap[method];
 
    closeMethodModal();
  }
 
  methodOptions.forEach(opt => {
    if (!opt.classList.contains('pointer-events-none')) {
      opt.addEventListener('click', () => selectMethod(opt));
    }
  });