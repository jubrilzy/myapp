import StoreTemplate from '@/components/store-template';

export default function StorePage({ params }: { params: { slug: string } }) {
  return <StoreTemplate slug={params.slug} />;
}
