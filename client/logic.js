



$(document).ready(function () {
    var gambiarra = '<div class="card"> <div class="card-header bg-light navbar-light" id="headingTwo"><h2 class="mb-0"><button class="btn btn-link color-orange collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">CS-GO</button></h2></div><div id="collapseTwo" class="" aria-labelledby="headingTwo" data-parent="#accordionExample"><div class="card-body color-purple"></div></div></div>'
    
    $('#adicionar').on('click', function () {
        $('#accordionExample').append(gambiarra)
    })
    $('.card').on('click', function (){

    })

    $('.card').on('shown.bs.modal', function () {
        $('#meuInput').trigger('focus')
      })

      $.ajax(
        {
          type: "GET",
          url: "/mockList.json",
          dataType: "json",     
          success: function (data) {
            
            alert('success');
    
          },
    
        });
})