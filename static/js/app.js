     // DOM Events Manipulation

     document.body.addEventListener('click', function(e) {

// Open and Close Modal
         if (e.target.classList.contains('open-modal-1')) {
             e.preventDefault();
             document.querySelector('.modal-1').style.display = 'block';
         }

         if (e.target.classList.contains('close-modal')) {
             e.preventDefault();
            document.querySelector('.modal').style.display = 'none';
         }

// Manage the category buttons
         if (e.target.classList.contains('button-label')){
             e.preventDefault();
          let buttons =  document.querySelectorAll('.button-label');
        
          for(let button of buttons){
              button.classList.remove('button-selected');
          }

              e.target.classList.add('button-selected');
let categoria = e.target.innerText;
let ver = document.getElementById('category-checkbox').setAttribute('value',categoria );
document.getElementById('category-checkbox').checked = true;


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
                 label: 'Balance on Last Months',
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
         if (i == 3) {
             let mark = document.createElement('span');
             mark.className = 'mark-green';
             day.append(mark);
         }

         // Generate Mark RED
         if (i == 5) {
             let mark = document.createElement('span');
             mark.className = 'mark-red mark-green';
             day.append(mark);
         }

         calendar.appendChild(day);
     }