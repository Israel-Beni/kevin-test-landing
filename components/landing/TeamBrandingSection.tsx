import { BrandKitCard } from './BrandKitCard';
import TeamGraphic from "@/components/graphics/TeamGraphic";
import { SectionTitle, SectionDescription, SectionContainer, Section } from "@/components/ui/section";

export function TeamBrandingSection() {
  return (
    <Section>
      <SectionContainer>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 justify-center items-center">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 order-2 lg:order-1">
            <SectionTitle>Share the brand across your team on SlideSpeak</SectionTitle>
            <SectionDescription>Always on-brand. Every slide is perfectly on-brand and ready to impress clients, investors, and stakeholders. 100% consistency, every time.</SectionDescription>
          </div>

          <div className="relative order-1 md:order-2 relative  w-full h-fit max-w-140 h-60 md:h-80 lg:h-100 flex items-center justify-center">
            <TeamGraphic className='w-full object-contain' />
            <div className="absolute z-20 transform -translate-y-1/2 top-1/2 right-1/2 translate-x-1/2">
              <BrandKitCard />
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
