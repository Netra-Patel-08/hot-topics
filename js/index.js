 // GET THE REFERENCES
        const container = document.getElementById('main-content');
        const links = document.querySelectorAll('.nav-link');
        let url = './partials/home.html';

        // CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
        const loadContent = (urlFeed) => {
            /*
            IMPORTANT NOTES:
            loadContent RUNS EVERY TIME A LINK IS CLICKED.
            loadContent REQUIRES THE INPUT. THIS INPUT IS
            THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
            EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
            THE UPDATED PATH TO THE REQUESTED CONTENT.
            */
            
            // Show loading state
            container.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading content...</div>';
            
            // Simulate content loading (since we can't use fetch for local files in this demo)
            setTimeout(() => {
                if (urlFeed.includes('home.html')) {
                    container.innerHTML = `
                        <article>
                            <h2>The Value of Money</h2>
                            <div class="article-content">
                                <figure class="article-image">
                                    <img src="../img/money.jpg" alt="Money and financial concepts illustration" />
                                    <figcaption>The evolving nature of monetary value</figcaption>
                                </figure>
                                <div class="article-text">
                                    <p>Money has transformed dramatically throughout human history, evolving from simple bartering systems to complex digital currencies. In today's interconnected world, the value of money extends far beyond its purchasing power—it represents trust, stability, and social contracts.</p>
                                    
                                    <p>The rise of cryptocurrencies and digital payment systems challenges traditional notions of monetary value. While central banks maintain their role as economic stabilizers, decentralized currencies offer new possibilities for financial inclusion and innovation. This shift raises fundamental questions about who controls money and how value is determined in an increasingly digital society.</p>
                                    
                                    <p>Understanding money's true value requires looking beyond numbers on a screen or paper in a wallet. It encompasses opportunity cost, time value, and the social systems that give currency meaning. As we navigate economic uncertainty and technological disruption, recognizing money as both a tool and a reflection of human cooperation becomes increasingly important for making informed financial decisions.</p>
                                </div>
                            </div>
                        </article>
                        
                        <article>
                            <h2>GMO Food: Science Meets Sustenance</h2>
                            <div class="article-content">
                                <figure class="article-image">
                                    <img src="../img/agriculture.jpg" alt="GMO crops and agricultural science visualization" />
                                    <figcaption>Genetic modification in modern agriculture</figcaption>
                                </figure>
                                <div class="article-text">
                                    <p>Genetically modified organisms (GMOs) represent one of the most significant advances in agricultural science, yet they remain surrounded by public debate and misconception. These scientifically engineered crops offer solutions to pressing global challenges including food security, nutritional deficiency, and climate change adaptation.</p>
                                    
                                    <p>Research consistently demonstrates that approved GMO foods are as safe as conventional crops. Regulatory agencies worldwide, including the FDA, WHO, and European Food Safety Authority, have established rigorous testing protocols. Golden rice, engineered to contain beta-carotene, exemplifies how genetic modification can address vitamin A deficiency affecting millions in developing nations.</p>
                                    
                                    <p>The environmental benefits of GMO crops include reduced pesticide use, improved drought resistance, and enhanced crop yields on existing farmland. As global population approaches 10 billion by 2050, genetic modification provides essential tools for sustainable agriculture. However, successful implementation requires transparent communication, continued safety monitoring, and consideration of socioeconomic impacts on farming communities.</p>
                                </div>
                            </div>
                        </article>
                        
                        <article>
                            <h2>The World in 2100: A Vision of Tomorrow</h2>
                            <div class="article-content">
                                <figure class="article-image">
                                    <img src="../img/landscape.jpg" alt="Futuristic cityscape and technology visualization" />
                                    <figcaption>Imagining our world's future landscape</figcaption>
                                </figure>
                                <div class="article-text">
                                    <p>The world of 2100 will likely be shaped by three transformative forces: climate adaptation, technological integration, and demographic shifts. Rising sea levels will have reshaped coastlines, driving unprecedented urban planning innovations including floating cities and vertical farms. Renewable energy will dominate, with fusion power potentially revolutionizing global energy access.</p>
                                    
                                    <p>Artificial intelligence will be seamlessly integrated into daily life, managing everything from traffic flow to healthcare diagnostics. Brain-computer interfaces may enable direct knowledge transfer and enhanced cognitive abilities. However, these advances will raise new questions about human identity, privacy, and equality as technology becomes increasingly indispensable to human functioning.</p>
                                    
                                    <p>Society will grapple with an aging global population, extended human lifespans, and new forms of work as automation handles routine tasks. Cultural preservation will become crucial as digital connectivity continues to blur geographical boundaries. The choices we make today regarding education, environmental stewardship, and technological governance will determine whether 2100 represents humanity's greatest triumph or its most challenging crossroads.</p>
                                </div>
                            </div>
                        </article>
                    `;
                } else {
                    container.innerHTML = `
                        <h2>Portfolio</h2>
                        <div class="portfolio-grid">
                            <div class="portfolio-card">
                                <img src="../img/web-design.jpg" alt="Web Design Project" />
                                <h3>Modern Web Solutions</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/mobile-app.jpg" alt="Mobile App Project" />
                                <h3>Mobile Applications</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/brand-identity.jpg" alt="Brand Identity Project" />
                                <h3>Brand Identity Design</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/ecommerce platform.jpg" alt="E-commerce Project" />
                                <h3>E-commerce Platform</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/data-visual.jpg" alt="Data Visualization Project" />
                                <h3>Data Visualization</h3>
                            </div>
                            <div class="portfolio-card">
                                <img src="../img/ux.jpg" alt="UX Research Project" />
                                <h3>User Experience Research</h3>
                            </div>
                        </div>
                    `;
                }
            }, 500);
        };

        // CALL loadContent WITH THE CURRENT VALUE OF url 
        loadContent(url);

        // CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
        const selectContent = (event) => {
            // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
            event.preventDefault();
            
            // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
            const href = event.target.getAttribute('href');
            
            // Update active link
            links.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            
            // CALL THE FUNCTION loadContent PROVIDING THE href
            // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
            // OF loadContent FUNCTION.
            loadContent(href);
        };

        // REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
        links.forEach(link => {
            link.addEventListener('click', selectContent);
        });