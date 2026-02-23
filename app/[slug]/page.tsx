import BoldTemplate from '@/components/templates/BoldTemplate';
import MinimalTemplate from '@/components/templates/MinimalTemplate';
import { store } from '@/lib/mock-data';

export default function StorefrontPage() {
  return store.template_name === 'bold' ? <BoldTemplate /> : <MinimalTemplate />;
}
