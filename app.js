document.getElementById('problemSubmissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        problem: document.getElementById('problem').value,
    };

    console.log(formData); // Here you would instead send
    // Example POST method implementation:
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST', 
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(data)
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
  
      postData('https://example.com/api/problems', formData)
        .then(data => {
          console.log(data); // JSON data parsed by `response.json()` call
          // Display a success message or handle redirection
        }).catch(error => {
          console.error('Error:', error);
          // Handle errors, such as displaying a user-friendly error message
        });
  });
  
  