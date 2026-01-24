# Imágenes Requeridas para SEO

## Estado Actual

**IMPORTANTE**: Actualmente se está usando el logo existente (`/images/logos/turnera-logotipo-horizontal.jpg`) como imagen temporal para Open Graph y Twitter. 

Las siguientes imágenes están recomendadas para mejor presentación en redes sociales pero **NO EXISTEN** en el directorio `public/`:

## Imágenes Faltantes

### 1. `/public/og-image.jpg`
- **Tamaño requerido**: 1200x630px
- **Formato**: JPG o PNG
- **Uso**: Open Graph (Facebook, LinkedIn, etc.)
- **Descripción**: Imagen que se mostrará cuando se comparta el sitio en redes sociales
- **Recomendaciones**:
  - Incluir el logo de Turnera
  - Texto legible: "Turnera - Sistema de Citas para Barberías y Salones"
  - Colores de marca (rojo #AC2121)
  - Diseño atractivo y profesional

### 2. `/public/twitter-image.jpg`
- **Tamaño requerido**: 1200x675px (o 1200x630px también funciona)
- **Formato**: JPG o PNG
- **Uso**: Twitter Card (summary_large_image)
- **Descripción**: Imagen que se mostrará cuando se comparta el sitio en Twitter
- **Recomendaciones**:
  - Similar a og-image pero optimizada para Twitter
  - Puede ser la misma imagen que og-image si se usa 1200x630px
  - Texto y diseño optimizado para formato horizontal

## Ubicación de Archivos

Colocar las imágenes directamente en:
```
comingsoon/public/og-image.jpg
comingsoon/public/twitter-image.jpg
```

## Verificación

Una vez creadas las imágenes, verificar que:
1. Los archivos existan en `/public/`
2. Las URLs en `app/layout.tsx` apunten correctamente
3. Probar con herramientas como:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Nota

Las imágenes están configuradas en `app/layout.tsx` en:
- `metadata.openGraph.images[0].url` - Actualmente usando logo temporal
- `metadata.twitter.images[0]` - Actualmente usando logo temporal

**Estado actual**: Se está usando el logo horizontal como imagen temporal. Para mejor presentación en redes sociales, se recomienda crear las imágenes específicas con los tamaños correctos (1200x630px para OG y 1200x675px para Twitter).
