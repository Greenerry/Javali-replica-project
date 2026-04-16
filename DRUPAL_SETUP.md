# Drupal Backend Setup for Javali Replica Project

This guide explains how to set up a Drupal backend that will provide content to the React frontend via JSON:API web services.

## Prerequisites

- Drupal 10.x installation
- JSON:API module (core in Drupal 8+)
- Permissions to install modules and create content types

## Drupal Content Types Setup

### 1. News Content Type

Create a content type called "News" (machine name: `news`):

**Fields:**
- Title (default)
- Body (default) - with summary
- Category (Taxonomy reference) - machine name: `field_category`
- Excerpt (Text) - machine name: `field_excerpt`
- Featured Image (Media) - machine name: `field_image`
- Publication Date (Date) - machine name: `field_publication_date`

**Taxonomy Vocabulary:**
- News Categories (machine name: `news_categories`)
  - Projetos e Soluções
  - Boas Práticas e Regulamentação
  - Ecossistema Javali
  - Drupal e Open Source

### 2. Projects Content Type

Create a content type called "Project" (machine name: `project`):

**Fields:**
- Title (default)
- Body (default)
- Client (Text) - machine name: `field_client`
- Project URL (Link) - machine name: `field_project_url`
- Category (Taxonomy reference) - machine name: `field_project_category`
- Featured Image (Media) - machine name: `field_project_image`

### 3. Services Content Type

Create a content type called "Service" (machine name: `service`):

**Fields:**
- Title (default)
- Body (default)
- Icon (Text) - machine name: `field_icon`
- Service Order (Integer) - machine name: `field_order`

## JSON:API Configuration

### 1. Enable JSON:API
The JSON:API module is included in Drupal core. Enable it if not already active:

```bash
drush en jsonapi -y
```

### 2. Configure Permissions
Go to `/admin/people/permissions` and ensure:
- Anonymous users have "Access JSON:API resource list" permission
- Anonymous users have "View all published content" permissions for your content types

### 3. Configure CORS (if needed)
If your React app runs on a different domain, configure CORS:

```php
// In settings.php
$settings['cors.config'] = [
  'enabled' => TRUE,
  'allowed_headers' => ['Content-Type', 'Accept', 'Authorization'],
  'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  'allowed_origins' => ['http://localhost:5177', 'https://your-react-domain.com'],
  'exposed_headers' => FALSE,
];
```

## API Endpoints

Once configured, your Drupal site will expose these endpoints:

- `/jsonapi/node/news` - All news articles
- `/jsonapi/node/project` - All projects
- `/jsonapi/node/service` - All services

### Example API Calls

```bash
# Get latest news
GET https://your-drupal-site.com/jsonapi/node/news?sort=-created&page[limit]=5

# Get news with images and categories
GET https://your-drupal-site.com/jsonapi/node/news?include=field_image,field_category&sort=-created

# Get projects
GET https://your-drupal-site.com/jsonapi/node/project?include=field_project_image,field_project_category
```

## React Frontend Configuration

### 1. Environment Variables
Create a `.env` file in your React project:

```
VITE_DRUPAL_URL=https://your-drupal-site.com
```

### 2. Update API Configuration
Edit `src/config/drupalApi.js` and update the `BASE_URL`:

```javascript
BASE_URL: import.meta.env.VITE_DRUPAL_URL || 'https://your-drupal-site.com',
```

## Sample Content Creation

### News Article Example
1. Go to `/node/add/news`
2. Title: "JAVALI lança SCANA: auditoria e consultoria em acessibilidade"
3. Body: Full article content
4. Category: "Projetos e Soluções"
5. Excerpt: "Nova solução de auditoria e consultoria em acessibilidade digital..."
6. Featured Image: Upload relevant image
7. Save and publish

### Project Example
1. Go to `/node/add/project`
2. Title: "Instituto de Estudos Medievais"
3. Body: Project description
4. Client: "Instituto de Estudos Medievais"
5. Project URL: External project link
6. Category: "Cultura, Arte e Educação"
7. Featured Image: Project screenshot/logo
8. Save and publish

## Testing the Integration

1. Start your Drupal site
2. Create sample content
3. Test API endpoints in browser
4. Start React development server
5. Verify content appears in frontend

## Troubleshooting

### CORS Issues
- Check browser console for CORS errors
- Verify CORS configuration in Drupal
- Ensure proper headers are being sent

### Permission Issues
- Verify anonymous users can access JSON:API
- Check content is published
- Verify taxonomy terms exist

### Data Structure Issues
- Use browser dev tools to inspect API responses
- Compare with expected data structure in React components
- Check field names match between Drupal and React

## Security Considerations

- Use HTTPS in production
- Implement proper authentication for admin endpoints
- Consider rate limiting for API endpoints
- Validate and sanitize all incoming data
