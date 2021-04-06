     // DOM Events Manipulation

     document.body.addEventListener('click', function(e) {


         if (e.target.classList.contains('open-modal-1')) {
             e.preventDefault();
             document.querySelector('.modal-1').style.display = 'block';
         }

         if (e.target.classList.contains('close-modal')) {
             e.target.parentElement.parentElement.style.display = 'none';

         }

     });



     var ctx = document.getElementById('LineChart').getContext('2d');
     var chart = new Chart(ctx, {
         // The type of chart we want to create
         type: 'line',

         // The data for our dataset
         data: {
             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
             datasets: [{
                 label: 'My First dataset',
                 backgroundColor: 'rgb(255, 99, 132)',
                 borderColor: 'rgb(255, 99, 132)',
                 data: [0, 10, 5, 2, 20, 30, 45]
             }]
         },

         // Configuration options go here
         options: {}
     });


     // Generate Calendar

     let calendar = document.querySelector('.calendar');

     for (let i = 1; i < 31; i++) {

         let day = document.createElement('span');
         day.textContent = i;
         // Generate Mark GREEN
         if (i == 3 || i == 7 || i == 26) {
             let mark = document.createElement('span');
             mark.className = 'mark-green';
             day.append(mark);
         }

         // Generate Mark RED
         if (i == 5 || i == 8 || i == 18) {
             let mark = document.createElement('span');
             mark.className = 'mark-red mark-green';
             day.append(mark);
         }

         calendar.appendChild(day);
     }