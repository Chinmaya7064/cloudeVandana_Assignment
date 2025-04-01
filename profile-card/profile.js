const toggleEdit = document.getElementById("toggle-edit");
const profileCard = document.getElementById("profile-card");
const fileInput = document.getElementById("file-input");
const profileImg = document.getElementById("profile-img");
const nameInput = document.getElementById("profile-name");
const designationInput = document.getElementById("profile-designation");
const bioInput = document.getElementById("profile-bio");

const defaultName = "Chinmaya";
const defaultDesignation = "Frontend Developer";
const defaultBio = "A web development enthisiastic person.";

let isEditing = false;


// Toggle Edit/Save 
toggleEdit.addEventListener("click", () => {
    isEditing = !isEditing;

    if (isEditing) {
        profileCard.classList.add("editable");
        toggleEdit.classList.replace("fa-edit", "fa-save");
        nameInput.removeAttribute("readonly");
        designationInput.removeAttribute("readonly");
        bioInput.removeAttribute("readonly");
    } else {
        if (nameInput.value.trim() === "") nameInput.value = defaultName;
        if (designationInput.value.trim() === "") designationInput.value = defaultDesignation;
        if (bioInput.value.trim() === "") bioInput.value = defaultBio;

        profileCard.classList.remove("editable");
        toggleEdit.classList.replace("fa-save", "fa-edit");
        nameInput.setAttribute("readonly", true);
        designationInput.setAttribute("readonly", true);
        bioInput.setAttribute("readonly", true);

        localStorage.setItem("profileName", nameInput.value);
        localStorage.setItem("profileDesignation", designationInput.value);
        localStorage.setItem("profileBio", bioInput.value);
    }
});


// Upload Image
fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImg.innerHTML = `<img src="${e.target.result}" width="100" height="100" style="border-radius: 50%;">`;
            localStorage.setItem("profileImage", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});


// Local strorage
window.onload = () => {
    nameInput.value = localStorage.getItem("profileName") || defaultName;
    designationInput.value = localStorage.getItem("profileDesignation") || defaultDesignation;
    bioInput.value = localStorage.getItem("profileBio") || defaultBio;
};


