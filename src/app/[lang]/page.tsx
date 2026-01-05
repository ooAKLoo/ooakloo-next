import { type Locale } from '@/lib/i18n';
import { getMessages } from '@/messages';
import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import carouselData from '../../../data/carousel.json';
import softwareData from '../../../data/software.json';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const messages = getMessages(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="w-full">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 lg:pt-8">
          <Carousel images={carouselData} />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">
              {messages.software}
            </h2>
            <div className="mt-4 w-12 h-px bg-gray-300" />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {softwareData.map((item, index) => (
              <div
                key={item.enName}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard
                  name={locale === 'cn' ? item.cnName : item.enName}
                  slogan={locale === 'cn' ? item.cnSlogan : item.enSlogan}
                  imageUrl={item.url}
                  date={locale === 'cn' && item.comingSoon ? '即将发布' : item.date}
                  productId={item.productInfo}
                  lang={locale}
                  comingSoon={item.comingSoon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
