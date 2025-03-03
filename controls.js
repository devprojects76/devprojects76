//append json to html function from: https://stackoverflow.com/questions/51275730/populate-html-table-with-json-data
//first add an event listener for page load
        document.addEventListener( "DOMContentLoaded", get_json_data, false ); // get_json_data is the function name that will fire on page load

        //this function is in the event listener and will execute on page load
        function get_json_data(){
            var json_url = 'readinglist.json';

            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() { 
                if (this.readyState == 4 && this.status == 200) {

                    var data = JSON.parse(this.responseText); // convert the response to a json object
                    append_json(data);// pass the json object to the append_json function
                }
            }
            //set the request destination and type
            xmlhttp.open("POST", json_url, true);
            //set required headers for the request
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // send the request
            xmlhttp.send(); 
        }
        function append_json(data){
            var table = document.getElementById('reading-list');
            data.forEach(function(object) {
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + <a target='_blank' href='"+ object.NAME.split('href=')+"' >"+object.NAME.split('href=')+"</a> + '</td>' +
                '<td>' + object.AUTHOR + '</td>' +
                '<td>' + object.TYPE + '</td>' +
                '<td>' + object.SUBJECTAREA + '</td>' +  
                '<td>' + object.DATE + '</td>';
                table.appendChild(tr);
            });
        }

