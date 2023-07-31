const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createImages = (images) => {
  const gallery = document.querySelector(".gallery");
  gallery.style.display = "flex";
  gallery.style.width = "1200px";
  gallery.style.margin = "0 auto";
  gallery.style.padding = "0";
  gallery.style.listStyle = "none";
  gallery.style.gap = "20px";

  const createdImages = images
    .map(
      (image) =>
        `<li class = "gallery-item" style = "width: 380px; height: 400px;"><img style="display: block; width:100%; object-fit: cover; height: 100%;" src = ${image.url} alt = ${image.alt}></li>`
    )
    .join("");

  gallery.insertAdjacentHTML("afterbegin", createdImages);
};
createImages(images);
