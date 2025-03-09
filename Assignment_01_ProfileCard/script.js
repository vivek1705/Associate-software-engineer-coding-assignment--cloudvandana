document.addEventListener("DOMContentLoaded", function () {
  // Set images
  document.getElementById("coverPic").src = profileData.coverPic;
  document.getElementById("profilePic").src = profileData.profilePic;

  // Set name
  document.getElementById("name").textContent = profileData.name;
  
  // Set roles with typewriter effect
  const rolesContainer = document.getElementById("roles");
  let roleIndex = 0;
  let charIndex = 0;
  let currentRole = profileData.roles[roleIndex];
  
  function typeRole() {
    if (charIndex < currentRole.length) {
      rolesContainer.textContent += currentRole.charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100); // Adjust typing speed 
    } else {
      setTimeout(eraseRole, 1000); // Delay before erasing the role
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      rolesContainer.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, 50); // Adjust erasing speed 
    } else {
      roleIndex = (roleIndex + 1) % profileData.roles.length;
      currentRole = profileData.roles[roleIndex];
      setTimeout(typeRole, 500); // Delay before typing the next role
    }
  }
  typeRole(); // Start the typewriter effect

  // Set description
  document.getElementById("description").textContent = profileData.description; 

  // profile link 
  document.getElementById("view-profile").href = profileData.profileLink;

  // CV link
  const viewCvButton = document.getElementById("view-cv");
  viewCvButton.href = profileData.cvLink;

  // Location, Mobile, and Email
  document.getElementById("location").textContent = profileData.location;
  document.getElementById("phone").textContent = profileData.mobile;
  document.getElementById("email").textContent = profileData.email;

  // social links
  document.getElementById("linkedin").href = profileData.socialLinks.linkedin;
  document.getElementById("twitter").href = profileData.socialLinks.twitter;
  document.getElementById("github").href = profileData.socialLinks.github;
  document.getElementById("telegram").href = profileData.socialLinks.telegram;
  document.getElementById("instagram").href = profileData.socialLinks.instagram;
  document.getElementById("whatsapp").href = profileData.socialLinks.whatsapp;

});
