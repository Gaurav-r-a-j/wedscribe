# Deprecated Template Files

## Why These Files Are Here

These template files have been **deprecated** and moved to this directory for the following reasons:

1. **Config-based templates** - Now use data-driven system via `templateConfigs.ts`
2. **Commented out** - Were disabled in the UI (duplicate layouts with color variations)
3. **Code cleanup** - Reducing codebase complexity

## Files in This Directory (30 total)

### Config-Based Templates (4 files)
These now render from `templateConfigs.ts`:
- ✅ **VelvetRose.tsx** → `VELVET_ROSE` config
- ✅ **OceanBreeze.tsx** → `OCEAN_BREEZE` config  
- ✅ **GoldenHeritage.tsx** → `GOLDEN_HERITAGE` config
- ✅ **PhoolMala.tsx** → `PHOOL_MALA` config

### Commented/Unused Templates (26 files)
These were commented out in the editor UI:
- MintBlossom.tsx
- SacredSaffron.tsx
- NoorCrescent.tsx
- GracefulLily.tsx
- ClassicGold.tsx
- ModernSlate.tsx
- PastelPeony.tsx
- NavyMinimal.tsx
- RusticKraft.tsx
- EmeraldLeaf.tsx
- BlushMarble.tsx
- DesertSands.tsx
- LavenderMist.tsx
- NoirElegant.tsx
- AquaGlass.tsx
- IvoryModern.tsx
- KalyanMandap.tsx
- ZehraCrescent.tsx
- GraceChapel.tsx
- KhalsaHeritage.tsx
- ShantiJain.tsx
- LotusSerenity.tsx
- RangoliFestive.tsx
- HeritagePeacock.tsx
- MonsoonTeal.tsx

## Active Templates (Still in Use)

The following templates remain active in `src/components/templates/`:
1. **SkyBlossom.tsx** - Modern template
2. **RegalAnvika.tsx** - Royal template
3. **IvoryLines.tsx** - Minimal template
4. **RoyalRed.tsx** - Festive template
5. **Minimalist.tsx** - Clean template
6. **MaroonHeritage.tsx** - Hindu template
7. **RoyalMandala.tsx** - Hindu template
8. **EmeraldCrescent.tsx** - Muslim template
9. **BackgroundShowcase.tsx** - Background switcher
10. **ShubhVivah.tsx** - Traditional (custom layout)
11. **MangalSutra.tsx** - Traditional (custom layout)

Plus config-based templates:
- VELVET_ROSE
- OCEAN_BREEZE
- GOLDEN_HERITAGE
- PHOOL_MALA

**Total Active: 15 templates**

## How Templates Work Now

### Old Way (Deprecated)
```typescript
// Individual file per template - 200 lines each
export const TemplateName = ({ profile }) => {
  return <div>{/* All layout code */}</div>;
};
```

### New Way (Config-Based)
```typescript
// templateConfigs.ts - 20 lines per template
TEMPLATE_NAME: {
  id: 'TEMPLATE_NAME',
  styleProps: {
    backgroundIndex: 3,
    fontFamily: "'Font', serif",
    // ... colors, padding, etc.
  }
}
```

## Can These Files Be Deleted?

**Yes**, but we're keeping them for:
1. Reference/documentation
2. Potential future restoration
3. Learning from old implementations
4. Migration history

## Migration Path

If you want to restore a deprecated template:

### For Config-Based Templates
Already migrated! Just use them via `templateConfigs.ts`

### For Commented Templates
1. Copy file back to `templates/` directory
2. Uncomment in `editor/index.tsx` and `sidebar.tsx`
3. Add import in `TemplateRenderer.tsx`
4. Add case in switch statement

**OR** (Better approach):
1. Add config entry to `templateConfigs.ts`
2. Use data-driven system instead!

## Statistics

- **Deprecated:** 30 files
- **Active:** 11 legacy + 4 config-based = 15 total
- **Code Reduction:** ~6,000 lines moved to deprecated
- **Maintenance:** Much easier with fewer active files

## See Also

- `src/templateConfigs.ts` - Current template configurations
- `src/components/templates/BackgroundTemplate.tsx` - Shared layout
- `src/components/common/TemplateRenderer.tsx` - Auto-renders from config
- `src/pages/editor/index.tsx` - Template selection UI

---

**Last Updated:** December 12, 2025  
**Deprecated By:** Data-driven template system + UI cleanup  
**Total Files:** 30 (4 config-based + 26 commented)
