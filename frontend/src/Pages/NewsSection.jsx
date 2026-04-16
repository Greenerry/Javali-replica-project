import { useState, useEffect } from 'react';
import { getNews, DRUPAL_API_CONFIG } from '../config/drupalApi';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - this will be replaced with Drupal API call
  const mockNews = [
    {
      id: 1,
      title: "JAVALI lança SCANA: auditoria e consultoria em acessibilidade",
      date: "2026/04/02",
      category: "Projetos e Soluções",
      excerpt: "Nova solução de auditoria e consultoria em acessibilidade digital para garantir conformidade com padrões internacionais.",
      link: "#"
    },
    {
      id: 2,
      title: "Culture Collection of Porto reforça presença digital com Drupal",
      date: "2026/02/24",
      category: "Projetos e Soluções",
      excerpt: "Modernização completa da plataforma digital com Drupal 10 para melhorar a acessibilidade e experiência do utilizador.",
      link: "#"
    },
    {
      id: 3,
      title: "SICE - Internacionalização das PME: um apoio estratégico até 30 de março",
      date: "2026/02/10",
      category: "Boas Práticas e Regulamentação",
      excerpt: "Programa de apoio estratégico para internacionalização de pequenas e médias empresas.",
      link: "#"
    },
    {
      id: 4,
      title: "Acessibilidade web: JAVALI atinge 10/10 no AccessMonitor",
      date: "2026/02/03",
      category: "Ecossistema Javali",
      excerpt: "Avaliação independente confirma excelência em acessibilidade digital dos projetos desenvolvidos.",
      link: "#"
    },
    {
      id: 5,
      title: "Consent Popup: reforçar a confiança digital com Drupal",
      date: "2026/01/20",
      category: "Drupal e Open Source",
      excerpt: "Implementação de soluções de consentimento para conformidade com regulamentação de proteção de dados.",
      link: "#"
    }
  ];

  useEffect(() => {
    // Fetch news from Drupal JSON:API
    const fetchNews = async () => {
      try {
        setLoading(true);
        
        // Check if Drupal API is configured
        if (DRUPAL_API_CONFIG.ENABLED) {
          try {
            const response = await getNews();
            // Transform Drupal data to match our component structure
            const transformedNews = response.data.map(item => ({
              id: item.id,
              title: item.attributes.title,
              date: new Date(item.attributes.created).toLocaleDateString('pt-PT'),
              category: item.attributes.field_category || 'Notícias',
              excerpt: item.attributes.field_excerpt || item.attributes.body?.summary || '',
              link: `/noticia/${item.id}`
            }));
            setNews(transformedNews);
          } catch (drupalError) {
            console.warn('Drupal API error, using mock data:', drupalError);
            // Fallback to mock data when Drupal API fails
            setNews(mockNews);
          }
        } else {
          // Use mock data when Drupal is not configured
          console.log('Drupal API not configured, using mock data');
          setNews(mockNews);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews(mockNews);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section id="news" className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Stay informed
            </h2>
            <p className="text-gray-600 mt-2">
              Discover latest news and insights from JAVALI
            </p>
          </div>
          <div>
            <a 
              href="#news"
              className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
            >
              See all news
            </a>
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured News */}
          <div className="lg:col-span-2">
            {news[0] && (
              <a href={news[0].link} className="news-detail full block">
                <img 
                  src="/images/scana_news.jpg" 
                  alt="SCANA news image" 
                  className="w-full h-64 object-cover mb-4" 
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  JAVALI launches SCANA: auditing and consulting in accessibility
                </h3>
                <span className="text-gray-500">2026/04/02</span>
              </a>
            )}
          </div>
          
          {/* Secondary News Cards */}
          <div className="space-y-4">
            {news.slice(1).map((article) => (
              <a key={article.id} href={article.link} className="news-detail mini block">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {article.title}
                </h3>
                <span className="text-gray-500 text-sm">{article.date}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
