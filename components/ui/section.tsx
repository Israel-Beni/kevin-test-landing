import * as React from "react"

import { cn } from "@/lib/utils"

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "page_container",
      className
    )}
    {...props}
  />
))
Section.displayName = "Section"

const SectionContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "section_container",
      className
    )}
    {...props}
  />
))
SectionContainer.displayName = "SectionContainer"

const SectionTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold text-2xl md:text-3xl lg:text-4xl leading-11 tracking-[-0.02em] text-gray-900", className)}
    {...props}
  />
))
SectionTitle.displayName = "SectionTitle"

const SectionDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-sans font-normal text-base md:text-md lg:text-lg leading-7 tracking-normal text-gray-600", className)}
    {...props}
  />
))
SectionDescription.displayName = "SectionDescription"

export { Section, SectionContainer, SectionTitle, SectionDescription }
