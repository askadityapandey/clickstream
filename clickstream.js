function generateShareButton(platform, url) {
    // Error handling for invalid platforms or URLs
    if (!platform || !url) {
      console.error("Missing platform or URL argument");
      return;
    }
  
    // Base structure for the button element
    const button = document.createElement("a");
    button.classList.add("social-share-button"); // Add a CSS class for styling
  

    switch (platform.toLowerCase()) {
      case "facebook":
        button.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        button.target = "_blank"; // Open in new tab
        button.innerText = "Share on Facebook";
        break;
      case "twitter":
        button.href = `https://twitter.com/intent/tweet?url=${url}`;
        button.target = "_blank";
        button.innerText = "Share on Twitter";
        break;
      case "linkedin":
        button.href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
        button.target = "_blank";
        button.innerText = "Share on LinkedIn";
        break;
      default:
        console.warn(`Unsupported platform: ${platform}`);
    }
  
    return button;
  }
  
  // Example usage
  const facebookButton = generateShareButton("facebook", "https://www.example.com/content");
  document.body.appendChild(facebookButton);

  