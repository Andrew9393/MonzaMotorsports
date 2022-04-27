jQuery(document).ready(function(){

    const defaultSelect = () => { 
      const element = Array.from(document.querySelectorAll('.custom_select'));
        element.map(item => {
          const choices = new Choices(item, {
            searchEnabled: false
          });
        })
      const sort_select = document.querySelector('.sort_select');
      const choices = new Choices(sort_select, {
        searchEnabled: false
      });
    }
    defaultSelect()

    $(window).scroll(function() {
        let scrY = window.scrollY
        if(scrY >= 100){
          $('.header').addClass('scroll')
        } else {
          $('.header').removeClass('scroll')
        }
    });


    $('.navbar-toggler').click(function(e){
      $('.navbar-toggler').toggleClass('active')
    })

    $(document).ready(function(){
      $(".questions_accordions_item_btn").on("click", function(){
        if($(this).hasClass('active')){
          $(this).removeClass("active");
          $(this).siblings('.questions_accordions_item_content').slideUp(200);
          $(".questions_accordions_item_btn span").removeClass("minus").addClass("plus");
        }else{
          $(".questions_accordions_item_btn span").removeClass("minus").addClass("plus");
          $(this).find("span").removeClass("plus").addClass("minus");
          $(".questions_accordions_item_btn").removeClass("active");
          $(this).addClass("active");
          $('.questions_accordions_item_content').slideUp(200);
          $(this).siblings('.questions_accordions_item_content').slideDown(200);
        }    
      });
    });



    // $('.questions_accordions').click((e) => {
    //   document.querySelectorAll('.questions_accordions_item_btn').forEach((el) => {
    //     el.classList.remove('active')
    //   })
    //   document.querySelectorAll('.questions_accordions_item_content').forEach((el) => {
    //     el.classList.remove('active')
    //   })

    //   if($(e.target).hasClass('questions_accordions_item_btn')){
    //     $(e.target).addClass('active')
    //     $(e.target).next().addClass('active')
    //   }
  
    // })


    // $('is-selected')

})