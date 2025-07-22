// BingiTech Portfolio Cloudflare Worker
// Serves the strategic technology portfolio at bingitech.io

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Redirect www to root domain
    if (url.hostname === 'www.bingitech.io') {
      return Response.redirect(`https://bingitech.io${url.pathname}${url.search}`, 301);
    }
    
    // Handle the root domain
    if (url.hostname === 'bingitech.io') {
      // Serve the main portfolio page for root path
      if (url.pathname === '/' || url.pathname === '/index.html') {
        return new Response(htmlContent, {
          headers: {
            'content-type': 'text/html;charset=UTF-8',
            'cache-control': 'public, max-age=3600',
            'x-powered-by': 'BingiTech Strategic Solutions'
          },
        });
      }
      
      // Handle other routes (404)
      return new Response('Page not found', { 
        status: 404,
        headers: { 'content-type': 'text/plain' }
      });
    }
    
    // Default response for other domains
    return new Response('Not found', { status: 404 });
  },
};

// Embedded HTML content for the portfolio
const htmlContent = \`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BingiTech | Strategic Technology Solutions</title>
    <meta name="description" content="Caribbean-based strategic technology consultancy specializing in DevOps, AI solutions, cybersecurity, and custom platform development for government and enterprise clients.">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="BingiTech | Strategic Technology Solutions">
    <meta property="og:description" content="Strategic technology consultancy delivering enterprise solutions across the Caribbean and globally.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://bingitech.io">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>">
    
    <style>
        :root {
            --jamaica-green: #009639;
            --jamaica-black: #000000;
            --jamaica-gold: #FFCD00;
            --caribbean-blue: #0066cc;
            --text-light: #f8f9fa;
            --text-muted: #6c757d;
            --gradient-bg: linear-gradient(135deg, var(--jamaica-black), var(--jamaica-green));
            --gradient-accent: linear-gradient(45deg, var(--jamaica-gold), var(--caribbean-blue));
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: var(--text-light);
            background: var(--gradient-bg);
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Header */
        .header {
            padding: 2rem 0;
            position: relative;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
        }

        .logo {
            font-size: 2rem;
            font-weight: 800;
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--jamaica-gold);
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 4rem 0;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero .subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            color: var(--text-muted);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-button {
            display: inline-block;
            background: var(--gradient-accent);
            color: var(--jamaica-black);
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-top: 1rem;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(255, 205, 0, 0.3);
        }

        /* Services Grid */
        .services {
            padding: 6rem 0;
        }

        .services h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 4rem;
            color: var(--text-light);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .service-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 2rem;
            transition: transform 0.3s ease, background 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .service-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: block;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--jamaica-gold);
        }

        .service-card p {
            color: var(--text-muted);
            margin-bottom: 1rem;
        }

        .price-range {
            font-weight: 700;
            color: var(--jamaica-green);
            font-size: 1.1rem;
        }

        /* Contact Section */
        .contact {
            padding: 6rem 0;
            text-align: center;
        }

        .contact h2 {
            font-size: 2.5rem;
            margin-bottom: 4rem;
            color: var(--text-light);
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            text-align: center;
        }

        .contact-item {
            padding: 2rem;
        }

        .contact-item .icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            display: block;
            color: var(--jamaica-gold);
        }

        .contact-item h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--text-light);
        }

        .contact-item p {
            color: var(--text-muted);
        }

        .contact-item a {
            color: var(--caribbean-blue);
            text-decoration: none;
        }

        .contact-item a:hover {
            color: var(--jamaica-gold);
        }

        /* Footer */
        .footer {
            padding: 3rem 0;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer p {
            color: var(--text-muted);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav {
                flex-direction: column;
                gap: 1rem;
            }

            .nav-links {
                gap: 1rem;
            }

            .container {
                padding: 0 1rem;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">BingiTech</div>
                <ul class="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <!-- Hero Section -->
            <section class="hero">
                <h1>Strategic Technology Solutions</h1>
                <p class="subtitle">Caribbean-based consultancy delivering enterprise-grade DevOps, AI, and custom platform solutions for government and enterprise clients worldwide.</p>
                <a href="#contact" class="cta-button">Start Your Project</a>
            </section>
        </div>
    </header>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="container">
            <h2>Our Expertise</h2>
            <div class="services-grid">
                <div class="service-card">
                    <span class="service-icon">☁️</span>
                    <h3>DevOps & Cloud Infrastructure</h3>
                    <p>Enterprise AWS/GCP deployments, Kubernetes orchestration, CI/CD automation, and infrastructure as code using Terraform.</p>
                    <div class="price-range">$5K - $50K projects</div>
                </div>

                <div class="service-card">
                    <span class="service-icon">🤖</span>
                    <h3>AI & Emerging Technology</h3>
                    <p>Custom AI model deployment, edge computing solutions, machine learning pipelines, and intelligent automation systems.</p>
                    <div class="price-range">$15K - $100K projects</div>
                </div>

                <div class="service-card">
                    <span class="service-icon">🛡️</span>
                    <h3>Cybersecurity Solutions</h3>
                    <p>Security architecture design, vulnerability assessments, compliance frameworks, and incident response planning.</p>
                    <div class="price-range">$10K - $75K assessments</div>
                </div>

                <div class="service-card">
                    <span class="service-icon">🏖️</span>
                    <h3>Tourism & Hospitality Technology</h3>
                    <p>Custom booking platforms, AI-powered content generation, mobile-first experiences, and tourism analytics dashboards.</p>
                    <div class="price-range">$25K - $150K platforms</div>
                    <p><a href="https://demo-bvi.com" style="color: var(--caribbean-blue);" target="_blank">🇻🇬 BVI Demo</a> | <a href="https://d23zucj5s9o84k.cloudfront.net" style="color: var(--caribbean-blue);" target="_blank">🇱🇨 Saint Lucia Demo</a></p>
                </div>

                <div class="service-card">
                    <span class="service-icon">🎨</span>
                    <h3>Creative Technology</h3>
                    <p>Interactive experiences, real-time content generation, IoT integrations, and multimedia platform development.</p>
                    <div class="price-range">$20K - $100K projects</div>
                </div>

                <div class="service-card">
                    <span class="service-icon">📊</span>
                    <h3>Strategic Technology Consulting</h3>
                    <p>Digital transformation roadmaps, technology stack optimization, scalability planning, and executive advisory services.</p>
                    <div class="price-range">$5K - $50K engagements</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2>Ready to Transform Your Technology?</h2>
            <div class="contact-grid">
                <div class="contact-item">
                    <span class="icon">💼</span>
                    <h3>Enterprise Consulting</h3>
                    <p>Strategic technology planning and enterprise solution architecture</p>
                    <p><a href="mailto:enterprise@bingitech.io">enterprise@bingitech.io</a></p>
                </div>

                <div class="contact-item">
                    <span class="icon">🚀</span>
                    <h3>Project Development</h3>
                    <p>Custom platform development and rapid prototyping services</p>
                    <p><a href="mailto:projects@bingitech.io">projects@bingitech.io</a></p>
                </div>

                <div class="contact-item">
                    <span class="icon">🏛️</span>
                    <h3>Government Services</h3>
                    <p>Tourism boards, public sector technology, and compliance solutions</p>
                    <p><a href="mailto:government@bingitech.io">government@bingitech.io</a></p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 3rem;">
                <a href="mailto:hello@bingitech.io" class="cta-button">Get Started Today</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 BingiTech Strategic Solutions. Delivering excellence from the Caribbean to the world.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>\`;`;