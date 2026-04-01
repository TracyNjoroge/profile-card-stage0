const timeEl = document.querySelector("#time-value");
const avatarImgEl = document.querySelector(".profile-user-avatar");
const fileInputEl = document.createElement("input");

fileInputEl.type = "file";
fileInputEl.accept = "image/*";

const setAvatar = (source) => {
  if (typeof source === "string") {

    avatarImgEl.src = source;
  } else if (source instanceof File) {
    const blobUrl = URL.createObjectURL(source);
    avatarImgEl.src = blobUrl;
  }
}

fileInputEl.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0]

  if (selectedFile) {
    setAvatar(selectedFile);
  }
})

avatarImgEl.addEventListener("click", () => {
  fileInputEl.click();
})

setAvatar("/assets/images/avatar.jpg");