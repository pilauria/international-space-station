const button = document.querySelector('.button');

function getPosition() {
  fetch('https://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var date = new Date();
      data = `<h2>Current Position</h2>
              <p>Latitute: (${data.iss_position.latitude})</p>
              <p>Longitude: ${data.iss_position.longitude})</p>
              <p>Date: [${date}]</p>`;

      document.getElementById('output').innerHTML = data;
      // button.style.width = '50%';
    });
}

button.addEventListener('click', getPosition);
