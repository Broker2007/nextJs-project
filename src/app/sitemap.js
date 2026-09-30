import ProductsData from '@/ProductsData/ProductsData';

export default function sitemap() {
  // ВАЖНО: Замени этот URL на твой реальный домен на masterhost (например, https://vektor.ru)
  const baseUrl = 'https://vektorv.ru';

  // Динамические маршруты товаров (для каждого товара из каталога)
  const productUrls = ProductsData.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Статические страницы сайта
  const staticRoutes = ['', '/about', '/contact', '/equipment', '/products'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.9, // Главная страница имеет наивысший приоритет
  }));

  return [...staticRoutes, ...productUrls];
}
