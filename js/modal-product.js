(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product-open]"),
    closeModalBtn: document.querySelector("[data-modal-product-close]"),
    modal: document.querySelector("[data-product-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-product-open]"),
    closeModalBtn: document.querySelector("[data-menu-product-close]"),
    modal: document.querySelector("[data-menu-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();