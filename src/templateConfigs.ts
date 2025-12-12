import { BackgroundTemplateStyleProps } from './components/templates/BackgroundTemplate';

export interface TemplateConfig {
    id: string;
    name: string;
    badge: string;
    colorClass: string;
    styleProps: BackgroundTemplateStyleProps;
}

export const TEMPLATE_CONFIGS: Record<string, TemplateConfig> = {
    VELVET_ROSE: {
        id: 'VELVET_ROSE',
        name: 'Velvet Rose',
        badge: 'Elegant',
        colorClass: 'bg-rose-50 text-rose-900',
        styleProps: {
            backgroundIndex: 3,
            fontFamily: "'Playfair Display', serif",
            headingFontFamily: "'Playfair Display', serif",
            headingColor: '#831843',
            textColor: '#4a1c2e',
            labelColor: '#9d174d',
            borderColor: '#fda4af',
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            }
        }
    },

    GOLDEN_HERITAGE: {
        id: 'GOLDEN_HERITAGE',
        name: 'Golden Heritage',
        badge: 'Classic',
        colorClass: 'bg-amber-50 text-amber-900',
        styleProps: {
            backgroundIndex: 15,
            fontFamily: "'Cormorant Garamond', serif",
            headingFontFamily: "'Cormorant Garamond', serif",
            headingColor: '#78350f',
            textColor: '#451a03',
            labelColor: '#92400e',
            borderColor: '#fbbf24',
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            }
        }
    },

    PHOOL_MALA: {
        id: 'PHOOL_MALA',
        name: 'Phool Mala',
        badge: 'Festive',
        colorClass: 'bg-orange-50 text-orange-900',
        styleProps: {
            backgroundIndex: 28, // bg-29 (flower garland background)
            fontFamily: "'Crimson Pro', serif",
            headingFontFamily: "'Cinzel', serif",
            headingColor: '#7c2d12', // Deep brown for headings
            textColor: '#1c0a00', // Very dark brown for text
            labelColor: '#92400e', // Medium brown for labels
            borderColor: '#ea580c', // Orange for borders
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            },
            padding: {
                top: '100px', // Space for flower garlands at top
                bottom: '100px', // Space for lotus at bottom
                left: '70px',
                right: '70px'
            }
        }
    },

    SUVARNA_MANDALA: {
        id: 'SUVARNA_MANDALA',
        name: 'Suvarna Mandala',
        badge: 'Elegant',
        colorClass: 'bg-amber-50 text-amber-900',
        styleProps: {
            backgroundIndex: 29, // bg-30 (cream/gold mandala background)
            fontFamily: "'Crimson Pro', serif",
            headingFontFamily: "'Cinzel', serif",
            headingColor: '#78350f', // Deep brown for headings
            textColor: '#1c0a00', // Very dark brown for text
            labelColor: '#92400e', // Medium brown for labels
            borderColor: '#d97706', // Golden amber for borders
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            },
            padding: {
                top: '80px',
                bottom: '80px',
                left: '70px',
                right: '70px'
            }
        }
    },

    LAAL_PHOOL: {
        id: 'LAAL_PHOOL',
        name: 'Laal Phool',
        badge: 'Traditional',
        colorClass: 'bg-red-900 text-amber-50',
        styleProps: {
            backgroundIndex: 30, // bg-31 (red border with cream center)
            fontFamily: "'Outfit', sans-serif",
            headingFontFamily: "'Outfit', sans-serif",
            headingColor: '#7f1d1d', // Deep red for headings
            textColor: '#1c0a00', // Very dark brown for text
            labelColor: '#991b1b', // Rich red for labels
            borderColor: '#b91c1c', // Bright red for borders
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            },
            padding: {
                top: '90px', // Space for floral corners
                bottom: '90px', // Space for floral corners
                left: '75px',
                right: '75px'
            }
        }
    }
};

// List of templates to display in UI (in order)
export const TEMPLATE_DISPLAY_LIST: TemplateConfig[] = [
    TEMPLATE_CONFIGS.VELVET_ROSE,
    TEMPLATE_CONFIGS.GOLDEN_HERITAGE,
    TEMPLATE_CONFIGS.PHOOL_MALA,
    TEMPLATE_CONFIGS.SUVARNA_MANDALA,
    TEMPLATE_CONFIGS.LAAL_PHOOL,
];

// Helper function to get template config
export const getTemplateConfig = (templateId: string): TemplateConfig | undefined => {
    return TEMPLATE_CONFIGS[templateId];
};

// Get all template IDs
export const getAllTemplateIds = (): string[] => {
    return Object.keys(TEMPLATE_CONFIGS);
};
