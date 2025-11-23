$(document).ready(function () {
    // Prevent hash scroll and always start at top
    if (window.location.hash) {
        // Remove hash from URL
        history.replaceState(null, null, ' ');
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Force again after a short delay (overrides browser hash behavior)
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 1);
    // ===== PAGE LOADER =====
    let loaderProgress = 0;
    const loaderBarFill = $('.loader-bar-fill');
    const loaderPercentage = $('.loader-percentage');
    const pageLoader = $('.page-loader');
    const MIN_LOADING_TIME = 3000; // 3 seconds minimum
    const startTime = Date.now();

    // Simulate loading progress
    const loaderInterval = setInterval(() => {
        loaderProgress += Math.random() * 12 + 3; // Slower progress

        if (loaderProgress >= 100) {
            loaderProgress = 100;

            // Check if minimum time has elapsed
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

            clearInterval(loaderInterval);

            // Wait for minimum loading time before hiding
            setTimeout(() => {
                // Hide loader after completion
                setTimeout(() => {
                    pageLoader.addClass('hidden');
                    // Remove from DOM after animation
                    setTimeout(() => {
                        pageLoader.remove();
                    }, 500);
                }, 300);
            }, remainingTime);
        }

        loaderBarFill.css('width', loaderProgress + '%');
        loaderPercentage.text(Math.floor(loaderProgress) + '%');
    }, 250); // Slower interval

    // ===== SCROLL PROGRESS BAR =====
    const updateScrollProgress = () => {
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollTop = $(window).scrollTop();
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        $('.scroll-progress-bar').css('width', scrollPercentage + '%');
    };

    // Update on scroll
    $(window).on('scroll', updateScrollProgress);

    // Update on resize
    $(window).on('resize', updateScrollProgress);

    // Initial update
    updateScrollProgress();

    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#8b5cf6', '#06b6d4', '#ec4899']
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#8b5cf6',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Scroll animations
    $(window).scroll(function () {
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
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Support Engineer", "Cloud Expert", "Linux Specialist", "Debugging Expert"],
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

    // Projects carousel script
    $('.projects-carousel').addClass('owl-carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 3000, /* Slightly slower for projects */
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

    // Scroll reveal animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll reveal
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // EmailJS form submission
    (function () {
        // Initialize EmailJS with your public key
        // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        emailjs.init("YOUR_PUBLIC_KEY");
    })();

    // Handle form submission
    $('#contact-form').on('submit', function (e) {
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
            .then(function (response) {
                // Success
                statusDiv.addClass('success')
                    .html('<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.')
                    .fadeIn();

                // Reset form
                $('#contact-form')[0].reset();

                // Re-enable button
                submitBtn.prop('disabled', false).text(originalBtnText);
            }, function (error) {
                // Error
                statusDiv.addClass('error')
                    .html('<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again or contact me directly at sridharsri13579@gmail.com')
                    .fadeIn();

                // Re-enable button
                submitBtn.prop('disabled', false).text(originalBtnText);
            });
    });

    // Add smooth hover effect to cards
    $('.card, .glass-card').hover(
        function () {
            $(this).css('transition', 'all 0.3s ease');
        },
        function () {
            $(this).css('transition', 'all 0.3s ease');
        }
    );

    // ===== TERMINAL FUNCTIONALITY =====
    const terminal = {
        history: [],
        historyIndex: -1,
        output: $('#terminal-output'),
        input: $('#terminal-input'),

        commands: {
            help: function () {
                return `<div class="info-text">Available Commands:</div>
<div class="command-output">
  <span class="success-text">help</span>       - Show this help message
  <span class="success-text">whoami</span>     - Display user information
  <span class="success-text">skills</span>     - List technical skills
  <span class="success-text">projects</span>   - Show recent projects
  <span class="success-text">logs</span>       - Demonstrate log parsing
  <span class="success-text">ffmpeg</span>     - Show ffmpeg expertise
  <span class="success-text">cloud</span>      - Cloud infrastructure check
  <span class="success-text">clear</span>      - Clear terminal
  <span class="success-text">contact</span>    - Get contact information
</div>`;
            },

            whoami: function () {
                return `<div class="success-text">P R Sridhar</div>
<div class="command-output">
  Role:        Senior Support Engineer @ Amagi Media Labs
  Expertise:   Cloud Infrastructure | Linux | SRE | Debugging
  Location:    Bengaluru, Karnataka
  GitHub:      github.com/sridharreddy23
  LinkedIn:    linkedin.com/in/sridh116/
</div>`;
            },

            skills: function () {
                return `<div class="info-text">Core Technical Skills:</div>
<div class="command-output">
  <span class="success-text">☁️  Cloud</span>      AWS (MediaLive, MediaConnect, EC2, S3) | Azure | GCP
  <span class="success-text">🐧 Linux</span>       Ubuntu | RHEL | Bash | SystemD | Kernel Debugging
  <span class="success-text">🔧 Tools</span>       ffmpeg | Docker | Kubernetes | Terraform
  <span class="success-text">📊 Monitoring</span>  Prometheus | Grafana | ELK | Datadog
  <span class="success-text">🐛 Debugging</span>   GDB | Strace | Wireshark | Log Analysis
</div>`;
            },

            projects: function () {
                return `<div class="info-text">Featured Projects:</div>
<div class="command-output">
  1. <span class="success-text">Zero-Latency Live Stream</span>
     └─ AWS MediaLive & MediaConnect + ffmpeg orchestration
     └─ 99.999% uptime for high-profile events
  
  2. <span class="success-text">Rapid Response Scripts</span>
     └─ Custom Bash/Python toolkit for log parsing
     └─ 90% faster issue resolution than peers
  
  3. <span class="success-text">Command-Line Mastery</span>
     └─ Expert in Bash scripting & automation
     └─ Rapid bug triage and workaround deployment
</div>`;
            },

            logs: function () {
                return `<div class="info-text">$ grep -E "ERROR|FATAL" /var/log/streaming.log | tail -n 5</div>
<div class="command-output">
  <span class="error-text">[2025-01-22 14:30:15] ERROR: Stream buffer overflow detected</span>
  <span class="error-text">[2025-01-22 14:30:16] ERROR: Failed to allocate memory for video frame</span>
  <span class="error-text">[2025-01-22 14:30:18] FATAL: Encoder crash - Code 0x00000139</span>
  
  <span class="info-text">Root Cause Analysis:</span>
  └─ Memory leak in ffmpeg pipeline
  └─ Fixed by adjusting buffer size + restarting encoder service
  └─ MTTR: 3 minutes
</div>`;
            },

            ffmpeg: function () {
                return `<div class="info-text">$ ffmpeg -i input.mp4 -c:v libx264 -preset ultrafast -c:a aac output.m3u8</div>
<div class="command-output">
  <span class="success-text">ffmpeg version 4.4.2</span> Copyright (c) 2000-2021 the FFmpeg developers
  Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'input.mp4':
    Duration: 01:23:45.00, bitrate: 5000 kb/s
    Stream #0:0: Video: h264, 1920x1080, 30 fps
    Stream #0:1: Audio: aac, 48000 Hz, stereo
  
  <span class="info-text">Output:</span>
  Stream mapping: Video:0 -\u003e #0:0 (h264) | Audio:0 -\u003e #0:1 (aac)
  <span class="success-text">✓ Transcoding complete</span> - 1.2x realtime speed
  <span class="success-text">✓ HLS playlist generated</span> - Ready for CDN delivery
</div>`;
            },

            cloud: function () {
                return `<div class="info-text">$ aws ec2 describe-instances --region us-east-1 | jq '.Reservations[].Instances[] | {id: .InstanceId, state: .State.Name}'</div>
<div class="command-output">
  {
    "id": "i-0a1b2c3d4e5f6a7b8",
    "state": "<span class="success-text">running</span>"
  }
  {
    "id": "i-9z8y7x6w5v4u3t2s1",
    "state": "<span class="success-text">running</span>"
  }
  
  <span class="info-text">MediaLive Channel Status:</span>
  └─ channel-001: <span class="success-text">RUNNING</span> | Bitrate: 5 Mbps | Viewers: 12.4K
  └─ channel-002: <span class="success-text">RUNNING</span> | Bitrate: 3 Mbps | Viewers: 8.2K
  
  <span class="success-text">All systems operational ✓</span>
</div>`;
            },

            clear: function () {
                terminal.output.html('');
                return '';
            },

            contact: function () {
                return `<div class="info-text">Contact Information:</div>
<div class="command-output">
  <span class="success-text">📧 Email:</span>     sridharsri13579@gmail.com
  <span class="success-text">📱 Phone:</span>     +91 9629850963
  <span class="success-text">💼 LinkedIn:</span>  linkedin.com/in/sridh116/
  <span class="success-text">🐙 GitHub:</span>    github.com/sridharreddy23
  <span class="success-text">📍 Location:</span>  Bengaluru, Karnataka
</div>`;
            }
        },

        addOutput: function (content) {
            this.output.append(`<div class="command-line">${content}</div>`);
            this.scrollToBottom();
        },

        scrollToBottom: function () {
            const terminalBody = $('#terminal-body');
            terminalBody.scrollTop(terminalBody[0].scrollHeight);
        },

        executeCommand: function (cmd) {
            const trimmed = cmd.trim().toLowerCase();

            // Add command to output
            this.addOutput(`<div class="command-input">sridhar@amagi-cloud:~$ ${cmd}</div>`);

            // Add to history
            if (cmd.length > 0) {
                this.history.push(cmd);
                this.historyIndex = this.history.length;
            }

            // Execute command
            if (this.commands[trimmed]) {
                const result = this.commands[trimmed]();
                if (result) {
                    this.addOutput(result);
                }
            } else if (trimmed === '') {
                // Empty command, do nothing
            } else {
                this.addOutput(`<div class="error-text">Command not found: ${cmd}</div><div class="dim-text">Type 'help' for available commands</div>`);
            }

            // Clear input
            this.input.val('');
        },

        runDemo: async function () {
            const demoCommands = [
                { cmd: 'whoami', delay: 1000 },
                { cmd: 'skills', delay: 2000 },
                { cmd: 'logs', delay: 2500 },
                { cmd: 'ffmpeg', delay: 2500 },
                { cmd: 'cloud', delay: 2000 }
            ];

            $('#run-demo').prop('disabled', true).text('Running Demo...');

            for (const { cmd, delay } of demoCommands) {
                await terminal.typeCommand(cmd);
                await terminal.sleep(delay);
            }

            $('#run-demo').prop('disabled', false).text('Run Demo');
        },

        typeCommand: function (cmd) {
            return new Promise((resolve) => {
                let index = 0;
                this.input.val('');
                this.input.focus();

                const typeInterval = setInterval(() => {
                    if (index < cmd.length) {
                        this.input.val(this.input.val() + cmd[index]);
                        index++;
                    } else {
                        clearInterval(typeInterval);
                        setTimeout(() => {
                            this.executeCommand(cmd);
                            resolve();
                        }, 300);
                    }
                }, 100);
            });
        },

        sleep: function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },

        navigateHistory: function (direction) {
            if (this.history.length === 0) return;

            if (direction === 'up') {
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                }
            } else if (direction === 'down') {
                if (this.historyIndex < this.history.length) {
                    this.historyIndex++;
                }
            }

            if (this.historyIndex < this.history.length) {
                this.input.val(this.history[this.historyIndex]);
            } else {
                this.input.val('');
            }
        }
    };

    // Terminal input handler
    terminal.input.on('keydown', function (e) {
        if (e.which === 13) { // Enter key
            e.preventDefault();
            const cmd = $(this).val();
            terminal.executeCommand(cmd);
        } else if (e.which === 38) { // Up arrow
            e.preventDefault();
            terminal.navigateHistory('up');
        } else if (e.which === 40) { // Down arrow
            e.preventDefault();
            terminal.navigateHistory('down');
        }
    });

    // Run demo button
    $('#run-demo').on('click', function () {
        terminal.runDemo();
    });

    // Clear terminal button
    $('#clear-terminal').on('click', function () {
        terminal.output.html(`<div class="welcome-msg">
            <span class="neon-text">Welcome to PRS Terminal v1.0</span><br>
            <span class="dim-text">Type 'help' for available commands or try the demo</span>
        </div>`);
        terminal.input.val('').focus();
        terminal.history = [];
        terminal.historyIndex = -1;
    });

    // Focus terminal input when clicking anywhere in terminal body
    $('#terminal-body').on('click', function () {
        terminal.input.focus();
    });

    // Auto-focus terminal input on page load
    setTimeout(() => {
        terminal.input.focus();
    }, 500);
});