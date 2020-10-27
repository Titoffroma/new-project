import boxGallery from "./functionalJS/galItems";

import {
  parentGalleryEl,
  currentIndex,
  onGalleryCreate,
} from "./functionalJS/gallItemsCreate";

import modalOperate from "./functionalJS/openModal";

parentGalleryEl.insertAdjacentHTML("beforeend", onGalleryCreate(boxGallery));

parentGalleryEl.addEventListener("click", modalOperate.onOpenModal);

modalOperate.refs.backDrop.addEventListener("click", modalOperate.onCloseModal);
