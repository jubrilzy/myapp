import { ReactNode } from 'react';

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="card panel-pad"><h3>{title}</h3><p className="muted">{description}</p>{action}</div>;
}

export function LoadingSkeleton({ rows = 4 }: { rows?: number }) {
  return <div className="card panel-pad">{Array.from({ length: rows }).map((_, i) => <div key={i} className="skel" />)}</div>;
}

export function ErrorPlaceholder({ message }: { message: string }) {
  return <div className="card panel-pad"><h3>Something went wrong</h3><p className="muted">{message}</p></div>;
}
