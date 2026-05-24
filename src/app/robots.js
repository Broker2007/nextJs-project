export default function robots() {
  // ВАЖНО: Замени этот URL на твой реальный домен
  const baseUrl = 'https://vektorv.ru';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
