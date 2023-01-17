(() => {
    const refs = {
      openModalBtn1: document.querySelector("[data-modal-open-1]"),
      openModalBtn2: document.querySelector("[data-modal-open-2]"),
      openModalBtn3: document.querySelector("[data-modal-open-3]"),
      closeModalBtn0: document.querySelector("[data-modal-close-0]"),
      modal: document.querySelector("[data-modal-0]"),
    };
  
    refs.openModalBtn1.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.openModalBtn3.addEventListener("click", toggleModal);
    refs.closeModalBtn0.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();