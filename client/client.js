const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Constructor for FormData
    const formData = new FormData(form)
    const name = formData.get("name")
    const content = formData.get("content")

    const tweet = {
        name: name,
        content: content,
    }

    console.log(tweet);  
})
