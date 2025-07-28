interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className = "" }: PageHeaderProps) => {
  return (
    <div className={`min-h-screen bg-background pt-20 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;