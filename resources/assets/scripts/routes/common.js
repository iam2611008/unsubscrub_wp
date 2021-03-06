export default {
  init() {
    // JavaScript to be fired on all pages
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn_continue = document.getElementById("btn_continue");
    var btn_3 = document.getElementById("get_started_3");

    if(btn_3) {
      btn_3.onclick = function() {
          modal.style.display = "block";
      }
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("checkbox_label").classList.remove("red");
        }
    }

    btn_continue.onclick = function(event) {
      if(document.getElementById("check_accept").checked) {
        return true;
      } else {
        event.preventDefault();
        document.getElementById("checkbox_label").classList.add("red");
      }
    }
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
