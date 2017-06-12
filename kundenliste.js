 function clearAll(){
            localStorage.clear();
            location.reload();
        }
        
        function saveCustomer(){
            var customer = document.getElementById("customer").value;
            if(customer!='')
	           {
                   var all = getCustomers();
                   all.push(customer);
                   localStorage.setItem('customers', JSON.stringify(all));
                }
            location.reload();
        }
        
        function getCustomers(){
            var all = localStorage.getItem('customers');
            if(!all){
                all = [];
                localStorage.setItem('customers', JSON.stringify(all));
            } else {
                all = JSON.parse(all);
            }
            return all;
        }
        
        function printAll(){
            var all = getCustomers();
            var list = document.getElementById('customerList');
            for(var i = 0; i < all.length; ++i){
                var cstmr = document.createElement('li');
                cstmr.setAttribute('id', i);
                list.appendChild(cstmr);
                
                var customerlistObject = document.createElement('div');  // list (ul)--> cstmr (li)--> customerlistObject (div) --> Text, Buttons
                customerlistObject.setAttribute('id', i);
                customerlistObject.innerHTML = all[i];
                cstmr.appendChild(customerlistObject);
                
                var editbutton = document.createElement('button');
                editbutton.setAttribute('id', i);
                editbutton.innerHTML = 'Bearbeiten';
                customerlistObject.appendChild(editbutton);
                
                var deletebutton = document.createElement('button');
                deletebutton.setAttribute('id', i);
                deletebutton.innerHTML = 'Löschen';
                customerlistObject.appendChild(deletebutton);
                
            
                deletebutton.onclick = deleteCustomer;
                editbutton.onclick = edit;
            }
        }
        
        function deleteCustomer(e){
            var id = e.target.id;
            var all = localStorage.getItem('customers');
            all = JSON.parse(all);
            all.splice(id, 1);
            localStorage.setItem('customers', JSON.stringify(all));
            location.reload();
        }
        
        function edit(e){
            var id = e.target.id;
            var all = localStorage.getItem('customers');
            all = JSON.parse(all);
            var kunde = all[id];
            var neuerKunde = window.prompt("Kunde bearbeiten:", kunde);
            if(neuerKunde != null){
                all.splice(id, 1);
                all.push(neuerKunde);
            }
            localStorage.clear();
            var neu = JSON.stringify(all);
            localStorage.setItem('customers', neu);
            location.reload();
        }