$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Support Engineer!", "Cloud Expert!", "Linux Specialist!", "Debugging Expert!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Support Engineer!", "Cloud Expert!", "Linux Specialist!", "Debugging Expert!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // EmailJS form submission
    (function() {
        // Initialize EmailJS with your public key
        // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        emailjs.init("YOUR_PUBLIC_KEY");
    })();

    // Handle form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = $('#submit-btn');
        const statusDiv = $('#form-status');
        const originalBtnText = submitBtn.text();
        
        // Disable button and show loading
        submitBtn.prop('disabled', true).text('Sending...');
        statusDiv.hide().removeClass('success error');
        
        // Get form data
        const formData = {
            user_name: $('#user_name').val(),
            user_email: $('#user_email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };
        
        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            .then(function(response) {
                // Success
                statusDiv.addClass('success')
                    .html('<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.')
                    .fadeIn();
                
                // Reset form
                $('#contact-form')[0].reset();
                
                // Re-enable button
                submitBtn.prop('disabled', false).text(originalBtnText);
            }, function(error) {
                // Error
                statusDiv.addClass('error')
                    .html('<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again or contact me directly at sridharsri13579@gmail.com')
                    .fadeIn();
                
                // Re-enable button
                submitBtn.prop('disabled', false).text(originalBtnText);
            });
    });
});