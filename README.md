# Control Total Fumigaciones Paz

Sitio web corporativo de Control Total Fumigaciones Paz — empresa de control de plagas, desinfección y saneamiento en CABA.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Variables de entorno

Copiá `.env.example` a `.env` y definí la URL pública del sitio:

```
VITE_SITE_URL=https://www.tudominio.com.ar
```

Esto activa canonical, Open Graph, Twitter Cards y datos estructurados con URLs absolutas.

## Archivos pendientes

Agregá estos archivos en `public/assets/images/` si aún no existen:

- `logo.png` — logo de la empresa (usado en navbar y hero)

## SEO incluido

- Meta tags optimizados (description, robots, geo)
- Open Graph y Twitter Cards
- JSON-LD (`PestControlService` + `WebSite`)
- `robots.txt` y `sitemap.xml` (actualizá la URL en el sitemap al publicar)

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build para producción    |
| `npm run lint` | Verificación con ESLint  |
| `npm run preview` | Vista previa del build |
