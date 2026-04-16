// Drupal API Configuration
export const DRUPAL_API_CONFIG = {
  // Drupal site URL - DDEV environment
  BASE_URL: import.meta.env.VITE_DRUPAL_URL || 'https://drupal-project.ddev.site',
  
  // Flag to disable API calls when Drupal is not configured
  ENABLED: import.meta.env.VITE_DRUPAL_URL && import.meta.env.VITE_DRUPAL_URL !== 'https://your-drupal-site.com',
  
  // JSON:API endpoints
  ENDPOINTS: {
    NEWS: '/jsonapi/node/news',
    PROJECTS: '/jsonapi/node/project',
    SERVICES: '/jsonapi/node/service',
    PAGES: '/jsonapi/node/page'
  },
  
  // API parameters
  PARAMS: {
    // Include related entities (images, taxonomy terms, etc.)
    INCLUDE: 'field_image,field_category,field_tags',
    
    // Sort by creation date (newest first)
    SORT: '-created',
    
    // Pagination
    LIMIT: 10,
    OFFSET: 0
  }
};

// Helper function to build API URLs
export const buildApiUrl = (endpoint, params = {}) => {
  const baseUrl = `${DRUPAL_API_CONFIG.BASE_URL}${endpoint}`;
  const searchParams = new URLSearchParams();
  
  // Add default parameters
  searchParams.append('include', DRUPAL_API_CONFIG.PARAMS.INCLUDE);
  searchParams.append('sort', DRUPAL_API_CONFIG.PARAMS.SORT);
  searchParams.append('page[limit]', DRUPAL_API_CONFIG.PARAMS.LIMIT);
  searchParams.append('page[offset]', DRUPAL_API_CONFIG.PARAMS.OFFSET);
  
  // Add custom parameters
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      searchParams.append(key, params[key]);
    }
  });
  
  return `${baseUrl}?${searchParams.toString()}`;
};

// Helper function to fetch data from Drupal
export const fetchFromDrupal = async (endpoint, params = {}) => {
  // Don't make requests if Drupal is not configured
  if (!DRUPAL_API_CONFIG.ENABLED) {
    throw new Error('Drupal API not configured');
  }
  
  try {
    const url = buildApiUrl(endpoint, params);
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Drupal:', error);
    throw error;
  }
};

// Specific API functions
export const getNews = async (params = {}) => {
  return fetchFromDrupal(DRUPAL_API_CONFIG.ENDPOINTS.NEWS, params);
};

export const getProjects = async (params = {}) => {
  return fetchFromDrupal(DRUPAL_API_CONFIG.ENDPOINTS.PROJECTS, params);
};

export const getServices = async (params = {}) => {
  return fetchFromDrupal(DRUPAL_API_CONFIG.ENDPOINTS.SERVICES, params);
};
