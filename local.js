window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
      document.getElementById('contactForm').addEventListener('submit', function() {
      // Get the value of the name field.
      var name = document.getElementById('name').value;

      // Save the name in localStorage.
      localStorage.setItem('name', name);
    });

  }

  // Retrieve the users name.
  var name = localStorage.getItem('name');

  if (name != "undefined" || name != "null") {
    document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
  } else
    document.getElementById('welcomeMessage').innerHTML = "Hello!";
  }
}

//localStorage.removeItem('name');
//localStorage.clear();

}

// Storing Data
sessionStorage.setItem('name', 'Matt West');

// Retrieving Data
var name = sessionStorage.getItem('name');

// Deleting Data
sessionStorage.removeItem('name');

// Retrieving an Item Key
sessionStorage.key(n);

// Clearing the Datastore
sessionStorage.clear();

