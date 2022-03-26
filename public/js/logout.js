const logoutBtn = document.getElementById("logout");

const handleLogout = async (event) => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application.json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Oops! There was an issue with logging you out.");
  }
};

logoutBtn.addEventListener("click", handleLogout);
