import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";

interface FeatureCardProps {
  icon: IconProp;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] p-6 rounded-xl border h-[200px] w-full max-w-[280px] mx-auto">
        <CardItem translateZ="50" className="text-xl text-red-500 mb-3">
          <FontAwesomeIcon icon={icon} />
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-base font-bold text-white mb-2"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-sm text-neutral-300 leading-relaxed"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
