import { useEffect, useState } from 'react'

function App() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://drupal-project.ddev.site/jsonapi/node/javali_service')
      .then(res => res.json())
      .then(json => setServices(json.data || []));

    fetch('http://drupal-project.ddev.site/jsonapi/node/portfolio_project')
      .then(res => res.json())
      .then(json => setProjects(json.data || []));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">JAVALI</h1>
        <nav className="space-x-4">
          <a href="#services" className="text-blue-600 hover:underline">Services</a>
          <a href="#portfolio" className="text-blue-600 hover:underline">Portfolio</a>
        </nav>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Welcome to Javali</h2>
          <p className="text-gray-600">We build digital experiences with Drupal and React.</p>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <div key={service.id} className="border p-4 rounded">
                <h3 className="font-bold text-lg mb-2">{service.attributes.title}</h3>
                <div
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: service.attributes.body?.value }}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map(project => (
              <div key={project.id} className="border p-4 rounded">
                <h3 className="font-bold text-lg mb-2">{project.attributes.title}</h3>
                <div className="bg-gray-200 h-32 flex items-center justify-center text-sm text-gray-500">
                  Project Image
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 pt-8 border-t text-center text-gray-500">
        <p>&copy; 2026 Javali Project</p>
      </footer>
    </div>
  );
}

export default App;