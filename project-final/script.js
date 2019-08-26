document.getElementById("close-search").addEventListener("click", function() {
    document.querySelector(".modal-search-bg").style.display = "none";
    document.getElementById("search-title").value = null;
   });
   document.getElementById("search").addEventListener("click", function() {
    document.querySelector(".modal-search-bg").style.display = "flex";
    document.getElementById("search-title").value = null;
   });
   function submitSearchForm() {
    document.querySelector(".modal-search-bg").style.display = "none";

    /*
    var n = localStorage.getItem('num_items')

    if (n != 0) {
        for(i = 0; i < 0; i++) {

        }
    }
*/
   }
   /*
   function clearRegisterValues {
    document.getElementById("register-username").value = null;
    document.getElementById("register-password").value = null;
    document.getElementById("register-password2").value = null;
    document.getElementById("register-password").style.color = "black";
    document.getElementById("register-password").style.border = "1px solid #820909";
    document.getElementById("register-password2").style.color = "black";
    document.getElementById("register-password2").style.border = "1px solid #820909";
    document.getElementById("error-message").innerHTML = null;
   }
   */
   document.getElementById("close-register").addEventListener("click", function() {
    document.querySelector(".modal-register-bg").style.display = "none";
    /*******************************************************/
    document.getElementById("item-title").value = null;
    document.getElementById("item-img").value = null;
    document.getElementById("item-email").value = null;
    document.getElementById("item-desc").value = null;
    document.getElementById("item-email").style.color = "black";
    document.getElementById("item-email").style.border = "1px solid #820909";
    document.getElementById("error-message").innerHTML = null;
    // clearRegisterValues();
   });

   document.getElementById("register").addEventListener("click", function() {
    document.querySelector(".modal-register-bg").style.display = "flex";
    /*******************************************************/
    document.getElementById("item-title").value = null;
    document.getElementById("item-img").value = null;
    document.getElementById("item-email").value = null;
    document.getElementById("item-desc").value = null;
    document.getElementById("item-email").style.color = "black";
    document.getElementById("item-email").style.border = "1px solid #820909";
    document.getElementById("error-message").innerHTML = null;
    // clearRegisterValues();
   });

   function submitRegisterItem() {
    var email = document.getElementById("item-email").value

    if (IsEmail(email)) {
        n = localStorage.getItem('num_items')

        var cat = document.getElementById("item-cat")
        var title = document.getElementById("item-title")
        var desc = document.getElementById("item-desc")

        localStorage.setItem('item' + n +'-email', email)
        localStorage.setItem('item' + n +'-cat', cat)      
        localStorage.setItem('item' + n +'-desc', desc)
        localStorage.setItem('item' + n +'-title', title)
        startItems()
    }
    else {
     document.getElementById("item-email").style.color = "red";
     document.getElementById("item-email").style.border = "1px solid red";
     document.getElementById("error-message").innerHTML = "Senhas não são iguais"
    }
   }

   function IsEmail(email){
        /*var exclude='/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/';
        var check='/@[w-]+./';
        var checkend='/.[a-zA-Z]{2,3}$/';
        
        if( ((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1) ) {
            return false;
        } else {*/
            return true;
        //}
    }

   function startItems(){
       var n = localStorage.getItem('num_items')
        
       if (n === null) {
        localStorage.setItem('num_items', 0)
       } else {
        
            if (n != 0) {

                var sectionFound = ''
                var sectionLost = ''

                for(i = 0; i < n; i++) {

                    var cat = localStorage.getItem('item' + i +'-cat')
                    
                    if (cat === 1) {
                        sectionFound += '<div class="container">'
                        sectionFound += '<img src="' + localStorage.getItem('item' + i +'-img') + '"></img>'
                        sectionFound += '<div class="text">'
                        sectionLost += '<p class="title">' + localStorage.getItem('item' + i +'-title') + '</p>'
                        sectionFound += '<p class="descript">' + localStorage.getItem('item' + i +'-desc') + '</p>'
                        sectionFound += '<p class="contact">' + localStorage.getItem('item' + i +'-email') + '</p>'
                        sectionFound += '</div>'
                        sectionFound += '</div>'
                    } else if (cat === 2) {
                        sectionLost += '<div class="container">'
                        sectionLost += '<img src="' + localStorage.getItem('item' + i +'-img') + '"></img>'
                        sectionLost += '<div class="text">'
                        sectionLost += '<p class="title">' + localStorage.getItem('item' + i +'-title') + '</p>'
                        sectionLost += '<p class="descript">' + localStorage.getItem('item' + i +'-desc') + '</p>'
                        sectionLost += '<p class="contact">' + localStorage.getItem('item' + i +'-email') + '</p>'
                        sectionLost += '</div>'
                        sectionLost += '</div>'
                    }
                    
                }

                document.getElementById('found').innerHTML = sectionFound
                document.getElementById('lost').innerHTML = sectionLost
            } else {
                document.getElementById('found').innerHTML = "Nenhum item cadastrado no momento"
                document.getElementById('lost').innerHTML = "Nenhum item cadastrado no momento"
            }
       }
       
   }