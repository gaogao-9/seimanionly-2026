import {
  Card as ShadcnCard,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/components/ui/card";

export interface CardWrapperProps {
  children: React.ReactNode;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return (
    <ShadcnCard className="flex flex-col mx-4 my-10 lg:mx-8 gap-10">
      {children}
    </ShadcnCard>
  );
};

export interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <ShadcnCard className="font-['Noto_Sans_JP',sans-serif] font-light bg-white gap-3 px-4 py-10">
      {children}
    </ShadcnCard>
  );
};

export interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <ShadcnCardHeader className="py-0 mt-2">{children}</ShadcnCardHeader>;
};

export interface CardTitleProps {
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <ShadcnCardTitle className="mb-8 text-4xl text-taupe-600 underline font-medium">
      {children}
    </ShadcnCardTitle>
  );
};

export interface CardSubTitleProps {
  children: React.ReactNode;
}

export const CardSubTitle: React.FC<CardSubTitleProps> = ({ children }) => {
  return (
    <ShadcnCardTitle className="text-2xl text-orange-800 font-medium">
      {children}
    </ShadcnCardTitle>
  );
};

export interface CardContentProps {
  className?: string;
  noSpacing?: boolean;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  className,
  noSpacing,
  children,
}) => {
  return (
    <ShadcnCardContent
      className={`${noSpacing ? "" : "ml-5"} mb-4 ${className}`}
    >
      {children}
    </ShadcnCardContent>
  );
};

export interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
}) => {
  return (
    <ShadcnCardDescription
      className={`text-lg text-cyan-900 leading-[1.75] font-light ${className}`}
    >
      <span className="[&_a]:[color:var(--color-blue-800)] [&_a]:underline">
        {children}
      </span>
    </ShadcnCardDescription>
  );
};
