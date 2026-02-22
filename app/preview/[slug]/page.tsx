import BoldTemplate from '@/components/templates/BoldTemplate';
import MinimalTemplate from '@/components/templates/MinimalTemplate';
import { store } from '@/lib/mock-data';

export default function PreviewPage() {
  return (
    <div>
      <p className="muted" style={{ padding: 16 }}>Preview Mode</p>
      {store.template_name === 'bold' ? <BoldTemplate /> : <MinimalTemplate />}
    </div>
  );
}
