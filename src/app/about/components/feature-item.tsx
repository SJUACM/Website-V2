import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface FeatureItemProps {
  icon: IconProp;
  title: string;
  description: string;
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
      <div className="bg-red-500/10 p-3 rounded-lg">
        <FontAwesomeIcon icon={icon} className="text-xl text-red-500" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
