// Source of truth for GF Fitness design tokens. See BRANDING.md.
// Values live in tokens.json so CommonJS tooling (Tailwind config) can require them.
// Web mirrors these in apps/web/src/index.css @theme block.

import tokens from './tokens.json'

export const colors = tokens.colors as Record<string, string>
export const fonts = tokens.fonts as Record<'heading' | 'body' | 'mono', string>
export const fontFallbacks = tokens.fontFallbacks as Record<'heading' | 'body' | 'mono', string[]>
