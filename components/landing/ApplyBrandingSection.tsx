
import React from 'react';
import { BrandKitCard } from './BrandKitCard';
import { cn } from '@/lib/utils';

import { Section, SectionContainer, SectionTitle, SectionDescription } from "@/components/ui/section";
import { PresentationGraphic } from "@/components/graphics/PresentationGraphic";



export function ApplyBrandingSection() {
    return (
        <Section>
            <SectionContainer>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 justify-center items-center">
                    <div className="flex py-3 md:py-4 lg:py-5.5 items-center justify-between">
                        <BrandKitCard />
                        <PresentationGraphic className="relative left-1.5" />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
                        <SectionTitle>Apply to any presentation.</SectionTitle>
                        <SectionDescription>No manual styling required. Once you setup brand kit, your branding will be applied to every new presentation you create with SlideSpeak AI.</SectionDescription>
                    </div>

                </div>
            </SectionContainer>
        </Section>
    );
}
