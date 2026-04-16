const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Começar agora</h3>
            <div className="space-y-2">
              <a href="mailto:info@javali.pt" className="block hover:text-orange-400 transition-colors">
                info@javali.pt
              </a>
              <a href="tel:00351212957215" className="block hover:text-orange-400 transition-colors">
                +351 212 957 215
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.drupal.org/javali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                Drupal.org
              </a>
              <a 
                href="https://www.linkedin.com/company/javali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.facebook.com/javali.adsi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informação</h3>
            <div className="space-y-2">
              <a href="#legal" className="block hover:text-orange-400 transition-colors">
                Informação legal
              </a>
              <a href="#accessibility" className="block hover:text-orange-400 transition-colors">
                Acessibilidade
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2026 JAVALI - Especialistas em desenvolvimento web Drupal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
