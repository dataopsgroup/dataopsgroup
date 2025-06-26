
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600",
        // Topic-specific color variants
        "data-strategy":
          "border-transparent bg-purple-600 text-white hover:bg-purple-700",
        "revenue-operations":
          "border-transparent bg-emerald-600 text-white hover:bg-emerald-700",
        "crm-management":
          "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        "marketing-finance":
          "border-transparent bg-orange-600 text-white hover:bg-orange-700",
        "data-quality":
          "border-transparent bg-red-600 text-white hover:bg-red-700",
        "marketing-operations":
          "border-transparent bg-indigo-600 text-white hover:bg-indigo-700",
        "hubspot-consulting":
          "border-transparent bg-teal-600 text-white hover:bg-teal-700",
        "sales-operations":
          "border-transparent bg-pink-600 text-white hover:bg-pink-700",
        "business-intelligence":
          "border-transparent bg-cyan-600 text-white hover:bg-cyan-700",
        "lead-generation":
          "border-transparent bg-amber-600 text-white hover:bg-amber-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Helper function to convert category to variant
const getCategoryVariant = (category: string): string => {
  const categoryMap: Record<string, string> = {
    "Data Strategy": "data-strategy",
    "Revenue Operations": "revenue-operations", 
    "CRM Management": "crm-management",
    "Marketing Finance": "marketing-finance",
    "Data Quality": "data-quality",
    "Marketing Operations": "marketing-operations",
    "HubSpot Consulting": "hubspot-consulting",
    "Sales Operations": "sales-operations",
    "Business Intelligence": "business-intelligence",
    "Lead Generation": "lead-generation",
  };
  
  return categoryMap[category] || "default";
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  category?: string;
}

function Badge({ className, variant, category, ...props }: BadgeProps) {
  // Always use category variant if category is provided, otherwise use the variant prop
  const finalVariant = category ? getCategoryVariant(category) : variant;
  
  return (
    <div className={cn(badgeVariants({ variant: finalVariant as any }), className)} {...props} />
  )
}

export { Badge, badgeVariants, getCategoryVariant }
