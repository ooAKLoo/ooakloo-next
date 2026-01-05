import fs from 'fs';
import path from 'path';
import ProductDetailClient from './ProductDetailClient';

interface PageProps {
  params: Promise<{ lang: string; id: string }>;
}

export async function generateStaticParams() {
  const productsDir = path.join(process.cwd(), 'data/products');
  const files = fs.readdirSync(productsDir);
  const productIds = files.map((f) => f.replace('.json', ''));

  const params = [];
  for (const id of productIds) {
    params.push({ lang: 'en', id });
    params.push({ lang: 'cn', id });
  }
  return params;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { lang, id } = await params;

  // Read product data at build time
  const filePath = path.join(process.cwd(), 'data/products', `${id}.json`);
  let product = null;

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    product = JSON.parse(content);
  } catch {
    product = null;
  }

  return <ProductDetailClient lang={lang} product={product} />;
}
