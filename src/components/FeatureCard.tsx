import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-6 border border-white/10">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <Icon className="text-gray-400" size={48} />
        </div>
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}